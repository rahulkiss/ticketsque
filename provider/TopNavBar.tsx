import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Imageassets } from '../assets/images/image';
import { useNavigation } from "@react-navigation/native";
 
import NotificationScreen from "../Screens/NotificationScreen";

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
        <Image
          source={Imageassets.Frame} 
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationContainer} onPress={ShowSelectCity}>
        
           <Image source={Imageassets.Location} />
             <Text style={styles.locationText}>Bengaluru</Text>
             <Image source={Imageassets.ArrowDown} />
          
      </TouchableOpacity>
           </View>
           
      
    
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={ShowSearchScreen} style={styles.iconButton}>
        <Image source={Imageassets.Search}  style={{width:20,height:20}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ShowNotifyScreen} style={styles.iconButton} >
        <Image source={Imageassets.Notify} style={{width:20,height:20}}/>
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
