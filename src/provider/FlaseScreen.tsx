import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlaseLogo from '../../assets/svg/FlaseScreenLogo'
import FlaseScreenText from '../../assets/svg/FlaseScreenText'
import FlaseScreenLoader from '../../assets/svg/FlaseScreenLoader'

const FlaseScreen = () => {
  return (
    <View style={{backgroundColor:'black',height:'100%',width:'100%',justifyContent:'center',alignItems:'center',gap:20}}>
       <FlaseLogo/>
       <FlaseScreenText/>
       <FlaseScreenLoader/>
    </View>
  )
}

export default FlaseScreen

const styles = StyleSheet.create({})