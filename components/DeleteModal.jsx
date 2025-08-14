import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function DeleteModal({
  handleModal,
  handleDeleteTimer,
  selectedTimer,
}) {
  function deleteTimer() {
    handleDeleteTimer();
    handleModal(false);
  }
  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text>Are you sure that you want to delete {selectedTimer.title}?</Text>
        <TouchableOpacity onPress={() => deleteTimer()}>
          <Text> Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleModal(false)}>
          <Text> No</Text>
        </TouchableOpacity>
      </View>
    </View>
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
});
