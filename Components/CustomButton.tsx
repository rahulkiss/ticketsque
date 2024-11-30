import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
type CustomButtonProps = {
  buttontitle: string; 
  onPress: () => void;
};
const CustomButton: React.FC<CustomButtonProps> = ({ buttontitle, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{buttontitle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'#D0A2F7',
        paddingVertical:15,
        borderRadius:25,
        marginTop:10

    },
    text:{
       fontWeight:'bold',
       color:'black',
       fontSize:16
    }
})