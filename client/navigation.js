import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./context/authContext";
import ScreenMenu from "./components/Menu/ScreenMenu";

const Rootnavigation = () => {
  return (
    <AuthProvider>
      <ScreenMenu />
    </AuthProvider>
  );
};

export default Rootnavigation;
