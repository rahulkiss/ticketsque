import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import ArtistScrollBox from '../Components/ArtistScrollBox'

type ArtistScreenProps = {
  navigation: any;
};


const ArtistScreen: React.FC<ArtistScreenProps> = ({ navigation }) => {

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
  return (
    <>
    <TopNavBar /> 
    <ScrollView  style={{ flex: 1,  backgroundColor: "black",height:'auto',paddingTop:10 }}>
     <ArtistScrollBox onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox onPress={handleNavication}     Title='DJ' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox onPress={handleNavication}     Title='Band' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox onPress={handleNavication}     Title='Musicians' Color='#F5EDFD' view='View All'/>
    </ScrollView>
    </>
  )
  
}

export default ArtistScreen

const styles = StyleSheet.create({})