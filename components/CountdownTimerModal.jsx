import React, { useState, useEffect, useRef, use } from "react";
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

function CountdownTimerModal({ handleModal, selectedTimer }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    parseInt(selectedTimer.minutes * 60) + parseInt(selectedTimer.seconds)
  );
  const [restTimeLeft, setRestTimeLeft] = useState(
    parseInt(selectedTimer.restTime)
  );
  const [numRounds, setNumRounds] = useState(parseInt(selectedTimer.rounds));
  const [currentRound, setCurrentRound] = useState(1);
  const [isRestTime, setIsRestTime] = useState(false);

  useEffect(() => {
    let interval;
    while (currentRound <= numRounds) {
      if (isRunning && timeLeft > 0 && currentRound <= numRounds) {
        interval = setInterval(() => {
          console.log(timeLeft);
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeLeft === 0 && currentRound != numRounds) {
        if (isRunning && restTimeLeft > 0 && currentRound < numRounds) {
          console.log("@@@@");
          setIsRestTime(true);
          interval = setInterval(() => {
            console.log(restTimeLeft);
            setRestTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
        } else if (restTimeLeft === 0) {
          console.log("TEST");
          setIsRestTime(false);
          //setRestTimeLeft(parseInt(selectedTimer.restTime));
          setCurrentRound(currentRound + 1);
          setRestTimeLeft(parseInt(selectedTimer.rest));
        }
      } else if (timeLeft === 0 && currentRound > numRounds) {
        setIsRunning(false);
      }
      return () => clearInterval(interval);
    }
  }, [isRunning, timeLeft, restTimeLeft]);

  function StartTimer() {
    setIsRunning(true);
  }

  function StopTimer() {
    setIsRunning(false);
    handleModal(false);
  }

  function PauseTimer() {
    setIsRunning(false);
  }

  function FormatTime() {
    let minutes = Math.floor((timeLeft / 60) % 60);
    let seconds = Math.floor(timeLeft % 60);

    let restSeconds = Math.floor(restTimeLeft % 60);

    let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    let displatRestSeconds = restSeconds < 10 ? `0${restSeconds}` : restSeconds;

    return {
      displayMinutes,
      displaySeconds,
      displatRestSeconds,
    };
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Round: {currentRound}</Text>
        {!isRestTime ? (
          <Text>
            {FormatTime().displayMinutes} : {FormatTime().displaySeconds}
          </Text>
        ) : (
          <Text>00 : {FormatTime().displatRestSeconds}</Text>
        )}

        <TouchableOpacity
          style={styles.startTimerContainer}
          onPress={() => {
            StartTimer(true);
          }}
        >
          <View style={styles.bottomScreenLeft}>
            <Text style={styles.startTimerButton}>Start</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stopTimerContainer}
          onPress={() => {
            StopTimer(true);
          }}
        >
          <View style={styles.bottomScreenRight}>
            <Text style={styles.stopTimerContainer}>Stop</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pasueTimerContainer}
          onPress={() => {
            PauseTimer(true);
          }}
        >
          <View style={styles.bottomScreenMiddle}>
            <Text style={styles.pasueTimerContainer}>Pasue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default CountdownTimerModal;
