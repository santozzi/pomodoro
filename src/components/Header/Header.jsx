import React from 'react';
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native';


const Header = ({time,currentTime}) => {
    const options = ["Pomodoro", "Short Break", "Long Break"];
    return (
        <View>
           { options.map((option,index) => (
                <TouchableOpacity key={index}>
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
            <Text>{`Time: ${time}`}</Text>
        </View>
        
    )
}

export const styles = StyleSheet.create({
	header: {
		flex: 1,
	},
});
export default Header