import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import CarouselBar from '../provider/CarouselBar'
import CategoryScroll from '../Components/CategoryScroll'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
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
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
        <CarouselBar/> 
      </View>
     <CategoryScroll/>
     <ScrollBox Title ='Featured Events' Color='#F5EDFD' view = 'View All' />
     <DiscountCarousal/>
     <ScrollBox Title ='Event Group 1' Color='#D0A2F7' view = 'View All' />
      <VenueScrollBox text={'Top Venues'} color={'rgba(245, 237, 253, 1)'}/>
     <ArtistScrollBox onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>
    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})