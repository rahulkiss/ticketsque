import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { icons } from '../assert/image/image'


const ReservationScreen = () => {
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1,}}> 
      <ScrollView>
        <View style={{margin:20,gap:20}}>
          <View style={styles.card}>
            <View style={styles.package}>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400}}>Select Outlet</Text>
              <Image source={icons.down}/>
            </View>  
          </View>  
          <View style={{gap:8}}>
            <Text style={{fontWeight:700,color:'rgba(208, 162, 247, 1)',fontSize:20}}>Select No of Guests</Text>
            <View style={styles.card}>

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ReservationScreen

const styles = StyleSheet.create({  
  card:{
      backgroundColor:'rgba(212, 212, 212, 0.1)',
      borderRadius:4,
      minHeight:40,
      gap:10,
      padding:10
  },
  package:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    gap:8
},
})