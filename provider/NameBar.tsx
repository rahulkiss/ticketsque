import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../css/style'
import { icons } from '../assert/image/image'
import { useNavigation } from '@react-navigation/native'

type NameBarprops ={
    name:string,
}
const NameBar = (props:NameBarprops) => {
    const navigator = useNavigation();

  return (
    <View style={styles.NavBar}>
        <TouchableOpacity onPress={()=>{navigator.goBack();}}>
            <Image source={icons.BackArrow} style={{marginRight:10}} />
            </TouchableOpacity>
      <Text style={styles.Heading}>{props.name}</Text>
        
    </View>
  )
}

export default NameBar
