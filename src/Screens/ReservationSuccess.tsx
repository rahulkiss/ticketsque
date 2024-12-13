import { Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/style'
import { gif } from '../../assets/gif/gifs'
import { icons } from '../../assets/images/image'
import Confirmed from '../../assets/svg/Complete.svg'
import { useNavigation } from '@react-navigation/native'


const ReservationSuccess = () => {

  const navicator = useNavigation();
  
    const [Animation,setAnimation] =useState(true)
    setTimeout(()=>{
         setAnimation(false);
    },1320)
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <ScrollView>
        <View style={{margin:10,gap:20}}>
        <View style={{alignItems:'center',marginTop:40}}>
                  {Animation && <Image source={gif.success} style={{width:140,height:140,padding:1}} />}  
                   {!Animation &&  <Confirmed/>} 

        </View>
        <View style={{gap:32}}>

        <View style={{alignItems:'center',gap:16}}>
    <Text style={[styles.Heading,{fontSize:24,color:'rgba(208, 162, 247, 1)'}]}>Reservation Request Successful!</Text>
    <View style={{padding:10,gap:12}}>
    <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)',textAlign:'center'}]}>We will notify you of further updates via WhatsApp, SMS, or email. For further details, contact us at, </Text>
    <Text style={[styles.Heading,{fontSize:14,textAlign:'center'}]}>+91 9999000099</Text> 
    <Text style={[styles.Heading,{fontSize:16,color:'rgba(208, 162, 247, 1)',textAlign:'center'}]}>Back to Venue Home</Text> 
    </View>
        </View>
        <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>navicator.navigate("homescreen", { screen: "Venues" })} style={[styles.slot,{paddingVertical:10,borderRadius:20,borderColor:'rgba(208, 162, 247, 1)',width:'50%',}]}>
                            <View style={{marginHorizontal:15}}>
                            <Text style={[styles.Heading,{fontSize:14,textAlign:'center',color:'rgba(208, 162, 247, 1)'}]}>Back to Venue Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
    </View>

         </View>
        </ScrollView>
    </View>
  )
}

export default ReservationSuccess

