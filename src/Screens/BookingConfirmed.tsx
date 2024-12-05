import { Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/style'
import { gif } from '../../assets/gif/gifs'
import { icons } from '../../assets/images/image'
import { useNavigation } from '@react-navigation/native'
import Confirmed from '../../assets/svg/Complete.svg'
import Calender from '../../assets/svg/DateIcon.svg'
import Location from '../../assets/svg/locationIcon.svg'

const  BookingConfirmed = () => {
    const navigator = useNavigation()
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
                   {!Animation &&  <Confirmed/>} 

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
                        
                            <Calender/>
                        
                            <View style={{gap:4}}>
                                <Text style={[styles.Heading,{fontSize:16}]}>14/08/2024</Text>
                                <Text style={[styles.Text,{fontSize:11}]}>Sun, 06:30 PM Onwards</Text>
                            </View>
                        </View>
                        <View style={[styles.package,{width:'55%'}]}>
                            <Location/>
                            <View style={{gap:4}}>
                                <Text style={[styles.Heading,{fontSize:16}]}>Happy Brew</Text>
                                <Text style={[styles.Text,{fontSize:11}]}>Kormangala, Bengaluru.</Text>
                            </View>

                        </View>
                    </View>

                    <View style={[styles.package]}>
                        <TouchableOpacity onPress={()=>{navigator.navigate('homescreen'); }} style={[styles.slot,{backgroundColor:'rgba(208, 162, 247, 1)',paddingVertical:10,paddingHorizontal:'20%',borderRadius:20}]}>
                            <Text style={[styles.Heading,{fontSize:14,color:'rgba(13, 13, 13, 1)'}]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigator.navigate('My Tickets'); }} style={[styles.slot,{paddingVertical:10,paddingHorizontal:'15%',borderRadius:20,borderColor:'rgba(208, 162, 247, 1)'}]}>
                            <Text style={[styles.Heading,{fontSize:14,color:'rgba(208, 162, 247, 1)'}]}>My Tickets</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </ScrollView>
    </View>
  )
}

export default BookingConfirmed

