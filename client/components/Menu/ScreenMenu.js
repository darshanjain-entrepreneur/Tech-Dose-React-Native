import { View, Text } from "react-native";
import React, { useContext } from "react";
import Home from "../../screens/Home";
import Post from "../../screens/Post";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../../context/authContext";
import HeaderMenu from "./HeaderMenu";
import Account from "../../screens/Account";
import About from "../../screens/About";

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);
  const authenticateduser = state?.user && state?.token;

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticateduser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Tech Dose",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
