import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Imageassets } from '../assets/images/image'





const SingleEventDetail = () => {
  return (
    <View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Image style={{height:360,width:360,borderRadius:12}} source={Imageassets.PartyImage}/>
          </View>

     
    </View>
  )
}

export default SingleEventDetail

const styles = StyleSheet.create({})