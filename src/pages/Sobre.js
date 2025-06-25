import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/styles";

export default function Sobre() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../imagem/stitch-wallpaper-222.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.sobre}>Bem vindo a página Sobre!</Text>
      </View>
    </ImageBackground>
  );
}
