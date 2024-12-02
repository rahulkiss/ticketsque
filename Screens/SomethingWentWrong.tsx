import { Text, View,ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../css/style'
import { gif } from '../assert/gif/gifs'
import { icons } from '../assert/image/image'

const SomethingWentWrong = () => {
    const [Animation,setAnimation] =useState(true)
    setTimeout(()=>{
         setAnimation(false);
    },1420)
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <ScrollView>
            <View style={styles.maincontainer}>
                <View style={{alignItems:'center',marginTop:40}}>
                    {Animation && <Image source={gif.wrong} style={{width:140,height:140,padding:1}} />}  
                    {!Animation &&  <Image source={icons.wrong} style={{width:140,height:140,padding:1}} />} 
                </View>
                <View>
                    <View style={{alignItems:'center',gap:16,}}>
                        <Text style={[styles.Heading,{fontSize:24,color:'rgba(208, 162, 247, 1)'}]}>Oops! Something Went Wrong</Text>
                        <View style={{width:'85%',gap:16}}>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)' ,textAlign:'center'}]}>Your payment could not be processed. Please try again.</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)' ,textAlign:'center'}]}>Retry the payment or try booking a new ticket. If the problem persists, check your payment details or internet connection.</Text>
                        </View>
                    </View>

                <View style={[styles.package,{marginTop:30}]}>
                        <View style={[styles.slot,{paddingVertical:10,borderRadius:20,borderColor:'rgba(208, 162, 247, 1)',width:'47%',}]}>
                            <View style={{marginHorizontal:15}}>
                            <Text style={[styles.Heading,{fontSize:14,textAlign:'center',color:'rgba(208, 162, 247, 1)'}]}>Refresh Page</Text>
                            </View>
                        </View>
                        <View style={[styles.slot,{paddingVertical:10,borderRadius:20,borderColor:'rgba(208, 162, 247, 1)',width:'47%'}]}>
                            <View style={{marginHorizontal:15}}>
                            <Text style={[styles.Heading,{fontSize:14,textAlign:'center',color:'rgba(208, 162, 247, 1)'}]}>Event Page</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default SomethingWentWrong
