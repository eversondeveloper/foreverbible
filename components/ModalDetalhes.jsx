import { Modal, ScrollView, View, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useState } from "react";

export default function ModalDetalhes(props) {
  const imLink = [
    require("../assets/imglivros/genesis.jpg"),
    require("../assets/imglivros/exodo.jpg"),
    require("../assets/imglivros/levitico.jpg"),
    require("../assets/imglivros/numeros.jpg"),
    require("../assets/imglivros/deuteronomio.jpg"),
    require("../assets/imglivros/josue.jpg"),
    require("../assets/imglivros/juizes.jpg"),
    require("../assets/imglivros/rute.jpg"),
    require('../assets/imglivros/1samuel.jpg'),
    require('../assets/imglivros/2samuel.jpg'),
    require('../assets/imglivros/1reis.jpg'),
    require('../assets/imglivros/2reis.jpg'),
    // require('../assets/imglivros/1cronicas.jpg'),
    // require('../assets/imglivros/2cronicas.jpg'),

    // require('../assets/imglivros/esdras.jpg'),
    // require('../assets/imglivros/neemias.jpg'),
    // require('../assets/imglivros/ester.jpg'),
    // require('../assets/imglivros/jo.jpg'),
    // require('../assets/imglivros/salmos.jpg'),
    // require('../assets/imglivros/proverbios.jpg'),
    // require('../assets/imglivros/eclesiastes.jpg'),
    // require('../assets/imglivros/cantares.jpg'),
    // require('../assets/imglivros/isaias.jpg'),
    // require('../assets/imglivros/jeremias.jpg'),
    // require('../assets/imglivros/lamentacoes.jpg'),
    // require('../assets/imglivros/ezequiel.jpg'),
    // require('../assets/imglivros/daniel.jpg'),
    // require('../assets/imglivros/oseias.jpg'),
    // require('../assets/imglivros/joel.jpg'),
    // require('../assets/imglivros/amos.jpg'),
    // require('../assets/imglivros/obadias.jpg'),
    // require('../assets/imglivros/jonas.jpg'),
    // require('../assets/imglivros/miqueias.jpg'),
    // require('../assets/imglivros/naum.jpg'),
    // require('../assets/imglivros/habacuque.jpg'),
    // require('../assets/imglivros/sofonias.jpg'),
    // require('../assets/imglivros/ageu.jpg'),
    // require('../assets/imglivros/zacarias.jpg'),
    // require('../assets/imglivros/malaquias.jpg'),
    // require('../assets/imglivros/mateus.jpg'),
    // require('../assets/imglivros/marcos.jpg'),
    // require('../assets/imglivros/lucas.jpg'),
    // require('../assets/imglivros/joao.jpg'),
    // require('../assets/imglivros/atos.jpg'),
    // require('../assets/imglivros/romanos.jpg'),
    // require('../assets/imglivros/corintios.jpg'),
    // require('../assets/imglivros/galatas.jpg'),
    // require('../assets/imglivros/efesios.jpg'),
    // require('../assets/imglivros/filipenses.jpg'),
    // require('../assets/imglivros/colossenses.jpg'),
    // require('../assets/imglivros/tesse.jpg'),
    // require('../assets/imglivros/timoteo.jpg'),
    // require('../assets/imglivros/tito.jpg'),
    // require('../assets/imglivros/filemon.jpg'),
    // require('../assets/imglivros/hebreus.jpg'),
    // require('../assets/imglivros/tiago.jpg'),
    // require('../assets/imglivros/pedro.jpg'),
    // require('../assets/imglivros/joao.jpg'),
    // require('../assets/imglivros/juda.jpg'),
    // require('../assets/imglivros/apocalipse.jpg')
  ];

  const [linkBib, setLinkBib] = useState();

  const bib = props.biblia[props.livro];
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
    <Modal
      animationType={"none"}
      transparent={false}
      visible={props.modalDetal}
      onRequestClose={() => {
        props.setModalDetal(false);
      }}
    >
      <ScrollView>
        <View style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}>
          {imLink[Number(props.livro)] != undefined ? (
            <View style={{ width: "100vw" }}>
              <Image
                source={imLink[Number(props.livro)]}
                style={{ width: "100%", height: 400, resizeMode: "contain" }}
              />
            </View>
          ) : (
            ""
          )}
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Nome
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.nome}
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Abreviação
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              textTransform: "capitalize",
            }}
          >
            {bib.abrev}
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Autor
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.autor}
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Período
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.periodo}
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Grupo
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.grupo}
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Posição
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.id}ª
          </Text>
          <Text></Text>

          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
            }}
          >
            Sinopse
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Poppins_400Regular" }}>
            {bib.sinopse}
          </Text>
          <Text></Text>
        </View>
      </ScrollView>
    </Modal>
  );
}
