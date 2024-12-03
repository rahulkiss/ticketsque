import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../assert/image/image'
import TabBar from '../provider/TabBar'
import TopNavBar from '../provider/TopNavBar'
type Profileprops={
    navigation: any;
}

const Profile:React.FC<Profileprops> = ({navigation}) => {
    
        const handler =(value:string)=>{
            navigation.navigate(value);
        };
  return (
    <>
    <TopNavBar/>
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
        <View style={{margin:20,gap:15,marginTop:'10%'}}>
            <View style={styles.container}>
                <View style={{height:43, margin:5,}}>
                    <Text style={{fontSize:20, color:'rgba(245, 237, 253, 1)',fontWeight:600}}>Hey! User</Text>
                        <View style={{height:16,flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{fontSize:12,color:'rgba(245, 237, 253, 1)',fontWeight:400,}}>Edit Profile</Text>
                            <Image source={icons.ArrowRight} style={{marginLeft:5}}/>
                        </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Loginscreen')} style={styles.Button}>
                <Text style={{fontWeight:700,fontSize:12,textAlign:'center'}}>Login/ Register</Text>
                </TouchableOpacity >
            </View>
            <TouchableOpacity onPress= {()=>handler("My Profile")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>My Profile</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>   
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("My Tickets")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>My Tickets</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>  
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("Support & Contact Us")}>
            <View style={styles.Fram}>
                    <Text style={styles.FramText}>Support & Contact Us</Text>
                    <View>
                        <Image source={icons.GoArrow} style={{width:30}}/>
                    </View>  
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("Support & Contact Us")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>Terms & Conditions</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>  
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("Support & Contact Us")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>Privacy Policy</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>  
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("Support & Contact Us")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>Refund & Cancellation Policy</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>  
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {()=>handler("Support & Contact Us")}>
            <View style={styles.Fram}>
                <Text style={styles.FramText}>Logout</Text>
                <View>
                    <Image source={icons.GoArrow} style={{width:30}}/>
                </View>  
            </View>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{fontSize:10,color:'rgba(245, 237, 253, 1)',fontWeight:600,}}>Copyright © 2024 </Text>
                <Text style={{fontSize:10,color:'rgba(208, 162, 247, 1)',fontWeight:700}}>TicketsQue Pvt. Ltd. </Text>
                <Text style={{fontSize:10,color:'rgba(245, 237, 253, 1)',fontWeight:600}}>All rights reserved</Text>
            </View>
        </View>
    </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        height:57,
        borderBottomWidth:1,
        borderColor:'rgba(255, 255, 255, 0.5)',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:1,
        alignItems:'center',
        
    },
    Button:{
        height:36,
        color:'rgba(0, 0, 0, 0.6)',
        backgroundColor:'rgba(208, 162, 247, 1)',
        borderRadius:18,
        width:'35%',
        justifyContent:'center',
    },
    Fram:{
        height:44,
        borderBottomWidth:1,
        borderColor:'rgba(255, 255, 255, 0.5)',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:1,
        alignItems:'center',
        gap:12,
    },
    FramText:{
        fontSize:16,
        fontWeight:600,
        color:'rgba(245, 237, 253, 1)',
        textAlign:'center',
    },
});