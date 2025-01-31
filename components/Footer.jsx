import { View, Text, TouchableOpacity } from "react-native";

export default function Footer(props) {
  let data = new Date().getFullYear();
  return (
    <View
    style={{
      height: 80,
      alignItems: "center",
      justifyContent: "center",
    }}
    >
    <TouchableOpacity
      style={{
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7f9cfc",
        width: '90%',
        borderRadius: 10,
      }}

      onPress={()=>{
        props.setModalDoar(true)
      }}
    >
      
      <Text>Seja um colaborador.</Text>
      <Text>Esta obra depende de sua cooperação.</Text>
      {/* <Text>Versão da Bíblia Livre</Text>
    <Text>App desenvolvido por Everson Silva</Text>
    <Text>Forever Bible {data}</Text> */}
    </TouchableOpacity></View>
  );
}
