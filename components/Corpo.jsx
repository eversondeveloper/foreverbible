import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import ModalLivros from "./ModalLivros";
import ModalCaps from "./ModalCaps";
import ModalVersao from "./ModalVersao";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import ModalDetalhes from "./ModalDetalhes";
import ModalAutor from "./ModalAutor";
import ModalQuemSomos from "./ModalQuemSomos";
import ModalDoar from "./ModalDoar";
import ModalCaixinha from "./ModalCaixinha";
import Topo from "./Topo";
import Footer from "./Footer";

export default function Corpo(props) {
  const text = props.biblia[props.livro].capitulos[props.capitulo];

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_900Black,
    Poppins_100Thin,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={{ width: "100%", paddingTop: 25 }}>
      <FlatList
        ref={props.scrollRef}
        style={{ width: "100%" }}
        data={text}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index.toString()} style={{ marginBottom: 10 }}>
            {index == 0 ? (
              <Topo
                biblia={props.biblia}
                livro={props.livro}
                setLivro={props.setLivro}
                capitulo={props.capitulo}
                setCapitulo={props.setCapitulo}
                quantiCaps={props.quantiCaps}
                modalLiv={props.modalLiv}
                setModalLiv={props.setModalLiv}
                modalCap={props.modalCap}
                setModalCap={props.setModalCap}
                ativo={props.ativo}
                setAtivo={props.setAtivo}
                mudancaSwitch={props.mudancaSwitch}
                corFonteVers={props.corFonteVers}
                setCorFontVers={props.setCorFontVers}
                corBackGroundGeral={props.corBackGroundGeral}
                setCorBackGroundGeral={props.setCorBackGroundGeral}
                corBackBtnGeral={props.corBackBtnGeral}
                setBackBtnGeral={props.setBackBtnGeral}
                corIconBtn={props.corIconBtn}
                setCorIconBtn={props.setCorIconBtn}
                corBtn1={props.corBtn1}
                setCorBtn1={props.setCorBtn1}
                corBtn2={props.corBtn2}
                setCorBtn2={props.setCorBtn2}
                corBtnsGrad1={props.corBtnsGrad1}
                setCorBtnsGrad1={props.setCorBtnsGrad1}
                corBtnsGrad2={props.corBtnsGrad2}
                setCorBtnsGrad2={props.setCorBtnsGrad2}
                corBackTopo={props.corBackTopo}
                setCorFontTopo={props.setCorFontTopo}
                corFontTopo={props.corFontTopo}
              />
            ) : (
              ""
            )}
            <Text
              style={{
                fontSize: props.tamanhoFont,
                paddingHorizontal: 25,
                paddingBottom: 5,
                width: "100%",
                color: props.corFonteVers,
              }}
            >
              <Text style={{ fontFamily: "Poppins_700Bold" }}>
                {index + 1}{" "}
              </Text>
              <Text style={{ fontFamily: "Poppins_400Regular" }}>{item}</Text>
            </Text>
            {index == text.length - 1 ? (
              <Footer setModalDoar={props.setModalDoar} modalDoar={props.modalDoar} />
            ) : (
              ""
            )}
          </View>
        )}
      />

      {props.localMenu === "left" && (
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            position: "absolute",
            right: 0,
            bottom: 100,
            backgroundColor: "#cecece",
            borderRadius: 50,
            padding: 5,
          }}
          onPress={() => {
            props.setLocalMenu("right");
            setTimeout(() => {
              props.drawer.current.openDrawer();
            }, 100);
          }}
        >
          <Image
            source={require("../assets/menud.png")}
            style={{ width: 10, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      )}

      {/* {props.localMenu === "right" && (
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
            position: "absolute",
            left: 0,
            bottom: 100,
            backgroundColor: "#cecece",
            borderRadius: 50,
            padding: 5,
          }}
          onPress={() => {
            props.setLocalMenu("left");
            setTimeout(() => {
              props.drawer.current.openDrawer();
            }, 100);
          }}
        >
          <Image
            source={require("../assets/menue.png")}
            style={{ width: 10, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      )} */}

      {props.modalLiv == true ? (
        <ModalLivros
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          quantMenuLiv={props.quantMenuLiv}
          setQuantMenuLiv={props.setQuantMenuLiv}
          corTouch={props.corTouch}
          drawer={props.drawer}
        />
      ) : (
        ""
      )}
      {props.modalCap == true ? (
        <ModalCaps
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          quantMenuLiv={props.quantMenuLiv}
          setQuantMenuLiv={props.setQuantMenuLiv}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
        />
      ) : (
        ""
      )}
      {props.modalDetal == true ? (
        <ModalDetalhes
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
        />
      ) : (
        ""
      )}

      {props.modalAutor == true ? (
        <ModalAutor
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
          modalAutor={props.modalAutor}
          setModalAutor={props.setModalAutor}
        />
      ) : (
        ""
      )}
      {props.modalQuemSomos == true ? (
        <ModalQuemSomos
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
          modalAutor={props.modalAutor}
          setModalAutor={props.setModalAutor}
          modalQuemSomos={props.modalQuemSomos}
          setModalQuemSomos={props.setModalQuemSomos}
        />
      ) : (
        ""
      )}
      {props.modalDoar == true ? (
        <ModalDoar
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
          modalAutor={props.modalAutor}
          setModalAutor={props.setModalAutor}
          modalQuemSomos={props.modalQuemSomos}
          setModalQuemSomos={props.setModalQuemSomos}
          modalDoar={props.modalDoar}
          setModalDoar={props.setModalDoar}
        />
      ) : (
        ""
      )}
      {props.modalCaixinha == true ? (
        <ModalCaixinha
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
          modalAutor={props.modalAutor}
          setModalAutor={props.setModalAutor}
          modalQuemSomos={props.modalQuemSomos}
          setModalQuemSomos={props.setModalQuemSomos}
          modalDoar={props.modalDoar}
          setModalDoar={props.setModalDoar}
          modalCaixinha={props.modalCaixinha}
          setModalCaixinha={props.setModalCaixinha}
          caixinhaVers={props.caixinhaVers}
          versCaixinha={props.versCaixinha}
          setVersCaixinha={props.setVersCaixinha}
          corCartaoVers={props.corCartaoVers}
          setCorCartaoVers={props.setCorCartaoVers}
          livroCaix={props.livroCaix}
          setLivroCaix={props.setLivroCaix}
          numCaix1={props.numCaix1}
          setNumCaix1={props.setNumCaix1}
          numCaix2={props.numCaix2}
          setNumCaix2={props.setNumCaix2}
          numCaix3={props.numCaix3}
          setNumCaix3={props.setNumCaix3}
          drawer={props.drawer}
          funcText={props.funcText}
          texto2={props.texto2}
        />
      ) : (
        ""
      )}
      {props.modalVersao == true ? (
        <ModalVersao
          biblia={props.biblia}
          livro={props.livro}
          setLivro={props.setLivro}
          capitulo={props.capitulo}
          setCapitulo={props.setCapitulo}
          quantiCaps={props.quantiCaps}
          modalLiv={props.modalLiv}
          setModalLiv={props.setModalLiv}
          modalCap={props.modalCap}
          setModalCap={props.setModalCap}
          meuScroll={props.meuScroll}
          corFonteVers={props.corFonteVers}
          setCorFontVers={props.setCorFontVers}
          corBackGroundGeral={props.corBackGroundGeral}
          setCorBackGroundGeral={props.setCorBackGroundGeral}
          corBackBtnGeral={props.corBackBtnGeral}
          setBackBtnGeral={props.setBackBtnGeral}
          corIconBtn={props.corIconBtn}
          setCorIconBtn={props.setCorIconBtn}
          corBtn1={props.corBtn1}
          setCorBtn1={props.setCorBtn1}
          corBtn2={props.corBtn2}
          setCorBtn2={props.setCorBtn2}
          corBtnsGrad1={props.corBtnsGrad1}
          setCorBtnsGrad1={props.setCorBtnsGrad1}
          corBtnsGrad2={props.corBtnsGrad2}
          setCorBtnsGrad2={props.setCorBtnsGrad2}
          modalDetal={props.modalDetal}
          setModalDetal={props.setModalDetal}
          corTouch={props.corTouch}
          corTouch2={props.corTouch2}
          modalAutor={props.modalAutor}
          setModalAutor={props.setModalAutor}
          modalQuemSomos={props.modalQuemSomos}
          setModalQuemSomos={props.setModalQuemSomos}
          modalDoar={props.modalDoar}
          setModalDoar={props.setModalDoar}
          modalCaixinha={props.modalCaixinha}
          setModalCaixinha={props.setModalCaixinha}
          caixinhaVers={props.caixinhaVers}
          versCaixinha={props.versCaixinha}
          setVersCaixinha={props.setVersCaixinha}
          corCartaoVers={props.corCartaoVers}
          setCorCartaoVers={props.setCorCartaoVers}
          livroCaix={props.livroCaix}
          setLivroCaix={props.setLivroCaix}
          numCaix1={props.numCaix1}
          setNumCaix1={props.setNumCaix1}
          numCaix2={props.numCaix2}
          setNumCaix2={props.setNumCaix2}
          modalVersao={props.modalVersao}
          setModalVersao={props.setModalVersao}
          drawer={props.drawer}
        />
      ) : (
        ""
      )}
    </View>
  );
}
