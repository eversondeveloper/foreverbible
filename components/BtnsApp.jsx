import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function BtnsApp(props){
    return (
        <View style={{
            width: "100%",
            display: "flex",
            height: "10%",
            alignItems: "center",
            justifyContent: "center"

        }}>
            <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#1f1f1f"
                  }}
                >
                  <TouchableOpacity
                    style={styles.touchBtnControles}
                    onPress={() => {
                      props.setCapitulo((prev) => (prev > 0 ? prev - 1 : prev));
                      props.meuScroll(0);
                    }}
                  >
                    <Image
                      source={require("../assets/setaesquerda3.png")}
                      style={{ width: 20, resizeMode: "contain" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchBtnControles}
                    onPress={() => {
                      props.setCapitulo((prev) =>
                        prev < props.quantiCaps - 1 ? prev + 1 : prev
                      );
                      props.meuScroll(0);
                    }}
                  >
                    <Image
                      source={require("../assets/setadireita3.png")}
                      style={{
                        width: 20,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.touchBtnControles}
                    onPress={() => {
                      props.setModalCap(true);
                      props.drawer.current.closeDrawer();
                    }}
                  >
                    <Image
                      source={require("../assets/btncapitulos6.png")}
                      style={{
                        width: 20,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
        
                  <TouchableOpacity
                    style={styles.touchBtnControles}
                    onPress={() => {
                      props.setModalLiv(true);
                      props.setQuantMenuLiv(1);
                      props.drawer.current.closeDrawer();
                    }}
                  >
                    <Image
                      source={require("../assets/btnlivros6.png")}
                      style={{
                        width: 20,
                        resizeMode: "contain",
                      }}
                    />
                  </TouchableOpacity>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    touchBtnControles: {
      height: "100%",
      width: "25%",
      alignItems: "center",
      justifyContent: "center",
    //   backgroundColor: "#1f1f1f",
    },
  });