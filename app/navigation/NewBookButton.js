import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewBookButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={"white"} size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default NewBookButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "blue",
    borderColor: "white",
    justifyContent: "center",
    borderRadius: 35,
    borderWidth: 5,
    bottom: 20,
    width: 70,
    height: 70,
  },
});
