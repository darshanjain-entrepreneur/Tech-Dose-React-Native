import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation, useRoute } from "@react-navigation/native";

const FooterMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          style={styles.iconStyle}
          color={route.name === "Home" && "#e10a6b"}
        />
        <Text>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Post")}>
        <FontAwesome5
          name="plus-circle"
          style={styles.iconStyle}
          color={route.name === "Post" && "#3950e6"}
        />
        <Text>Post</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("About")}>
        <FontAwesome5
          name="info-circle"
          style={styles.iconStyle}
          color={route.name === "About" && "#ff2424"}
        />
        <Text>About</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Account")}>
        <FontAwesome5
          name="user"
          style={styles.iconStyle}
          color={route.name === "Account" && "#13ffe3"}
        />
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
