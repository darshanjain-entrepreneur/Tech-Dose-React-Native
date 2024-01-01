import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }

      setLoading(false);

      const { data } = await axios.post(
        "http://192.168.29.53:8080/api/v1/auth/login",
        { email, password }
      );
      alert(data && data.message);

      await AsyncStorage.setItem("@auth", JSON.stringify(data));

      console.log(data.user);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          autoComplete="email"
          inputMode="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          autoComplete="password"
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnTitle={"Submit"}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <Text style={styles.linktext}>
        not a User ?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>{" "}
      </Text>
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
  linktext: {
    textAlign: "center",
    fontSize: 20,
  },
  link: {
    fontWeight: "bold",
  },
});

export default Login;
