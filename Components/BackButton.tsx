import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Imageassets } from '../assets/images/image'

type BackButtonProps = {
    onPress:any
}

const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <View style={{position:'absolute',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:30,width:'100%',top:15}}>
      <TouchableOpacity onPress={onPress} style={{height:32,width:32,borderRadius:100,borderColor:'#FFFFFF',backgroundColor: 'rgba(212, 212, 212, 0.1)',alignItems:'center',justifyContent:'center'}}>
           <Image style={{}} source={Imageassets.BackArrow}/>
      </TouchableOpacity>
      <TouchableOpacity style={{height:32,width:32,borderRadius:100,borderColor:'#FFFFFF',backgroundColor: 'rgba(212, 212, 212, 0.1)',alignItems:'center',justifyContent:'center'}}>
      <Image source={Imageassets.ShareIcon}/>
      </TouchableOpacity>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({})