import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DiscountCarousal = () => {
  return (
    <View style={styles.container}>
      <Text style={{height:25,paddingHorizontal:15,color:'#F5EDFD',fontWeight:700,fontSize:18}}>Discounts</Text>
      <View style={{height:143,flexDirection:'row',justifyContent:'center'}}>
        <View style={{height:121,borderRadius:12,borderWidth:1,borderColor:'#474747',width:362}}>

        </View>

      </View>
    </View>
  )
}

export default DiscountCarousal

const styles = StyleSheet.create({
    container:{
        height:180,
        gap:12,
    }
})