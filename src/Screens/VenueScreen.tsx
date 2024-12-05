import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import CarouselBar from '../provider/CarouselBar'
import VenueScrollBox from '../Components/VenueScrollBox'
import FilterPopup from '../provider/FilterPopup'
import { Imageassets } from '../../assets//images/image'
import { useNavigation } from '@react-navigation/native'
import Filter from '../../assets/svg/filter.svg'


const VenueScreen = () => {
   const navigation=useNavigation()
  const [Popup,setPopup] =useState(false)
  const ShowPopup = () =>{
    setPopup(true);
  }
  const venueData = [
    {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
    {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
    {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
    {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'}
  ];
  
  return (
    <>
    <TopNavBar navigation={navigation}/> 
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
      <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={[require("../../assets/images/Banner_1.png"),require("../../assets/images/Banner_2.png"),require("../../assets/images/Banner_3.png")]}/> 
      </View>
     
      <VenueScrollBox venueData={venueData}  text={'Top Venuns'} color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox venueData={venueData} text={'Available for Reservation'} color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox venueData={venueData} text={'Venun with Event'} color={'rgba(208, 162, 247, 1)'}/>
    </ScrollView>
    <TouchableOpacity onPress={ShowPopup} style={{height:64,width:64,borderRadius:40,backgroundColor:'#D0A2F7',alignItems:'center',justifyContent:'center', position: 'absolute',bottom:25,right: 25,}}>
      <Filter/></TouchableOpacity>
    <FilterPopup Popup={Popup} setPopup={setPopup}/>
    </>
  )
}

export default VenueScreen

const styles = StyleSheet.create({})