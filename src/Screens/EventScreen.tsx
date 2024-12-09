import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import EventDateFilter from '../Components/EventDateFilter'
import EventDetails from '../Components/EventDetails'
import Filter from '../../assets/svg/filter.svg'
import FilterPopup from '../provider/FilterPopup';
import api from '../services/api.interceptor'

type  EventScreenProps ={
  navigation :any
}

const EventScreen : React.FC<EventScreenProps>= ({navigation}) => {
  const [EventData,setEventData] = useState([])

  const ViewDetails = (data:any) => {
    navigation.navigate('singleeventdetail', { eventData: data }); 
       
    
  };
  const [Popup,setPopup] =useState(false)
  const ShowPopup = () =>{
    setPopup(true);
  }

  useEffect(()=>{
    getEventData()
  },[])
  const getEventData = async () => {
    try {
      // setIsLoader(true);
      const response = (await api.get('/service/events_service/v1/no_auth/events/customer/list?tags=&places=&from_date=&till_date=&packages=&prices=&categories=&search=&page=0&location=jbkbd'));
      // setIsLoader(false);
      if(response?.data){
        console.log('response?.data',response?.data._payload);
        
       setEventData(response?.data._payload);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }}



  return (
    <>
    <TopNavBar/> 
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "#0D0D0D",height:'auto', padding:15 }}>
     <Text   style={{color:'#F5EDFD',fontWeight:700,fontSize:20}}>Club & Nightlife Events in Bengaluru</Text>
     <EventDateFilter/>

         <EventDetails eventDetails={EventData} ViewDetails ={(items)=>ViewDetails(items)}/>
  

    </ScrollView>
    <TouchableOpacity onPress={ShowPopup} style={{height:64,width:64,borderRadius:40,backgroundColor:'#D0A2F7',alignItems:'center',justifyContent:'center', position: 'absolute',bottom:25,right: 25,}}>
      <Filter/>
      </TouchableOpacity>
    <FilterPopup Popup={Popup} setPopup={setPopup}/>
    </>
  )
}

export default EventScreen

const styles = StyleSheet.create({})