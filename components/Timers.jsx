import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  FlatList,
  Platform,
} from "react-native";

import Timer from "./Timer";
import CreateTimerModal from "./CreateTimerModal";
import CountdownTimerModal from "./CountdownTimerModal";

import colors from "../app/config/colors";

function Timers() {
  const [timerItems, setTimerItems] = useState([]);
  const [openCreateTimerModal, setOpenCreateTimerModal] = useState(false);
  const [openCountdownTimerModal, setOpenCountdownTimerModal] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState();

  const handleAddTimer = (timerTitle, minutes, seconds, rounds, restTime) => {
    if (!timerTitle) {
      timerTitle = "Timer " + (timerItems.length + 1);
    }
    if (!minutes) {
      minutes = 0;
    }
    if (!seconds) {
      seconds = 0;
    }
    if (!rounds) {
      rounds = 0;
    }
    if (!restTime) {
      restTime = 0;
    }
    const newTimer = {
      title: timerTitle,
      minutes: minutes,
      seconds: seconds,
      rounds: rounds,
      restTime: restTime,
    };
    setTimerItems((t) => [...t, newTimer]);
  };

  const handleDeleteTimer = (index) => {
    let timersCopy = [...timerItems];
    timersCopy.splice(index, 1);
    setTimerItems(timersCopy);
    console.log("Select");
  };

  const newHandleDeleteTimer = (index) => {
    console.log("Delete");
  };

  const handleSelectTimer = (index) => {
    setOpenCountdownTimerModal(true);
    setSelectedTimer(timerItems[index]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={openCreateTimerModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setOpenCreateTimerModal(false)}
      >
        <View style={styles.centeredView}>
          {openCreateTimerModal && (
            <CreateTimerModal
              closeModal={setOpenCreateTimerModal}
              addTimer={handleAddTimer}
            />
          )}
        </View>
      </Modal>

      <Modal
        visible={openCountdownTimerModal}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setOpenCountdownTimerModal(false)}
      >
        <View style={styles.centeredView}>
          {openCountdownTimerModal && (
            <CountdownTimerModal
              handleModal={setOpenCountdownTimerModal}
              selectedTimer={selectedTimer}
            />
          )}
        </View>
      </Modal>

      <View style={styles.background}>
        <Image
          style={styles.image}
          source={require("../app/assets/timer-256.png")}
        />
        {/*TIMER LIST*/}
        <View style={styles.timerListContainer}>
          <FlatList
            style={styles.flatListStyle}
            data={timerItems}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectTimer(index)}
                >
                  <Timer
                    title={item.title}
                    minutes={item.minutes}
                    seconds={item.seconds}
                    rounds={item.rounds}
                    restTime={item.restTime}
                  />
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={
              <View style={styles.emptyTimerTextContainer}>
                <Text style={styles.emptyTimerText}>No Timers Saved</Text>
              </View>
            }
          />
        </View>
      </View>
      {/* Add/DELETE BUTTONS */}
      <View style={styles.bottomScreenContainer}>
        <TouchableOpacity
          style={styles.addTimerContainer}
          onPress={() => {
            setOpenCreateTimerModal(true);
          }}
        >
          <View style={styles.bottomScreenLeft}>
            <Text style={styles.createTimerButton}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteTimerContainer}
          onPress={() => {
            newHandleDeleteTimer();
          }}
        >
          <View style={styles.bottomScreenRight}>
            <Text style={styles.deleteTimerButton}>x</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addTimerContainer: {
    flex: 1,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.offwhite,
  },
  bottomScreenContainer: {
    height: Platform.OS === "ios" ? "9%" : "12%",
    flexDirection: "row",

    backgroundColor: "pink",
  },
  bottomScreenLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomScreenRight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  createTimerButton: {
    fontSize: 25,
    color: "green",
  },
  deleteTimerButton: {
    fontSize: 25,
    color: "red",
  },
  deleteTimerContainer: {
    flex: 1,
    marginBottom: 10,
  },
  emptyTimerTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "85%",
  },
  emptyTimerText: {
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 300,
    marginLeft: 50,
    position: "absolute",
    top: "22%",
    opacity: 0.25,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timerListContainer: {
    flex: 1,
    alignItems: "center",
  },
  flatListStyle: {
    flex: 1,
    width: "95%",
  },
});

export default Timers;
