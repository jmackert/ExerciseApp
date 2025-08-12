import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
} from "react-native";

function CreateTimerModal({ closeModal, addTimer }) {
  const [timerTitle, createTimerTitle] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [rounds, setRounds] = useState();
  const [restTime, setRestTime] = useState();

  const handleCreateTimer = () => {
    Keyboard.dismiss();
    addTimer(timerTitle, minutes, seconds, rounds, restTime);
    closeModal(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTitle}>
            <Text>Create A Timer</Text>
          </View>
          <View style={styles.modalBody}>
            <TextInput
              style={styles.textInput}
              placeholder={"Write Timer Name"}
              value={timerTitle}
              onChangeText={(text) => createTimerTitle(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Minutes"}
              value={minutes}
              onChangeText={(text) => setMinutes(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Seconds"}
              value={seconds}
              onChangeText={(text) => setSeconds(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Rounds"}
              value={rounds}
              onChangeText={(text) => setRounds(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Rest"}
              value={restTime}
              onChangeText={(text) => setRestTime(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity onPress={() => handleCreateTimer()}>
              <View style={styles.addTimerWrapper}>
                <Text style={styles.addTimerText}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closeModal(false)}>
              <View style={styles.cancelButtonWrapper}>
                <Text style={styles.cancelButton}>x</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    margin: 20,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {},
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalBody: {},
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timerWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    //borderColor: "#C0C0:",
    borderWidth: 1,
    width: 250,
  },
  addTimerWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    //borderColor: "#C0C0:",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  addTimerText: {},
  cancelButton: {},
  cancelButtonWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    //borderColor: "#C0C0C0:",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default CreateTimerModal;
