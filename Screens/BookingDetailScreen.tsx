import { StyleSheet, Text, View,ScrollView,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton'
import { icons } from '../assert/image/image';
import NameBar from '../provider/NameBar';
import CustomerDetailsPopup from '../provider/CustemerDetailsPopup';

type BookingDetailScreenprops={
    navigation: any;
}
const BookingDetailScreen:React.FC<BookingDetailScreenprops> = ({navigation}) => {
    const [Popup,setPopup] =useState(false)
    const handler=()=>{
    navigation.navigate('reservationSuccess')
    };
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1,}}> 
      <ScrollView>
      <View>
          <NameBar name='Reservation' />
      </View>
            <View style={{margin:20,gap:16}}>
                <View style={{gap:10}}>
                    <Text style={styles.Heading}>Review Booking Details</Text>
                        <View style={styles.card}>
                            <View style={{gap:16,padding:20}}>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>Reservation’s at</Text>
                            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:20,fontWeight:700}}>Venue Name - Location</Text>
                            <View style={{flexDirection:'row',width:'80%',alignItems:'baseline' }}>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}>on </Text>
                            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:15,fontWeight:700}}> 06 july 24 </Text>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}> at </Text>
                            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:15,fontWeight:700}}> 12:15 PM </Text>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}> for </Text>
                            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:15,fontWeight:700}}> 7 </Text>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}>Guests</Text>
                            </View>
                            </View>
                        </View>
                </View>
                <View style={{gap:8}} >
                <Text style={styles.Heading}>Customer Details</Text>
                    <View style={styles.card}>
                        <View style={styles.package}>
                            <View style={{gap:4,width:'60%'}}>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:700}}>Shankar Pawar</Text>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}>+91 8147113798 | shankar@gmail.com</Text>
                            </View>
                            <TouchableOpacity onPress={()=>setPopup(true)}>
                                <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:12,fontWeight:600}}>edit</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginHorizontal:10}}>
                        <Image source={icons.CheckBox}/>
                    </View>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400}}>I agree to the </Text>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:700,textDecorationLine:'underline'}} >Terms & Conditions</Text>
                          
                </View>
            </View>
      </ScrollView>
      <View style={{position:'absolute',bottom:10,width:'100%',paddingHorizontal:20,borderTopWidth:1,borderTopColor:'rgba(245, 237, 253, 0.1)'}}>
        < CustomButton onPress={handler} buttontitle="Continue"/>
      </View>
      <CustomerDetailsPopup Popup={Popup} setPopup={setPopup}/>
    </View>
  )
}

export default BookingDetailScreen

const styles = StyleSheet.create({
    Heading:{
        fontSize:18,
        fontWeight:700,
        color:'rgba(245, 237, 253, 1)',
    },
    card:{
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        borderRadius:8,
        minHeight:36,
        gap:12,
        padding:10,
        borderWidth:1,
        borderColor:'rgba(71, 71, 71, 1)'
    },
  package:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    gap:8
},
});