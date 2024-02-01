import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import fondoMadera from './assets/images/fondoMadera.jpg';
import { Header } from './src/components/Header';
import background from './assets/images/background.jpg';
import { CuteFont_400Regular } from '@expo-google-fonts/cute-font';
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time,setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  console.log(currentTime);

  return (
    <View style={styles.container}>
    

      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <View style={styles.temporizador}>
          <Text style={styles.countDown}>20:00</Text>
        </View>


<Text>hola</Text>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative",
    
  },
  temporizador:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius:100,
    backgroundColor: "white",
    top: 140,
    left: 120,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text:{
    fontSize: 50,
    color: "#fff",
  },
  countDown:{
    fontSize: 50,
    color: "#fff",
    fontFamily: "CuteFont_400Regular", 
  },

  image:{
    width:"100%",
    height:"100%",
  },
  buttonContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",

    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 150,
  },
  buttonMenu:{
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "red",
    padding: 10,
    
    Text:{
      color: "white",
    }
  }
});
