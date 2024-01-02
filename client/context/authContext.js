import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// context
const AuthContext = createContext();

// provider

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    token: "",
  });

  // axios settings

  axios.defaults.baseURL = "http://192.168.29.53:8080/api/v1";

  // initial local storage

  useEffect(() => {
    const loadlocalstoragedata = async () => {
      let data = await AsyncStorage.getItem("@auth");
      let logindata = JSON.parse(data);
      setState({ ...state, user: data?.user, token: data?.token });
    };
    loadlocalstoragedata();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
