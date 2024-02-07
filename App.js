import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import cuteFont from "./assets/fonts/CuteFont-Regular.ttf";
import background from "./assets/images/background.jpg";


import * as Font from "expo-font";
import CircularProgress from "./src/components/CircularProgress/CircularProgress";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [fontsLoaded, setFontsLoaded] = useState(false);


  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        CuteFont: cuteFont,
      });
      setFontsLoaded(true);
    }

    if (!fontsLoaded) {
      loadFonts();
    }
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.tempoContainer}>
          <CircularProgress />
        
        
       {/*    <View style={styles.temporizador}>
            <Text style={styles.countDown}>20:00</Text>
          </View> */}
          <View style={styles.state}>
            <Text style={styles.stateText}>STUDING...</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#red",
    alignItems: "center",
    justifyContent: "center",
   
    

  },
  tempoContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    width: "90%",
    height: 200,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    gap: 20,

   
  },
  temporizador: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
 
    borderRadius: 100,

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    fontSize: 50,
    color: "#fff",
  },
  countDown: {
    fontSize: 60,
    color: "#fff",
    fontFamily: "CuteFont",
  },
  state: {
    flex:0,
    justifyContent: "center",
    alignItems: "center",
    
    borderRadius: 10,
    padding: 10,
  },
  stateText: {
    fontSize: 25,
    color: "#222",
  },
  image: {
    width: "100%",
    height: "100%",
    
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",

    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 150,
  },
  buttonMenu: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "red",
    padding: 10,

    Text: {
      color: "white",
    },
  },
});
