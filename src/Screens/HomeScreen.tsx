import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import CarouselBar from '../provider/CarouselBar'
import CategoryScroll from '../Components/CategoryScroll'
import {  ScrollView } from 'react-native-gesture-handler'
import ScrollBox from '../Components/ScrollBox'
import VenueScrollBox from '../Components/VenueScrollBox'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import { Imageassets } from '../../assets//images/image'
import api from '../services/api.interceptor'

type HomeScreenProps = {
  navigation: any;
};


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
const [EventData,setEventData] = useState([])
const [EventTitle,setEventTitle] = useState('')
const [SponserData,setSponserData] = useState([])

  const  DiscountData = 
  [{image:Imageassets.DiscountImg,discount:'10%',code:'NEWYEAR2025'},
    {image:Imageassets.PartyImage90,discount:'40%',code:'NEWYEAR2025'},
    {image:Imageassets.ArtistGalleryimg1,discount:'50%',code:'NEWYEAR2025'},
  ]  
 
const venueData = [
  {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
  {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
  {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'},
  {title:'21st AMendement gaasto',image:Imageassets.PartyImage90,palce:'TOCA, Koramangala',eventNo:'Events 14'}
];
const artistdata= [
  { id: '1', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event'},
  { id: '2', name: 'Artist Name', icon: Imageassets.Artist3 ,event:'Event' },
  { id: '3', name: 'Artist Name', icon: Imageassets.Artist2 ,event:'Event' },
  { id: '4', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event' },
  
];

useEffect(()=>{
  getEventData()
  getSponserData()
},[])
const getSponserData = async () => {
  try {
    // setIsLoader(true);
    const response = (await api.get('/service/events_service/v1/no_auth/sponsored/events?location=Bengaluru'));
    // setIsLoader(false);
    if(response?.data){
      console.log('responseRespons',response?.data?.[0]?.banner_images?.[0]);
      setSponserData(response?.data);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }}



const getEventData = async () => {
  try {
    // setIsLoader(true);
    const response = (await api.get('/service/events_service/v1/no_auth/events/event_group/customer?location=Bengaluru'));
    // setIsLoader(false);
    if(response?.data){
      console.log('response?.data',response?.data[0].events[0].images[0].image_link);
      setEventTitle(response?.data?.[0]?.name)
      setEventData(response?.data?.[0]?.events);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }}

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
  


  return (
    <>
    <TopNavBar /> 
       
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
        <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={SponserData}/> 
      </View>
     <CategoryScroll/>

     <ScrollBox eventDetails={EventData} Title ={EventTitle} Color='#F5EDFD' view ={EventTitle && 'View All'} />
     
      <View style={{height:180,gap:10,marginBottom:20}}>
      <Text style={{height:25,paddingHorizontal:15,color:'#F5EDFD',fontWeight:700,fontSize:18, width:'100%',}}>Discounts</Text>
      <CarouselBar carousal={'Discount'} carousalwidth={1} imageList={DiscountData} position={'absolute'} bottom={-3}/>
      </View>

     <ScrollBox eventDetails={EventData} Title ='Event Group 1' Color='#D0A2F7' view = 'View All' />

    <VenueScrollBox venueData={venueData} text={'Top Venues'} color={'rgba(245, 237, 253, 1)'}/>

     <ArtistScrollBox   artistdata={artistdata} onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>

    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})