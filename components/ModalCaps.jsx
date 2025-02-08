import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function ModalCaps(props) {
  const [fontLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  if (!fontLoaded) {
    return null;
  }

  let btnsCaps = () => {
    return (
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          padding: 20,
        }}
      >
        {props.biblia[props.livro].capitulos.map((a, b) => {
          return (
            <TouchableOpacity
              style={{
                width: "30%",
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "1.6%",
                borderColor: "#2a2a2a",
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: "#1f1f1f",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 10,
              }}
              onPress={() => {
                props.setCapitulo(b);
                props.meuScroll(0);
                props.setModalCap(false);
                props.setQuantMenuLiv(0);
              }}
              key={b}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: 25,
                  color: "#7f7f8b",
                  fontFamily: "Poppins_700Bold",
                }}
                key={b + 400}
              >
                {b + 1}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={props.modalCap}
        onRequestClose={() => {
          props.setModalCap(false);
          props.setModalLiv(props.quantMenuLiv == 2 ? true : false);
          props.setQuantMenuLiv(0);
        }}
      >
        <ScrollView
          decelerationRate={"fast"}
          style={{
            backgroundColor: "#141416",
            width: "100vw",
          }}
        >
          {btnsCaps()}
        </ScrollView>
      </Modal>
    </View>
  );
}
