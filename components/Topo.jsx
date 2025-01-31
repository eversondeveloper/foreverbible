import { View, Text } from "react-native";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function Topo(props) {
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
        width: "100%"
      }}
    >
      <View
        style={{
          width: "88%",
          flex: 1,
          alignItems: "start",
          justifyContent: "center",
          position: "relative",
          
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: props.corFontTopo,
            fontFamily: "Poppins_900Black",
            height: 32,
            textTransform: "uppercase",
          }}
        >
          {props.biblia[props.livro].nome} {props.capitulo + 1}{" "}
        </Text>
      </View>
    </View>
  );
}
