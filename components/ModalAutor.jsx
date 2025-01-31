import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function ModalAutor(props) {
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
    <View style={{ width: "100%", height: "100%" }}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={props.modalAutor}
        onRequestClose={() => {
          props.setModalAutor(false);
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            props.setModalAutor(false);
          }}
        >
          <View
            decelerationRate={"fast"}
            style={{
              backgroundColor: "#272727",
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
              width: "100%",
              height: "100%",
            }}
          >
            <View
              style={{
                backgroundColor: "#202020",
                height: 200,
                width: 200,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                position: "relative",
                marginBottom: 30,
              }}
            >
              <Image
                source={require("../assets/autor.png")}
                style={{ width: 180, resizeMode: "contain" }}
              />
            </View>
            <Text
              style={{
                fontFamily: "Poppins_900Black",
                fontSize: 30,
                color: "#a3a3a3",
              }}
            >
              Everson Silva
            </Text>
              
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#a3a3a3",
                textAlign: "justify",
              }}
            >
              Sou cristão evangélico, teólogo e estudante de Engenharia de Software, com 
              paixão por unir tecnologia e fé. Possuo habilidades em programação, 
              desenvolvimento de software e design gráfico, além de experiência como 
              professor de informática. Meu portfólio reflete minha dedicação ao aprendizado 
              contínuo e meu compromisso em usar a tecnologia para fazer a diferença no mundo.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
