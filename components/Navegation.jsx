import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useEffect, useState } from "react";

export default function Navegation(props) {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  const funcVers = () => {
    return Math.floor(Math.random() * props.versQuant);
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#141416",
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 250
        }}
      >
        {/* <Image
          source={require("../assets/log1.1.png")}
          style={{
            width: '70%',
            height: '35%',
            resizeMode: "contain",
            
          }}
        /> */}
        <Image
          source={require("../assets/log2.png")}
          style={{
            width: 200,
            marginTop: 20,
            resizeMode: "contain",
            height: 30,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.touchBtnPrincipal}
        onPress={() => {
          props.setModalDoar(true);
        }}
      >
        <Text style={{ color: "#ADADB1" }}>Seja Colaborador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchBtnPrincipal}
        onPress={() => {
          props.setModalQuemSomos(true);
        }}
      >
        <Text style={{ color: "#ADADB1" }}>Quem somos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchBtnPrincipal}
        onPress={() => {
          props.setModalAutor(true);
        }}
      >
        <Text style={{ color: "#ADADB1" }}>Autor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchBtnPrincipal}
        onPress={() => {
          props.setModalVersao(true);
        }}
      >
        <Text style={{ color: "#ADADB1" }}>Versão da Bíblia</Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          position: "absolute",
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5%",
        }}
      >
        <View
          style={{
            marginBottom: 20,
            width: "90%",
            height: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#f0f0f0",
              fontSize: 20,
              fontFamily: "Poppins_900Black",
            }}
          >
            {props.biblia[props.livro].nome} {props.capitulo + 1}
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setTamanhoFont((prev) => (prev < 30 ? prev + 1 : prev));
            }}
          >
            <Image
              source={require("../assets/fontmais.png")}
              style={{ width: 20, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setTamanhoFont((prev) => (prev > 20 ? prev - 1 : prev));
            }}
          >
            <Image
              source={require("../assets/fontmenos.png")}
              style={{
                width: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setTema(props.tema == false ? true : false);
            }}
          >
            <Image
              source={require("../assets/temas.png")}
              style={{ width: 20, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              // props.drawer.current.closeDrawer();
              props.setModalCaixinha(true);
              props.setVersCaixinha(funcVers());
              props.setCorCartaoVers(Math.floor(Math.random() * 8));
            }}
          >
            <Image
              source={require("../assets/card1.png")}
              style={{
                width: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setCapitulo((prev) => (prev > 0 ? prev - 1 : prev));
              props.meuScroll(0);
            }}
          >
            <Image
              source={require("../assets/setaesquerda3.png")}
              style={{ width: 20, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setCapitulo((prev) =>
                prev < props.quantiCaps - 1 ? prev + 1 : prev
              );
              props.meuScroll(0);
            }}
          >
            <Image
              source={require("../assets/setadireita3.png")}
              style={{
                width: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setModalCap(true);
              props.drawer.current.closeDrawer();
            }}
          >
            <Image
              source={require("../assets/btncapitulos6.png")}
              style={{
                width: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchBtnControles}
            onPress={() => {
              props.setModalLiv(true);
              props.setQuantMenuLiv(1);
              props.drawer.current.closeDrawer();
            }}
          >
            <Image
              source={require("../assets/btnlivros6.png")}
              style={{
                width: 20,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  touchBtnPrincipal: {
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    alignItems: "center",
    height: 60,
    marginBottom: 5,
    borderRadius: 10
  },
  touchBtnControles: {
    height: 70,
    width: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    margin: 2,
  },
});
