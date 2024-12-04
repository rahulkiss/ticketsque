import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { icons } from '../../assets/images/image'

const SupportScreen = () => {
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
        <View style={{margin:20,height:622,gap:33}}>
            <View style={{alignItems:'center',}}>
            <Image source={icons.Support}/>
            </View>
            <View style={{height:421,gap:12}}>
                <View style={{height:67,gap:4,}}>
                    <Text style={styles.heading}>Contact Number</Text>
                    <View style={styles.Fram}>
                        <Text style={styles.text}>Display Support Number</Text>
                    </View>
                </View>
                <View style={{height:67,gap:4,}}>
                    <Text style={styles.heading}>Email Address</Text>
                    <View style={styles.Fram}>
                        <Text style={styles.text}>Display Support Email</Text>
                    </View>
                </View>
                <View style={{minHeight:67,gap:4,}}>
                    <Text style={styles.heading}>Address</Text>
                    <View style={styles.Fram}>
                        <Text style={{fontWeight:600,fontSize:14, color:'rgba(208, 162, 247, 1)'}}>TicketsQue Solutions  Pvt. Ltd.</Text>
                        <Text style={styles.text}>#291, Maha Ganapathi Nagar, 6th Phase, 1st Stage, Rajaji Nagar, Bengaluru - 10</Text>
                    </View>
                </View>
                <View style={{height:67,gap:4,}}>
                    <Text style={styles.heading}>For Business Enquires</Text>
                    <View style={styles.Fram}>
                        
                        <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400,textDecorationLine:'underline'} }>business.ticketsque.com</Text>
                    </View>
                </View>
                <View style={{height:67,gap:4,}}>
                    <Text style={styles.heading}>Follow Us On</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'68%',paddingTop:10}}>
                        <Image source={icons.insta}/>
                        <Image source={icons.facebook}/>
                        <Image source={icons.twitter}/>
                        <Image source={icons.linkedin}/>
                    </View>
                </View>
            </View>
        </View>

    </View>
  )
}

export default SupportScreen

const styles = StyleSheet.create({
    Fram:{
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        minHeight:44,
        borderRadius:8,
        borderColor:'rgba(255, 255, 255, 0.25)',
        padding:10
    },
    text:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:14,
        fontWeight:400,
    },
    heading:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:14,
        fontWeight:700,
    },
});