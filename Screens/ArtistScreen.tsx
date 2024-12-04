import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavBar from '../provider/TopNavBar'
import { ScrollView } from 'react-native-gesture-handler'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import { Imageassets } from '../assets/images/image'

type ArtistScreenProps = {
  navigation: any;
};


const ArtistScreen: React.FC<ArtistScreenProps> = ({ navigation }) => {

  const handleNavication = () => {
    navigation.navigate('artistdetailscreen')
        };
        const artistdata= [
          { id: '1', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event'},
          { id: '2', name: 'Artist Name', icon: Imageassets.Artist3 ,event:'Event' },
          { id: '3', name: 'Artist Name', icon: Imageassets.Artist2 ,event:'Event' },
          { id: '4', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event' },
          
        ];
  return (
    <>
    <TopNavBar /> 
    <ScrollView  style={{ flex: 1,  backgroundColor: "black",height:'auto',paddingTop:10 }}>
     <ArtistScrollBox artistdata={artistdata} onPress={handleNavication}   Title='Top Artists' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox artistdata={artistdata} onPress={handleNavication}     Title='DJ' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox artistdata={artistdata} onPress={handleNavication}     Title='Band' Color='#F5EDFD' view='View All'/>
     <ArtistScrollBox artistdata={artistdata} onPress={handleNavication}     Title='Musicians' Color='#F5EDFD' view='View All'/>
    </ScrollView>
    </>
  )
  
}

export default ArtistScreen

const styles = StyleSheet.create({})