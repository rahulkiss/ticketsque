import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import CarouselBar from '../provider/CarouselBar'
import VenueScrollBox from '../Components/VenueScrollBox'
import FilterPopup from '../provider/FilterPopup'
import { Imageassets } from '../assets/images/image'
import { useNavigation } from '@react-navigation/native'


const VenueScreen = () => {
   const navigation=useNavigation()
  const [Popup,setPopup] =useState(false)
  const ShowPopup = () =>{
    setPopup(true);
  }
  
  return (
    <>
    <TopNavBar navigation={navigation}/> 
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
        <CarouselBar  imageList={[require("../assets/images/Banner_1.png"),require("../assets/images/Banner_2.png"),require("../assets/images/Banner_3.png")]}/> 
      </View>
     
      <VenueScrollBox text={'Top Venuns'} color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox text={'Available for Reservation'} color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox text={'Venun with Event'} color={'rgba(208, 162, 247, 1)'}/>
    </ScrollView>
    <TouchableOpacity onPress={ShowPopup} style={{height:64,width:64,borderRadius:40,backgroundColor:'#D0A2F7',alignItems:'center',justifyContent:'center', position: 'absolute',bottom:25,right: 25,}}><Image source={Imageassets.Filterimg}/></TouchableOpacity>
    <FilterPopup Popup={Popup} setPopup={setPopup}/>
    </>
  )
}

export default VenueScreen

const styles = StyleSheet.create({})