import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Imageassets } from '../../assets//images/image';
import { useNavigation } from "@react-navigation/native";
 
import NotificationScreen from "../Screens/NotificationScreen";
import { useSelector } from "react-redux";

type TopNavBarprops ={
  navigation?: any;
}

const TopNavBar: React.FC<TopNavBarprops>=(navigation) => {
  const navigator = useNavigation();
  const seletedCity = useSelector((state: any) => state.user.city)
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
     
     <View style={{width:'80%', flexDirection: "row",gap:10}} >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={Imageassets.Frame} 
          style={styles.logo}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.locationContainer} onPress={ShowSelectCity}>
        
           <Image source={Imageassets.Location} />
             <Text style={styles.locationText}>{seletedCity}</Text>
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
    minWidth:10
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
