import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Pressable} from 'react-native';
const ButtonDesign = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#8F00FF',
  },

  container_SECONDARY: {
    borderColor: '#8F00FF',
    borderWidth: 2,
  },


  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },
  
  text_TERTIARY: {
    color: 'gray',
  },
});

export default ButtonDesign;
