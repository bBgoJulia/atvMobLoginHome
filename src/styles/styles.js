import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: "center", // Alinha horizontalmente ao centro
    justifyContent: "center", // Alinha verticalmente ao centro
    gap: 20,
  },

  input: {
    backgroundColor: "white",
    height: 30,
    width: 120,
    borderRadius: 20,
    bottom: 60,
  },

  log: {
    color: "white",
    bottom: 49,
    fontSize: 15,
  },

  sobre: {
    color: "white",
    bottom: 80,
    fontSize: 20,
  }

});
