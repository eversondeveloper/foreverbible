import { View, Text, Modal, TouchableOpacity, Alert } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

import * as Clipboard from "expo-clipboard";

export default function ModalVersao(props) {
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
        visible={props.modalVersao}
        onRequestClose={() => {
          props.setModalVersao(false);
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            props.setModalVersao(false);
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
                textAlign: "center",
              }}
            >
              Versão da Bíblia
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 14,
                color: "#a3a3a3",
                textAlign: "left",
              }}
            >
              Utilizamos a versão da Bíblia Livre
              devido à sua disponibilidade gratuita, tornando-a acessível a
              todos os interessados. Estamos empolgados com o potencial de
              crescimento do projeto, e isso só será possível com a colaboração
              e apoio dos membros da comunidade. 
              {"\n\n"}Planejamos
              expandir nossa coleção para incluir diversas outras versões
              bíblicas, enriquecendo assim a experiência espiritual de nossos
              usuários. Se você sente o desejo de contribuir com este projeto e
              fazer parte dessa jornada, clique no botão "Seja
              Colaborador".
              {"\n\n"}Sua participação é fundamental para o sucesso e
              crescimento contínuo. Juntos,
              podemos levar a mensagem da Bíblia a um número ainda maior de
              pessoas e fazer uma diferença em suas vidas.
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
