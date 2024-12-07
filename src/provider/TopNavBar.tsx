import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from '../../assets/svg/AppLogo.svg'
import Location from'../../assets/svg/location.svg'
import DownArrow from'../../assets/svg/downArrow.svg'
import Search from'../../assets/svg/SearchIcon.svg'
import BellIcon from'../../assets/svg/Notification.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';


type TopNavBarprops ={
  navigation?: any;
}

const TopNavBar: React.FC<TopNavBarprops>=(navigation) => {
  const [City,setCity] = useState('')
  const navigator = useNavigation();

  useEffect(()=>{
    getCity()
  },[])
 
  const ShowSearchScreen = () =>{
    navigator.navigate('Search')
  }
  const ShowNotifyScreen = () =>{
    navigator.navigate('Notifications')
  }
  const ShowSelectCity = () =>{
    navigator.navigate('Select City')
  }
  const getCity = async () => {
    try {
      const value = await AsyncStorage.getItem('user-city');
      if (value !== null) {
        setCity(value)
      }
    } catch (e) {
      console.log(e); 
    }
  };

   

  return (
    <View style={styles.container}>
     
     <View style={{width:'50%', flexDirection: "row",gap:12}} >
      <TouchableOpacity style={styles.logoContainer}>
        <Logo/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.locationContainer} onPress={ShowSelectCity}>
           <Location/>
             <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationText}>{City.length == 0 ?'Bangaluru':City}</Text>
            <DownArrow/>
      </TouchableOpacity>
           </View>
           
      
    
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={ShowSearchScreen} style={styles.iconButton}>
        <Search/>
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowNotifyScreen} style={styles.iconButton} >
        <BellIcon/>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#121212", 
    paddingHorizontal: 20,
    paddingVertical: 12,
    height:54,
    borderBottomWidth:1,
    borderBlockColor:'rgba(71, 71, 71, 1)'
  },
  logoContainer: {

  },
  logo: {
    width: 30,
    height: 24,
    resizeMode: "contain",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    height:24,
    borderBottomColor:'#474747',
    borderBottomWidth:2,
    borderStyle:'dashed',
    paddingBottom:3,
    gap:8,

  },
  locationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    minWidth:10,
    maxWidth:160,
    textAlign:'center'
    
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default TopNavBar;
