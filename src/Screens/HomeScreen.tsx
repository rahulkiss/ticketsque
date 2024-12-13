import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import TopNavBar from '../provider/TopNavBar';
import CarouselBar from '../provider/CarouselBar';
import CategoryScroll from '../Components/CategoryScroll';
import ScrollBox from '../Components/ScrollBox';
import VenueScrollBox from '../Components/VenueScrollBox';
import ArtistScrollBox from '../Components/ArtistScrollBox';
import { Imageassets } from '../../assets/images/image';
import api from '../services/api.interceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { request, PERMISSIONS } from 'react-native-permissions';

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false); // For RefreshControl
  const [EventData0, setEventData0] = useState([]);
  const [EventData1, setEventData1] = useState([]);
  const [EventTitle0, setEventTitle0] = useState('');
  const [EventTitle1, setEventTitle1] = useState('');
  const [SponserData, setSponserData] = useState([]);
  const [VenueData, setVenueData] = useState([]);

  useEffect(() => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then();
  }, []);

  const DiscountData = [
    { image: Imageassets.DiscountImg, discount: '10%', code: 'NEWYEAR2025' },
    { image: Imageassets.PartyImage90, discount: '40%', code: 'NEWYEAR2025' },
    { image: Imageassets.ArtistGalleryimg1, discount: '50%', code: 'NEWYEAR2025' },
  ];

  const venueData = [
    { title: '21st Amendment Gaasto', image: Imageassets.PartyImage90, place: 'TOCA, Koramangala', eventNo: 'Events 14' },
    { title: '21st Amendment Gaasto', image: Imageassets.PartyImage90, place: 'TOCA, Koramangala', eventNo: 'Events 14' },
  ];

  const artistdata = [
    { id: '1', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event'},
          { id: '2', name: 'Artist Name', icon: Imageassets.Artist3 ,event:'Event' },
          { id: '3', name: 'Artist Name', icon: Imageassets.Artist2 ,event:'Event' },
          { id: '4', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event' },
    
  ];

  const fetchInitialData = async () => {
    await Promise.all([getEventData(), getSponserData(), GetVenueData()]);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchInitialData(); 
    setRefreshing(false); 
  };

  const getSponserData = async () => {
    try {
      const response = await api.get('/service/events_service/v1/no_auth/sponsored/events?location=Bengaluru');
      if (response?.data) {
        setSponserData(response?.data);
      }
    } catch (error) {
      console.error('Error fetching sponsor data:', error);
    }
  };

  const getEventData = async () => {
    try {
      const response = await api.get('/service/events_service/v1/no_auth/events/event_group/customer?location=Bengaluru');
      if (response?.data) {
        setEventTitle0(response?.data?.[0]?.name);
        setEventData0(response?.data?.[0]?.events ?? []);
        setEventData1(response?.data?.[1]?.events ?? []);
        setEventTitle1(response?.data?.[1]?.name);
      }
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  const GetVenueData = async () => {
    try {
      const response = await api.get('/service/accounts_service/v1/no_auth/venues/list');
      if (response) {
        setVenueData(response.data._payload);
      }
    } catch (error) {
      console.error('Error fetching venue data:', error);
    }
  };

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen');
  };

  const ViewDetails = (data: any) => {
    navigation.navigate('singleeventdetail', { eventData: data });
  };

  return (
    <>
      <TopNavBar currentScreen={'Home'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: 'black' }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />
        }
      >
        {SponserData.length !== 0 && (
          <View>
            <CarouselBar carousal={'Home'} margintop={10} carousalwidth={1.5} imageList={SponserData} />
          </View>
        )}

        <View style={{ marginTop: 10 }}>
          <CategoryScroll />
        </View>

        <ScrollBox
          eventDetails={EventData0}
          Title="Event"
          Color="#F5EDFD"
          view={EventTitle0 && 'View All'}
          ViewDetails={(items) => ViewDetails(items)}
        />

        <View style={{ height: 180, gap: 10, marginBottom: 20 }}>
          <Text style={{ height: 25, paddingHorizontal: 15, color: '#F5EDFD', fontWeight: '700', fontSize: 18 }}>
            Discounts
          </Text>
          <CarouselBar carousal={'Discount'} carousalwidth={1} imageList={DiscountData} position={'absolute'} bottom={-3} />
        </View>

        {EventData1.length !== 0 && (
          <ScrollBox
            eventDetails={EventData1}
            Title={EventTitle1}
            Color="#D0A2F7"
            view={EventTitle1 && 'View All'}
            ViewDetails={(items) => ViewDetails(items)}
          />
        )}

        <VenueScrollBox venueData={VenueData} text="Top Venues" color="rgba(245, 237, 253, 1)" />

        <ArtistScrollBox artistdata={artistdata} onPress={handleNavication} Title="Top Artists" Color="#F5EDFD" view="View All" />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
