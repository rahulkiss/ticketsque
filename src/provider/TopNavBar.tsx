import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from '../../assets/svg/AppLogo.svg'
import Location from'../../assets/svg/location.svg'
import DownArrow from'../../assets/svg/downArrow.svg'
import Search from'../../assets/svg/SearchIcon.svg'
import BellIcon from'../../assets/svg/Notification.svg'

type TopNavBarprops ={
  navigation?: any;
}

const TopNavBar: React.FC<TopNavBarprops>=(navigation) => {
  const navigator = useNavigation();
  const ShowSearchScreen = () =>{
    navigator.navigate('Search')
  }
  const ShowNotifyScreen = () =>{
    navigator.navigate('Notifications')
  }
  const ShowSelectCity = () =>{
    navigator.navigate('Select City')
  }

  return (
    <View style={styles.container}>
     
     <View style={{width:140, flexDirection: "row", justifyContent:'space-between'}} >
      <TouchableOpacity style={styles.logoContainer}>
        <Logo/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationContainer} onPress={ShowSelectCity}>
        
           <Location/>
             <Text style={styles.locationText}>Bengaluru</Text>
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
    flex: 1,
  },
  logo: {
    width: 30,
    height: 24,
    resizeMode: "contain",
  },
  locationContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    height:24,
    borderBottomColor:'#474747',
    borderBottomWidth:2,
    borderStyle:'dashed',
    paddingBottom:3,
    

    

  },
  locationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
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
