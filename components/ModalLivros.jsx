import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useState } from "react";

export default function ModalLivros(props) {
  const [periodo, setPeriodo] = useState("");
  const [grupo, setGrupo] = useState("");
  const [btnVisivel, setBtnVisivel] = useState(true);

  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  const padraoBotao = (b, estiloBorda) => (
    <TouchableOpacity
      style={[styles.styBtnGeral, { borderColor: estiloBorda }]}
      onPress={() => {
        props.setCapitulo(0);
        props.setLivro(b);
        props.setModalLiv(false);
        props.meuScroll(0);
        props.setModalCap(props.biblia[b].capitulos.length > 1);
        props.setQuantMenuLiv(2);
      }}
      onLongPress={() => {
        props.setCapitulo(0);
        props.setLivro(b);
        props.biblia[b].sinopse && props.setModalDetal(true);
      }}
      key={b}
    >
      <Text style={[styles.styText, { color: props.corTouch(b + 1) }]}> 
        {props.biblia[b].abrev}
      </Text>
      {props.biblia[b].sinopse && (
        <View style={styles.stySinopseContainer}>
          <Text style={styles.stySinopseText}>{props.biblia[b].id}º</Text>
          <Image source={require("../assets/sinopse.png")} style={styles.stySinopseImage} />
        </View>
      )}
    </TouchableOpacity>
  );

  const fecharBtns = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingInferior = 20;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingInferior;
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalLiv}
      onRequestClose={() => {
        props.setModalLiv(false);
        props.setQuantMenuLiv(0);
      }}
    >
      <View style={styles.modalContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false} 
          onMomentumScrollEnd={({ nativeEvent }) => {
            setBtnVisivel(!fecharBtns(nativeEvent));
          }}
        >
          <View style={styles.gridContainer}>
            {props.biblia.map((a, b) => padraoBotao(b, props.corTouch(b + 1)))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#141416",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    padding: 20,
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 50,
    justifyContent: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  styBtnGeral: {
    width: "30%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.6%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "#141416",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  styText: {
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
  },
  stySinopseContainer: {
    width: "80%",
    height: "25%",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stySinopseText: {
    color: "#525252",
    fontFamily: "Poppins_400Regular",
  },
  stySinopseImage: {
    resizeMode: "contain",
    width: 12,
  },
});
