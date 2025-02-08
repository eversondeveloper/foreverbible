import { View, Text, Modal, TouchableOpacity } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function ModalQuemSomos(props) {
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
    <View style={{ width: "100vh", height: 200 }}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={props.modalQuemSomos}
        onRequestClose={() => {
          props.setModalQuemSomos(false);
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            props.setModalQuemSomos(false);
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
            <Text
              style={{
                fontFamily: "Poppins_900Black",
                fontSize: 30,
                color: "#a3a3a3",
              }}
            >
              Quem Somos
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#a3a3a3",
                textAlign: "left",
              }}
            >
              Eu, Everson Silva, sou mais do que um simples programador cristão;
              sou um crente praticante que abraça fervorosamente a premissa do "Ide"
              de Jesus. Para mim, pregar o evangelho é muito mais do que uma
              tarefa; é um ato de programação completo, envolvendo corpo, alma e
              espírito, para acolher a salvação que é oferecida. Convido você a
              fazer o upload dessas palavras para o seu coração e permitir que a
              mensagem do evangelho transforme sua vida. Que a paz do Senhor
              Jesus esteja com você!
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
