import React from "react";

import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";

import { styles } from "../styles/styles";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function Home() {

  const [user, setUser] = useState();
  const [senha, setSenha] = useState();
  const navigation = useNavigation();

  function verificarLogin() {
    console.log(user, senha);
    if (user == "JuliaB@gmail.com" && senha == "12345") {
      navigation.navigate("Sobre");
    } else {
      alert(" Login falhou, tente novamente ")
    }

  }

  return (
    < ImageBackground
      style={styles.container}
      source={require("../imagem/stitch-wallpaper-222.jpg")}
    >
      {/* Exibe o ícone de perfil */}
      <FontAwesome6
        name="user-circle"
        size={125}
        color="white"
        style={styles.icon}
        bottom="100"
      />

      {/* Campo de entrada para o nome de usuário */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        multline={true}
        value={user}
        onChangeText={(value) => setUser(value)}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="white"
        multline={true}
        value={senha}
        onChangeText={(value) => setSenha(value)}

      />

      {/* Botão de login com alerta */}
      <TouchableOpacity style={styles.btn} onPress={verificarLogin}>
        <Text style={styles.log}>Sing in</Text>
      </TouchableOpacity>


    </ImageBackground>
  );
}
