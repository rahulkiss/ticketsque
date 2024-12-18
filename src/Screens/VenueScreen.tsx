import { StyleSheet, Text, TouchableOpacity, View,Image, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import CarouselBar from '../provider/CarouselBar'
import VenueScrollBox from '../Components/VenueScrollBox'
import FilterPopup from '../provider/FilterPopup'
import { Imageassets } from '../../assets//images/image'
import { useNavigation } from '@react-navigation/native'
import Filter from '../../assets/svg/filter.svg'
import api from '../services/api.interceptor'

const VenueScreen = () => {
  const [venueData, setVenueData] = useState([]);
   const navigation=useNavigation()
  const [Popup,setPopup] =useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [IsLoader, setIsLoader] = useState(false);

  const ShowPopup = () =>{
    setPopup(true);
  }

  const GetVenueData = async()=>{
    try{
      const response = await api.get(`/service/accounts_service/v1/no_auth/venues/list`);
      if (response){
        // console.log("test :", response.data._payload)
        setVenueData(response.data._payload)
        console.log('test34:',venueData)
        setIsLoader(false)
        
      }

    }
    catch (error){
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() =>{
      GetVenueData();
      setIsLoader(true)
  },[])

  const onRefresh = async () => {
    setRefreshing(true);
    await GetVenueData();
    setRefreshing(false);
  };
  
  
  return (
    <>
    <TopNavBar currentScreen={'Venues'} /> 
    <ScrollView  showsVerticalScrollIndicator={false}  style={{ flex: 1,  backgroundColor: "black"}}
     refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>
      <View>
      <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={[require("../../assets/images/Banner_1.png"),require("../../assets/images/Banner_2.png"),require("../../assets/images/Banner_3.png")]}/> 
      </View>
     
      <VenueScrollBox venueData={venueData}   color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox venueData={venueData} color={'rgba(208, 162, 247, 1)'}/>
      <VenueScrollBox venueData={venueData}  color={'rgba(208, 162, 247, 1)'}/>
    </ScrollView>
    <TouchableOpacity onPress={ShowPopup} style={{height:64,width:64,borderRadius:40,backgroundColor:'#D0A2F7',alignItems:'center',justifyContent:'center', position: 'absolute',bottom:25,right: 25,}}>
      <Filter/></TouchableOpacity>
    <FilterPopup Popup={Popup} setPopup={setPopup}/>
    { IsLoader  &&
    // && venueData.length !== 0
<View style={{marginTop:54,position:'absolute',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   <ActivityIndicator size="large" color="#D0A2F7" />
</View>

}
    </>
  )
}

export default VenueScreen

const styles = StyleSheet.create({})