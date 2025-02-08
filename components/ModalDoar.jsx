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
    textAlign: "left",
  }}
>
  Agradecemos por fazer parte desta jornada de fé e inspiração. Se você deseja contribuir para que esta obra continue crescendo e alcançando mais pessoas, pode se tornar um mantenedor com uma doação via Pix.{"\n\n"}
  
  <Text style={{ fontWeight: "bold", fontSize: 16 }}>Chave Pix:</Text>
  {"\n"} 
  <Text style={{ fontWeight: "bold", fontSize: 16 }}>caixinhadepromessasbr@gmail.com</Text>
  {"\n\n"}

  <Text>
    Ao tocar nesta mensagem, a chave Pix será copiada automaticamente para a sua área de transferência, facilitando sua contribuição de forma rápida e prática.
  </Text>
  {"\n\n"}

  <Text>
    Cada doação é um gesto de amor e compromisso com a propagação da Palavra de Deus. Seu apoio nos ajuda a manter este projeto ativo, levando versículos inspiradores a mais pessoas todos os dias.
  </Text>
  {"\n\n"}

  <Text style={{ fontStyle: "italic", fontSize: 15, color: "#b26123" }}>
    "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria." (2 Coríntios 9:7)
  </Text>
  {"\n\n"}

  <Text>
    Que sua generosidade seja retribuída abundantemente e que a graça do Senhor esteja sempre presente em sua vida. Agradecemos por caminhar conosco nesta missão!
  </Text>
</Text>

            {/* <Text
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
            </Text>*/}
          </View> 
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
