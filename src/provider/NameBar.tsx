import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../../assets/css/style'
import { useNavigation } from '@react-navigation/native'
import BackButton from "../../assets/svg/BackButton.svg";

type NameBarprops ={
    name:string,
}
const NameBar = (props:NameBarprops) => {
    const navigator = useNavigation();

  return (
    <View style={styles.NavBar}>
        <TouchableOpacity onPress={()=>{navigator.goBack();}}>
            
        <BackButton width={25} height={25} />  
            </TouchableOpacity>
      <Text style={styles.Heading}>{props.name}</Text>
        
    </View>
  )
}

export default NameBar
