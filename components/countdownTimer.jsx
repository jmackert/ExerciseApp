import React, { useState, useEffect, useRef } from "react";
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

function countdownTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState();
  const [timeLeft, setTimeLeft] = useState(0);
  const Ref = useRef();

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  function StartTimer() {
    setTimeLeft(time);
    setIsRunning(true);
  }

  function StopTimer() {
    setIsRunning(false);
  }

  function PauseTimer() {
    setIsRunning(false);
  }

  function FormatTime(_minutes, _seconds) {
    time = minutes * 60 + seconds;

    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    let displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      displayMinutes,
      displaySeconds,
    };
  }

  return (
    <SafeAreaView>
      <View>
        <Text>
          {FormatTime().displayMinutes} : {FormatTime().displaySeconds}
        </Text>

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
export default countdownTimer;
