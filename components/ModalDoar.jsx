import { View, Text, Modal, TouchableOpacity, Alert } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import * as Clipboard from "expo-clipboard";

export default function ModalDoar(props) {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  const textCopy = "caixinhadepromessasbr@gmail.com";

  const copiarTexto = async () => {
    await Clipboard.setStringAsync(textCopy);
    Alert.alert("Pix copiado para a área de transferência.");
  };

  return (
    <View style={{ width: "100vh", height: 200 }}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={props.modalDoar}
        onRequestClose={() => {
          props.setModalDoar(false);
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            props.setModalDoar(false);
            copiarTexto();
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
              Colaborador
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#a3a3a3",
                textAlign: "justify",
                userSelect: "all",
              }}
            >
              Quer se tornar um mantenedor desta obra? Pix:{" "}
              <Text>caixinhadepromessasbr@gmail.com</Text>
              {"\n\n"}
              <Text>
                Ao clicar na tela, o Pix será copiado para a área de
                transferência automaticamente.
              </Text>
              {"\n\n"}
              <Text>
                "Cada um dê conforme determinou em seu coração, não com pesar ou
                por obrigação, pois Deus ama quem dá com alegria." (2 Coríntios
                9:7)
              </Text>
              {"\n\n"}
              <Text>
                Após o envio do pix, mande o comprovante para este Whatsapp e seu nome ficará para sempre em nosso app como colaborador. Prazo de até um mês para registro.
              </Text>
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_900Black",
                fontSize: 30,
                color: "#a3a3a3",
              }}
            >
              Nomes
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#a3a3a3",
                textAlign: "center",
                userSelect: "all",
              }}
            >
              Heloiza Helena - Rosa Maria{"\n"}
              Mariana Alves - Oziel Silva{"\n"}
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
