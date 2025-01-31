import { View, TouchableOpacity, Image, Text } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function BtnsBottom(props) {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View
      style={{
        position: "absolute",
        marginTop: "6%",
        height: "94%",
        width: "9%",
        right: 0,
        backgroundColor: props.corBtn1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "28%",
          position: "absolute",
          top: 0,
          backgroundColor: props.corBtn1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/l1.png")}
          style={{
            width: 15,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          position: "absolute",
          right: 0,
          bottom: 475,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setTema(props.tema == false ? true : false);
          }}
        >
          <Image
            source={require("../assets/temas.png")}
            style={{ width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          position: "absolute",
          right: 0,
          bottom: 350,
          justifyContent: "space-around",
        }}
      >
      
        <TouchableOpacity
          style={{
            width: "100%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
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
          style={{
            width: "100%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setTamanhoFont((prev) => (prev > 20 ? prev - 1 : prev));
            props.meuScroll();
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
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          position: "absolute",
          right: 0,
          bottom: 200,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setCapitulo((prev) => (prev > 0 ? prev - 1 : prev));
            props.meuScroll();
          }}
        >
          <Image
            source={require("../assets/setaesquerda3.png")}
            style={{ width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setCapitulo((prev) =>
              prev < props.quantiCaps - 1 ? prev + 1 : prev
            );
            props.meuScroll();
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
      </View>
      <View
        style={{
          height: 150,
          width: "100%",
          position: "absolute",
          right: 0,
          bottom: 50,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setModalCap(true);
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
          style={{
            height: "100%",
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            props.setModalLiv(true);
            props.setQuantMenuLiv(1);
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

        {/* <View style={styles.btn3}>
      <Switch
        trackColor={{false: '#000F1E', true: '#000F1E'}}
        thumbColor={props.ativo ? '#2F7581' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.mudancaSwitch}
        value={props.ativo}
      />
      </View> */}
      </View>
      
    </View>
  );
}
