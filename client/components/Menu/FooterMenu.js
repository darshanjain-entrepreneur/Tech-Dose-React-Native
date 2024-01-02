import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesome5 name="home" style={styles.iconStyle} />
        <Text>Home</Text>
      </Pressable>
      <Pressable>
        <FontAwesome5 name="plus-circle" style={styles.iconStyle} />
        <Text>Post</Text>
      </Pressable>
      <Pressable>
        <FontAwesome5 name="info-circle" style={styles.iconStyle} />
        <Text>About</Text>
      </Pressable>
      <Pressable>
        <FontAwesome5 name="user" style={styles.iconStyle} />
        <Text>Account</Text>
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
    alignSelf: "center",
    fontSize: 25,
  },
});

export default FooterMenu;
