import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, DrawerLayoutAndroid, StyleSheet } from "react-native";
import biblia from "./dados/biblialivre.json";
import Corpo from "./components/Corpo";
import Navegation from "./components/Navegation";
import caixinhaVers from "./dados/versics.json";
import * as SplashScreen from 'expo-splash-screen';
import BtnsApp from "./components/BtnsApp";

export default function App() {
  const [livro, setLivro] = useState(0);
  const [capitulo, setCapitulo] = useState(0);
  const quantiCaps = biblia[livro].capitulos.length;
  const [modalLiv, setModalLiv] = useState(false);
  const [modalCap, setModalCap] = useState(false);
  const [modalDetal, setModalDetal] = useState(false);
  const [modalAutor, setModalAutor] = useState(false);
  const [modalQuemSomos, setModalQuemSomos] = useState(false);
  const [modalDoar, setModalDoar] = useState(false);
  const [modalCaixinha, setModalCaixinha] = useState(false);
  const [modalVersao, setModalVersao] = useState(false);
  const [versCaixinha, setVersCaixinha] = useState(0);

  const [ativo, setAtivo] = useState(false);
  const mudancaSwitch = () => setAtivo((previousState) => !previousState);

  const [corFonteVers, setCorFontVers] = useState("#1b1d1f");
  const [corBackGroundGeral, setCorBackGroundGeral] = useState("#191E24");
  const [corBackBtnGeral, setBackBtnGeral] = useState("#e4e4e4");
  const [corIconBtn, setCorIconBtn] = useState("#fff");
  const [corBtn1, setCorBtn1] = useState("#00a4b9");
  const [corBtn2, setCorBtn2] = useState("#e60505");
  const [corBtnsGrad1, setCorBtnsGrad1] = useState("#6192AB");
  const [corBtnsGrad2, setCorBtnsGrad2] = useState("#A12B2B");
  const [corBackTopo, setCorBackTopo] = useState("#f6f7fb");
  const [corFontTopo, setCorFontTopo] = useState("#d0ff00");
  const [tamanhoFont, setTamanhoFont] = useState(20);
  const [quantMenuLiv, setQuantMenuLiv] = useState(0);
  const [localMenu, setLocalMenu] = useState("right");
  const [tema, setTema] = useState(false);
  const [corCartaoVers, setCorCartaoVers] = useState(0);
  const versQuant = caixinhaVers.length;

  const [livroCaix, setLivroCaix] = useState("");
  const [numCaix1, setNumCaix1] = useState("");
  const [numCaix2, setNumCaix2] = useState("");
  const [numCaix3, setNumCaix3] = useState("");

  const drawer = useRef(null);

  const corTouch = (indice) => {
    if (indice <= 39) {
      return corBtnsGrad1;
    } else {
      return corBtnsGrad2;
    }
  };

  const corTouch2 = (indice) => {
    if (biblia[livro].periodo === "Antigo Testamento - AT") {
      return corBtnsGrad1;
    } else {
      return corBtnsGrad2;
    }
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // Impede que a splash feche imediatamente
      setTimeout(async () => {
        await SplashScreen.hideAsync(); // Esconde a splash após 2 segundos
      }, 2000);
    }
    prepare();
  }, []);

  useEffect(() => {
    if (tema) {
      setCorBackGroundGeral("#1E1E1E");
      setCorFontVers("#c3c3c3");
      setCorBackTopo("#1b1d1f");
      setCorFontTopo("#c3c3c3");
      setCorBtn1("#8a8a8a");
    } else {
      setCorBackGroundGeral("#EDEDED");
      setCorFontVers("#3A3A3A");
      setCorBackTopo("#EDEDED");
      setCorFontTopo("#3A3A3A");
      setCorBtn1("#00a4b9");
    }
  }, [tema]);

  const scrollRef = useRef(null);
  const meuScroll = (indice) => {
    if (scrollRef.current) {
      scrollRef.current.scrollToIndex({
        index: indice,
        animated: true,
      });
    }
  };

  const navigationView = () => (
    <Navegation
      drawer={drawer}
      modalAutor={modalAutor}
      setModalAutor={setModalAutor}
      modalQuemSomos={modalQuemSomos}
      setModalQuemSomos={setModalQuemSomos}
      modalDoar={modalDoar}
      setModalDoar={setModalDoar}
      biblia={biblia}
      livro={livro}
      setLivro={setLivro}
      capitulo={capitulo}
      setCapitulo={setCapitulo}
      quantiCaps={quantiCaps}
      modalLiv={modalLiv}
      setModalLiv={setModalLiv}
      modalCap={modalCap}
      setModalCap={setModalCap}
      meuScroll={meuScroll}
      scrollRef={scrollRef}
      ativo={ativo}
      setAtivo={setAtivo}
      mudancaSwitch={mudancaSwitch}
      corFonteVers={corFonteVers}
      setCorFontVers={setCorFontVers}
      corBackGroundGeral={corBackGroundGeral}
      setCorBackGroundGeral={setCorBackGroundGeral}
      corBackBtnGeral={corBackBtnGeral}
      setBackBtnGeral={setBackBtnGeral}
      corIconBtn={corIconBtn}
      setCorIconBtn={setCorIconBtn}
      corBtn1={corBtn1}
      setCorBtn1={setCorBtn1}
      corBtn2={corBtn2}
      setCorBtn2={setCorBtn2}
      corBtnsGrad1={corBtnsGrad1}
      setCorBtnsGrad1={setCorBtnsGrad1}
      corBtnsGrad2={corBtnsGrad2}
      setCorBtnsGrad2={setCorBtnsGrad2}
      tamanhoFont={tamanhoFont}
      setTamanhoFont={setTamanhoFont}
      quantMenuLiv={quantMenuLiv}
      setQuantMenuLiv={setQuantMenuLiv}
      tema={tema}
      setTema={setTema}
      modalDetal={modalDetal}
      setModalDetal={setModalDetal}
      corTouch={corTouch}
      corTouch2={corTouch2}
      localMenu={localMenu}
      setLocalMenu={setLocalMenu}
      versCaixinha={versCaixinha}
      setVersCaixinha={setVersCaixinha}
      setModalCaixinha={setModalCaixinha}
      modalCaixinha={modalCaixinha}
      versQuant={versQuant}
      corCartaoVers={corCartaoVers}
      setCorCartaoVers={setCorCartaoVers}
      modalVersao={modalVersao}
      setModalVersao={setModalVersao}
    />
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={localMenu}
      renderNavigationView={navigationView}
      drawerBackgroundColor="#f0f0f0"
    >
      <SafeAreaView style={[styles.safeArea, { backgroundColor: corBackGroundGeral }]}>
        <Corpo
          biblia={biblia}
          livro={livro}
          setLivro={setLivro}
          capitulo={capitulo}
          setCapitulo={setCapitulo}
          quantiCaps={quantiCaps}
          modalLiv={modalLiv}
          setModalLiv={setModalLiv}
          modalCap={modalCap}
          setModalCap={setModalCap}
          scrollRef={scrollRef}
          meuScroll={meuScroll}
          ativo={ativo}
          setAtivo={setAtivo}
          mudancaSwitch={mudancaSwitch}
          corFonteVers={corFonteVers}
          setCorFontVers={setCorFontVers}
          corBackGroundGeral={corBackGroundGeral}
          setCorBackGroundGeral={setCorBackGroundGeral}
          corBackBtnGeral={corBackBtnGeral}
          setBackBtnGeral={setBackBtnGeral}
          corIconBtn={corIconBtn}
          setCorIconBtn={setCorIconBtn}
          corBtn1={corBtn1}
          setCorBtn1={setCorBtn1}
          corBtn2={corBtn2}
          setCorBtn2={setCorBtn2}
          corBtnsGrad1={corBtnsGrad1}
          setCorBtnsGrad1={setCorBtnsGrad1}
          corBtnsGrad2={corBtnsGrad2}
          setCorBtnsGrad2={setCorBtnsGrad2}
          modalDetal={modalDetal}
          setModalDetal={setModalDetal}
          tamanhoFont={tamanhoFont}
          setTamanhoFont={setTamanhoFont}
          quantMenuLiv={quantMenuLiv}
          setQuantMenuLiv={setQuantMenuLiv}
          corTouch={corTouch}
          corTouch2={corTouch2}
          drawer={drawer}
          modalAutor={modalAutor}
          setModalAutor={setModalAutor}
          modalQuemSomos={modalQuemSomos}
          setModalQuemSomos={setModalQuemSomos}
          modalDoar={modalDoar}
          setModalDoar={setModalDoar}
          localMenu={localMenu}
          setLocalMenu={setLocalMenu}
          tema={tema}
          setTema={setTema}
          modalCaixinha={modalCaixinha}
          setModalCaixinha={setModalCaixinha}
          caixinhaVers={caixinhaVers}
          versCaixinha={versCaixinha}
          setVersCaixinha={setVersCaixinha}
          corCartaoVers={corCartaoVers}
          setCorCartaoVers={setCorCartaoVers}
          livroCaix={livroCaix}
          setLivroCaix={setLivroCaix}
          numCaix1={numCaix1}
          setNumCaix1={setNumCaix1}
          numCaix2={numCaix2}
          setNumCaix2={setNumCaix2}
          numCaix3={numCaix3}
          setNumCaix3={setNumCaix3}
          modalVersao={modalVersao}
          setModalVersao={setModalVersao}
          corFontTopo={corFontTopo}
        />

        <BtnsApp 
          biblia={biblia}
          livro={livro}
          setLivro={setLivro}
          capitulo={capitulo}
          setCapitulo={setCapitulo}
          quantiCaps={quantiCaps}
          modalLiv={modalLiv}
          setModalLiv={setModalLiv}
          modalCap={modalCap}
          setModalCap={setModalCap}
          scrollRef={scrollRef}
          meuScroll={meuScroll}
          ativo={ativo}
          setAtivo={setAtivo}
          mudancaSwitch={mudancaSwitch}
          corFonteVers={corFonteVers}
          setCorFontVers={setCorFontVers}
          corBackGroundGeral={corBackGroundGeral}
          setCorBackGroundGeral={setCorBackGroundGeral}
          corBackBtnGeral={corBackBtnGeral}
          setBackBtnGeral={setBackBtnGeral}
          corIconBtn={corIconBtn}
          setCorIconBtn={setCorIconBtn}
          corBtn1={corBtn1}
          setCorBtn1={setCorBtn1}
          corBtn2={corBtn2}
          setCorBtn2={setCorBtn2}
          corBtnsGrad1={corBtnsGrad1}
          setCorBtnsGrad1={setCorBtnsGrad1}
          corBtnsGrad2={corBtnsGrad2}
          setCorBtnsGrad2={setCorBtnsGrad2}
          modalDetal={modalDetal}
          setModalDetal={setModalDetal}
          tamanhoFont={tamanhoFont}
          setTamanhoFont={setTamanhoFont}
          quantMenuLiv={quantMenuLiv}
          setQuantMenuLiv={setQuantMenuLiv}
          corTouch={corTouch}
          corTouch2={corTouch2}
          drawer={drawer}
          modalAutor={modalAutor}
          setModalAutor={setModalAutor}
          modalQuemSomos={modalQuemSomos}
          setModalQuemSomos={setModalQuemSomos}
          modalDoar={modalDoar}
          setModalDoar={setModalDoar}
          localMenu={localMenu}
          setLocalMenu={setLocalMenu}
          tema={tema}
          setTema={setTema}
          modalCaixinha={modalCaixinha}
          setModalCaixinha={setModalCaixinha}
          caixinhaVers={caixinhaVers}
          versCaixinha={versCaixinha}
          setVersCaixinha={setVersCaixinha}
          corCartaoVers={corCartaoVers}
          setCorCartaoVers={setCorCartaoVers}
          livroCaix={livroCaix}
          setLivroCaix={setLivroCaix}
          numCaix1={numCaix1}
          setNumCaix1={setNumCaix1}
          numCaix2={numCaix2}
          setNumCaix2={setNumCaix2}
          numCaix3={numCaix3}
          setNumCaix3={setNumCaix3}
          modalVersao={modalVersao}
          setModalVersao={setModalVersao}
          corFontTopo={corFontTopo}
        />
        
        <StatusBar style={tema ? "light" : "dark"} />
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
