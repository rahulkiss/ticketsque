import { StyleSheet, Text, View,Image, TouchableOpacity, Alert, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { icons } from '../../assets/images/image'
import { Imageassets } from '../../assets//images/image'
import NameBar from '../provider/NameBar'
import api from '../services/api.interceptor';
import {CityResponse} from '../interfaces/city.interfaces';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';






function SelectCity({route}:{route:any}) {
  const [ShowNotFount, setShowNotFount] = useState(false)
  const [IsLoader, setIsLoader] = useState(false)
  const [cityDta, setcityDta] = useState([])
  const navigator = useNavigation()
console.log('route',route?.params?.reatuenScreen?.currentScreen);


  const TrakLocation = () => {
    setIsLoader(true)
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((status) => {
      if(status === RESULTS.GRANTED){

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        if (location) {
          getUserData(location.latitude, location.longitude)    
        }
      })
      .catch(error => {
        setIsLoader(false)
        const { code, message } = error
        console.warn('Location permision:-', code, message)
        if (code == 'UNAVAILABLE') {
          Alert.alert(
            'Location Required',
            'Please enable location services in your device settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              {text: 'ok' },
            ]
          )
        }
      })
    }
    
  });
  }

  useEffect(() => {
    getUserData(77.5504666, 12.9763776)
  }, [])


  const getUserData = async (lat: any, lang: any) => {
    try {
      setIsLoader(true)
      const response = (await api.get<CityResponse[]>(`/service/events_service/v1/no_auth/city/list?lng=${lat}&lat=${lang}`))
     
      if (response?.data) {
        console.log("response?.data", response?.data)
        setcityDta(response?.data ?? [])
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      
    } finally {
      setIsLoader(false)
    }
  }
  const updateCity = (city: any) => {
    storeCity(city)
    navigator.navigate("homescreen", { screen: route?.params?.reatuenScreen?.currentScreen })
  }
  const storeCity = async (value: any) => {
    try {
      await AsyncStorage.setItem('user-city', value)
    } catch (e) {
      console.log(e)
    }
  }




  return (
    <View style={{ backgroundColor: 'rgba(13, 13, 13, 1)', flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        <NameBar name='Select City' />
      </View>
      <Search SearchTitle="Search  your City" />
      <View style={styles.container}>

        <TouchableOpacity onPress={TrakLocation} style={styles.Location}>
          <View style={{ margin: 10 }}>
            <Image source={icons.locationicon} />
          </View>
          <Text style={{ color: '#D0A2F7', fontSize: 12 }}>Detect My Location</Text>
        </TouchableOpacity>
        {ShowNotFount &&
          <View style={{ gap: 16 }}>
            <Image style={{ height: 150, width: 150, marginHorizontal: 'auto' }} source={Imageassets.EventNotFount} />
            <Text style={{ color: 'rgba(208, 162, 247, 1)', fontSize: 18, fontWeight: 800, textAlign: 'center' }}>No Event Fount in Your Location</Text>
            <Text style={{ color: 'rgba(245, 237, 253, 1)', fontSize: 12, fontWeight: 400, textAlign: 'center' }}>It looks like there aren’t any events happening near you right now. But don’t miss out—explore exciting events in the following cities and discover something new!
            </Text>
          </View>}

        <View style={{ height: 285, gap: 12 }}>
          <Text style={{ height: 25, fontWeight: 700, fontSize: 18, color: '#F5EDFD' }}>All Available Cities</Text>
         { IsLoader &&

      <View style={{marginTop:80}}>
        <ActivityIndicator size="large" color="#D0A2F7" />
      </View>
    
       }
          {cityDta?.length !== 0 &&
            cityDta?.map((items, index) => (
              <TouchableOpacity onPress={() => updateCity(items.city)} key={index} style={styles.Cites}>
                <Text style={{ color: '#D0A2F7', fontSize: 12, }}>{items.city || "No City Available"}</Text>
              </TouchableOpacity>
            ))}

        </View>

      </View>
    </View>
  )
}

export default SelectCity

const styles = StyleSheet.create({
    container: {
        height:413,
        margin:20,
        gap: 12,   
    },
    Location: {
        backgroundColor:'#1B1B1B',
        height:48,
        borderRadius:8,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#474747',
    },
    Cites:{
        backgroundColor:'#1B1B1B',
        height:40,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#474747',
        justifyContent:'center',
        padding:10,
       
    },

})