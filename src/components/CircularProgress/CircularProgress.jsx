import React, {  useEffect } from 'react';
import { Text, View,TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import Animated,{useDerivedValue, interpolateColor, useSharedValue, withTiming, useAnimatedProps} from 'react-native-reanimated';
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);
    const AnimatedText = Animated.createAnimatedComponent(TextInput);
    const radius = 45;
    const circumference = radius * 2 * Math.PI;
    //milisegundos
    const duration = 5*1000;

const CircularProgress = ({time="20:00", color="#3f0f0c"}) => {

    const strokeOffset = useSharedValue(circumference);

    const percentage = useDerivedValue(() => {
      const number = ((circumference - strokeOffset.value) / circumference ) * 100;
      return withTiming(number, { duration: duration });
    });
  

  
    const animatedCircleProps = useAnimatedProps(() => {

      return {
        strokeDashoffset: withTiming(strokeOffset.value, { duration: duration }),
        //color de la barra circular
        stroke: color,
      };
    });
  
    const animatedTextProps = useAnimatedProps(() => {
        console.log(percentage.value);
      return {
        value: `${percentage.value.toString()}%`,
      }
    });
  
    useEffect(() => {
        strokeOffset.value = 0;
    }, []);
  
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <AnimatedText
          style={{
            color:"#37306B",
            fontSize: 24,
            fontWeight: 'bold',
            position: 'absolute',
          }}
           
            animatedProps={animatedTextProps}
        />
        <Svg height="150" width="150" viewBox="0 0 100 100" >
          <Circle 
            cx="50"
            cy="50"
            r="45"
            stroke="#E7E7E7"
            strokeWidth="10"
            fill="transparent"
          />
          <AnimatedCircle
            animatedProps={animatedCircleProps}
            cx="50"
            cy="50"
            r="45"
            strokeDasharray={`${radius * Math.PI * 2}`}
            strokeWidth="10"
            fill="transparent"
          />
          <Text>5</Text>
        </Svg>
        
      </View>
    );
}

export const styles = StyleSheet.create({
	circularprogress: {
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
	},
    text:{
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',

    }
});
export default CircularProgress