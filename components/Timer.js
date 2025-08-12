import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
function Timer(props) {
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerTop}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.timerBottom}>
        <View style={styles.minutesContainer}>
          <Text style={styles.minutesText}>Min</Text>
          <Text style={styles.minutesTime}>{props.minutes}</Text>
        </View>
        <View style={styles.secondsContainer}>
          <Text style={styles.secondsText}>Sec</Text>
          <Text style={styles.secondsTime}>{props.seconds}</Text>
        </View>
        <View style={styles.roundsContainer}>
          <Text style={styles.roundsText}>Rnd</Text>
          <Text style={styles.roundsTime}>{props.rounds}</Text>
        </View>
        <View style={styles.restContainer}>
          <Text style={styles.restText}>Rest</Text>
          <Text style={styles.restTime}>{props.restTime}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  timerTop: {
    flexDirection: "row",
    justifyContent: "center",
  },
  timerBottom: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  minutesContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  minutesText: {},
  minutesTime: {},
  secondsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  secondsText: {},
  secondsTime: {},
  roundsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  roundsText: {},
  roundsTime: {},
  restContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  restText: {},
  restTime: {},
});

export default Timer;
