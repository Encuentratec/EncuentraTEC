import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { ThemeProvider } from "react-native-rapi-ui";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/provider/AuthProvider";

export default function App() {
  const images = [
    require("./assets/images/login.png"),
    require("./assets/images/register.png"),
    require("./assets/images/forget.png"),
  ];
  return (
    <ThemeProvider images={images}>
      <NativeBaseProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
        <StatusBar />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
