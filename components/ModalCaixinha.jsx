import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import * as Clipboard from "expo-clipboard";
import { useEffect, useState } from "react";

export default function ModalCaixinha(props) {
  const [texto1, setTexto1] = useState("");
  const refTexto = props.caixinhaVers[props.versCaixinha].referencia;
  let reg1 = /^(.+) (\d+):(\d+)(?:-(\d+))?$/;

  useEffect(() => {
    props.setLivroCaix(refTexto.replace(reg1, "$1"));
    props.setNumCaix1(Number(refTexto.replace(reg1, "$2")));
    props.setNumCaix2(Number(refTexto.replace(reg1, "$3")));
    props.setNumCaix3(Number(refTexto.replace(reg1, "$4")));

    funcText();
  }, [props.livroCaix]);

  const funcText = () => {
    let c1 = props.biblia.find((liv) => liv.nome === props.livroCaix);

    if (c1) {
      setTexto1(props.caixinhaVers[props.versCaixinha].vers);
    }
  };

  let funcBusca = () => {
    if (props.livroCaix !== "") {
      let c1 = props.biblia.find((liv) => liv.nome === props.livroCaix);

      if (c1) {
        props.setLivro(Number(c1.id) - 1);
        props.setCapitulo(Number(props.numCaix1) - 1);
        props.setModalCaixinha(false);
        props.drawer.current.closeDrawer();
        props.meuScroll(0);
        setTimeout(() => {
          props.meuScroll(Number(props.numCaix2) - 1);
        }, 500);
      } else {
        Alert.alert("Livro não encontrado na lista de livros da Bíblia.");
      }
    }
  };

  const corCard = [
    "#ffffff",
    "#2ecc71",
    "#58bcff",
    "#f1c40f",
    "#ff9b58",
    "#ff5555",
    "#fa74be",
    "#16a085",
  ];

  const textCopy = `${refTexto}\n"${texto1}"\n\nAPP EVERBIBLE GOOGLE PLAY`;

  const copiarTexto = async () => {
    return await Clipboard.setStringAsync(textCopy);
  };

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
        width: "100vw",
        height: 200,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={props.modalCaixinha}
        onRequestClose={() => {
          props.setModalCaixinha(false);
        }}
      >
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            props.setModalCaixinha(false);
            copiarTexto();
          }}
          onLongPress={() => {
            funcBusca();
            copiarTexto();

          }}
        >
          <View
            decelerationRate={"fast"}
            style={{
              backgroundColor: corCard[props.corCartaoVers],
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
              elevation: 15,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 9,
                  color: "#181818",
                  textAlign: "center",
                }}
              >
                Atenção! Este é um recurso criado para incentivar a leitura da
                Palavra. Não dever ser utilizado de forma mística para guiar
                seus passos.
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_900Black",
                fontSize: 20,
                color: "#181818",
              }}
            >
              {refTexto}
              {"\n"}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 16,
                color: "#181818",
                textAlign: "center",
              }}
            >
              {texto1}
            </Text>
            <Image
              source={require("../assets/l1.1.png")}
              style={{
                width: "50%",
                resizeMode: "contain",
                position: "absolute",
                bottom: 0,
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
