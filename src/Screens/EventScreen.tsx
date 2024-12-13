import { Image, StyleSheet, Text, TouchableOpacity, View, RefreshControl, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import TopNavBar from '../provider/TopNavBar';
import { ScrollView } from 'react-native-gesture-handler';
import EventDateFilter from '../Components/EventDateFilter';
import EventDetails from '../Components/EventDetails';
import Filter from '../../assets/svg/filter.svg';
import FilterPopup from '../provider/FilterPopup';
import api from '../services/api.interceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';

type EventScreenProps = {
  navigation: any;
};

const EventScreen: React.FC<EventScreenProps> = ({ navigation }) => {
  const [EventData, setEventData] = useState([]);
  const [Popup, setPopup] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [ResponseComes, setResponseComes] = useState(false);
  const [IsLoader, setIsLoader] = useState(false);
  
  const ViewDetails = (data: any) => {
    navigation.navigate('singleeventdetail', { eventData: data });
  };

  const ShowPopup = () => {
    setPopup(true);
  };

  const getEventData = async () => {
    const City = await AsyncStorage.getItem('user-city');
    try {
      const response = await api.get(
        `/service/events_service/v1/no_auth/events/customer/list?tags=&places=&from_date=&till_date=&packages=&prices=&categories=&search=&page=0&location=${City ?? 'bengaluru'}`
      );
      if (response?.data) {
        setEventData(response?.data._payload);
        setResponseComes(true)
        setIsLoader(false)
      }
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await getEventData();
    setRefreshing(false);
  };

  useEffect(() => {
    getEventData();
    setIsLoader(true)
  }, []);
  const currentCity = AsyncStorage.getItem('user-city');

  return (
    <>
      <TopNavBar currentScreen={'Events'} />
      <ScrollView
       showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: 'black',paddingTop:15 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
        }
      >
        
        <Text numberOfLines={1} style={{ color: '#F5EDFD', fontWeight: '700', fontSize: 20,paddingHorizontal:15 }}>
          Club & Nightlife Events in {currentCity}
        </Text> 
          <View style={{paddingHorizontal:15}}>
           <EventDateFilter />              
          </View>

        {EventData?.length == 0 && ResponseComes &&
        <Text style={{ color: 'rgba(208, 162, 247, 0.8)', fontWeight: '600',fontSize: 18,marginTop:50,textAlign:'center'}}>
        No Events in {currentCity}
      </Text> }

        <EventDetails eventDetails={EventData} ViewDetails={(items) => ViewDetails(items)} />
          
      </ScrollView>
      <TouchableOpacity
        onPress={ShowPopup}
        style={{
          height: 64,
          width: 64,
          borderRadius: 40,
          backgroundColor: '#D0A2F7',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 25,
          right: 25,
        }}
      >
        <Filter />
      </TouchableOpacity>
      <FilterPopup Popup={Popup} setPopup={setPopup} />
      {  IsLoader &&

        <View style={{marginTop:54,position:'absolute',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
           <ActivityIndicator size="large" color="#D0A2F7" />
      </View>

      }
    </>
  );
};

export default EventScreen;

const styles = StyleSheet.create({});
