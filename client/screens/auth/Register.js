import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }

      setLoading(false);

      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(data && data.message);
      navigation.navigate("Login");
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"Name"} value={name} setValue={setName} />
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
        Already Registered ?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          LOGIN
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

export default Register;
