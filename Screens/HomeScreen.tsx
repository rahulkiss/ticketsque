import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import CarouselBar from '../provider/CarouselBar'
import CategoryScroll from '../Components/CategoryScroll'
import { ScrollView } from 'react-native-gesture-handler'
import DiscountCarousal from '../Components/DiscountCarousal'
import ScrollBox from '../Components/ScrollBox'
import VenueScrollBox from '../Components/VenueScrollBox'
import ArtistScrollBox from '../Components/ArtistScrollBox'

type HomeScreenProps = {
  navigation: any;
};


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
  
  return (
    <>
    <TopNavBar/> 
    <ScrollView  style={{ flex: 1,  backgroundColor: "#0D0D0D",height:'auto' }}>
     <CarouselBar/> 
     <CategoryScroll/>
     <ScrollBox Title ='Featured Events' Color='#F5EDFD' />
     <DiscountCarousal/>
     <ScrollBox Title ='Event Group 1' Color='#D0A2F7' />
      <VenueScrollBox/>
     <ArtistScrollBox onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD'/>
    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})