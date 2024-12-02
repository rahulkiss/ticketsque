import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import EventDateFilter from '../Components/EventDateFilter'
import EventDetails from '../Components/EventDetails'
import { Imageassets } from '../assets/images/image';
import FilterPopup from '../provider/FilterPopup';

type  EventScreenProps ={
  navigation :any
}

const EventScreen : React.FC<EventScreenProps>= ({navigation}) => {
  const ViewDetails = () => {
    navigation.navigate('singleeventdetail')
  };
  const [Popup,setPopup] =useState(false)
  const ShowPopup = () =>{
    setPopup(true);
  }
  return (
    <>
    <TopNavBar/> 
    <ScrollView  style={{ flex: 1,  backgroundColor: "#0D0D0D",height:'auto', padding:15 }}>
     <Text   style={{color:'#F5EDFD',fontWeight:700,fontSize:20}}>Club & Nightlife Events in Bengaluru</Text>
     <EventDateFilter/>
      <EventDetails onPress={ViewDetails}/>

    </ScrollView>
    <TouchableOpacity onPress={ShowPopup} style={{height:64,width:64,borderRadius:40,backgroundColor:'#D0A2F7',alignItems:'center',justifyContent:'center', position: 'absolute',bottom:25,right: 25,}}><Image source={Imageassets.Filterimg}/></TouchableOpacity>
    <FilterPopup Popup={Popup} setPopup={setPopup}/>
    </>
  )
}

export default EventScreen

const styles = StyleSheet.create({})