import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useContext } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AuthContext } from "../../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderMenu = () => {
  const [state, setState] = useContext(AuthContext);

  const handleLogout = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
    alert("Logout successful ");
  };

  return (
    <View>
      <Pressable onPress={handleLogout}>
        <FontAwesome5 name="sign-out-alt" style={styles.iconStyle} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },

  iconStyle: {
    marginBottom: 3,
    marginRight: 5,
    alignSelf: "center",
    fontSize: 25,
  },
});

export default HeaderMenu;
