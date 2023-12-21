import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <Pressable style={styles.submitBtn} onPress={handleSubmit}>
      <Text style={styles.btnText}>
        {loading ? (
          <ActivityIndicator size="large" color="#f8f5f5" />
        ) : (
          btnTitle
        )}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#f90240",
    height: 50,
    marginHorizontal: 25,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#e2f5fb",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SubmitButton;
