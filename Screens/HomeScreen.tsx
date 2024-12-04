import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import CarouselBar from '../provider/CarouselBar'
import CategoryScroll from '../Components/CategoryScroll'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import ScrollBox from '../Components/ScrollBox'
import VenueScrollBox from '../Components/VenueScrollBox'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import { Imageassets } from '../assets/images/image'

type HomeScreenProps = {
  navigation: any;
};


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const  DiscountData = 
  [{image:Imageassets.DiscountImg,discount:'10%',code:'NEWYEAR2025'},
    {image:Imageassets.PartyImage90,discount:'40%',code:'NEWYEAR2025'},
    {image:Imageassets.ArtistGalleryimg1,discount:'50%',code:'NEWYEAR2025'},
  ]  

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
  
  return (
    <>
    <TopNavBar/> 
    <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black",height:'auto' }}>
      <View>
        <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={[require("../assets/images/Banner_1.png"),require("../assets/images/Banner_2.png"),require("../assets/images/Banner_3.png")]}/> 
      </View>
     <CategoryScroll/>
     <ScrollBox Title ='Featured Events' Color='#F5EDFD' view = 'View All' />
     
      <View style={{height:180,gap:10,marginBottom:20}}>
      <Text style={{height:25,paddingHorizontal:15,color:'#F5EDFD',fontWeight:700,fontSize:18, width:'100%',}}>Discounts</Text>
      <CarouselBar carousal={'Discount'} carousalwidth={1} imageList={DiscountData} position={'absolute'} bottom={-3}/>
      </View>

     <ScrollBox Title ='Event Group 1' Color='#D0A2F7' view = 'View All' />
      <VenueScrollBox text={'Top Venues'} color={'rgba(245, 237, 253, 1)'}/>
     <ArtistScrollBox onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>
    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})