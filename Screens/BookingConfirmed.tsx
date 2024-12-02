import { Text, View,ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../css/style'
import { gif } from '../assert/gif/gifs'
import { icons } from '../assert/image/image'

const  BookingConfirmed = () => {
    const [Animation,setAnimation] =useState(true)
    setTimeout(()=>{
         setAnimation(false);
    },1320)
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <ScrollView>
                <View style={styles.maincontainer}>
                    <View style={{alignItems:'center',marginTop:40}}>
                  {Animation && <Image source={gif.success} style={{width:140,height:140,padding:1}} />}  
                   {!Animation &&  <Image source={icons.confirm} style={{width:140,height:140,padding:1}} />} 

                    </View>
                    <View style={{gap:32}}>

                    <View style={{alignItems:'center',gap:16,paddingHorizontal:10}}>
                        <Text style={[styles.Heading,{fontSize:24,color:'rgba(208, 162, 247, 1)'}]}>Booking Confirmed!</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)'}]}>Your ticket has been successfully booked!</Text>
                        <View style={{alignItems:'center'}}>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)'}]}>We have sent the ticket details to your</Text>
                        <View style={styles.package}>
                        <Text style={styles.pinkText}> +91 7204357841</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)'}]}>and</Text>  
                        </View>
                        <Text style={styles.pinkText}> rohanrhajeri18@gmail.com.</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)'}]}>You can also view your tickets under 'My Tickets'</Text>
                        </View>


                    </View>

                    <View style={[styles.card,{gap:12}]}>
                        <Text style={[styles.pinkText,{fontWeight:600}]}>Ticket Id : 123456</Text>
                        <Text style={styles.Heading}>Event Name </Text>
                        <View style={[styles.package,{width:'55%'}]}>
                        <View style={[styles.card,{borderRadius:25}]}>
                            <Image source={icons.calender2}/>
                        </View>
                            <View style={{gap:4}}>
                                <Text style={[styles.Heading,{fontSize:16}]}>14/08/2024</Text>
                                <Text style={[styles.Text,{fontSize:11}]}>Sun, 06:30 PM Onwards</Text>
                            </View>
                        </View>
                        <View style={[styles.package,{width:'55%'}]}>
                            <View style={[styles.card,{borderRadius:25}]}>
                            <Image source={icons.location2}/>
                            </View>
                            <View style={{gap:4}}>
                                <Text style={[styles.Heading,{fontSize:16}]}>Happy Brew</Text>
                                <Text style={[styles.Text,{fontSize:11}]}>Kormangala, Bengaluru.</Text>
                            </View>

                        </View>
                    </View>

                    <View style={[styles.package]}>
                        <View style={[styles.slot,{backgroundColor:'rgba(208, 162, 247, 1)',paddingVertical:10,paddingHorizontal:'20%',borderRadius:20}]}>
                            <Text style={[styles.Heading,{fontSize:14,color:'rgba(13, 13, 13, 1)'}]}>Home</Text>
                        </View>
                        <View style={[styles.slot,{paddingVertical:10,paddingHorizontal:'15%',borderRadius:20,borderColor:'rgba(208, 162, 247, 1)'}]}>
                            <Text style={[styles.Heading,{fontSize:14,color:'rgba(208, 162, 247, 1)'}]}>My Tickets</Text>
                        </View>
                    </View>
                    </View>
                </View>
        </ScrollView>
    </View>
  )
}

export default BookingConfirmed

