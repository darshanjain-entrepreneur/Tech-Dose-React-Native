import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({
  inputTitle,
  inputMode,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View>
      <Text>{inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        inputMode={inputMode}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#afcbf7",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2e2626",
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    color: "black",
  },
});

export default InputBox;
