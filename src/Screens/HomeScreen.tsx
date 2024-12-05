import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import CarouselBar from '../provider/CarouselBar'
import CategoryScroll from '../Components/CategoryScroll'
import {  ScrollView } from 'react-native-gesture-handler'
import ScrollBox from '../Components/ScrollBox'
import VenueScrollBox from '../Components/VenueScrollBox'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import { Imageassets } from '../../assets//images/image'

type HomeScreenProps = {
  navigation: any;
};


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const  DiscountData = 
  [{image:Imageassets.DiscountImg,discount:'10%',code:'NEWYEAR2025'},
    {image:Imageassets.PartyImage90,discount:'40%',code:'NEWYEAR2025'},
    {image:Imageassets.ArtistGalleryimg1,discount:'50%',code:'NEWYEAR2025'},
  ]  
  const eventDetails = [
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...45',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'}
];
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


  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
  
  return (
    <>
    <TopNavBar/> 
       
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
        <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={[require("../../assets/images/Banner_1.png"),require("../../assets/images/Banner_2.png"),require("../../assets/images/Banner_3.png")]}/> 
      </View>
     <CategoryScroll/>

     <ScrollBox eventDetails={eventDetails} Title ='Featured Events' Color='#F5EDFD' view = 'View All' />
     
      <View style={{height:180,gap:10,marginBottom:20}}>
      <Text style={{height:25,paddingHorizontal:15,color:'#F5EDFD',fontWeight:700,fontSize:18, width:'100%',}}>Discounts</Text>
      <CarouselBar carousal={'Discount'} carousalwidth={1} imageList={DiscountData} position={'absolute'} bottom={-3}/>
      </View>

     <ScrollBox eventDetails={eventDetails} Title ='Event Group 1' Color='#D0A2F7' view = 'View All' />

    <VenueScrollBox venueData={venueData} text={'Top Venues'} color={'rgba(245, 237, 253, 1)'}/>

     <ArtistScrollBox   artistdata={artistdata} onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>

    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})