import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../Components/CustomButton';
import api from '../services/api.interceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineFade from '../../assets/svg/SingleLine .svg'
import BackButton from "../../assets/svg/BackButton.svg";


type  OtpVerifyScreenProps= {
  navigation: any;
};

const OtpVerifyScreen: React.FC<OtpVerifyScreenProps> = ({ navigation }) => {
  const [phoneOtp, setPhoneOtp] = useState('');
  const [seconds, setSeconds] = useState(30);
  const [phoneNumber, setphoneNumber] = useState('');
  

  useEffect(() => {
    if (seconds === 0) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const getPhoneNumber = async () => {
    try {
      const value = await AsyncStorage.getItem('user-phonenumber');
      if (value !== null) {
        setphoneNumber(value)
      }
    } catch (e) {
      console.log(e); 
    }
  };

  const setUserData = async (userData:any) => {
    try {
      await AsyncStorage.setItem('user-details',userData.toString());
      await AsyncStorage.setItem('auth-token',userData?.token);
    } catch (e) {
      console.log(e); 
    }
  };

  const getUserData = async () => {
    try {
      const requestBody = {
        "otp": phoneOtp.trim(),
        "user": phoneNumber.trim()
    };
    console.log(requestBody,"resssdd");
      const response = (await api.post('/service/accounts_service/v1/no_auth/sign-in',requestBody));
     
      if(response?.data){
        await setUserData(response?.data?.payload);
        navigation.navigate('homescreen');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

useEffect(()=>{
  getPhoneNumber();
},[])

  const handleInputChange = (text: string) => {
    setPhoneOtp(text);
    
    };

  const handleButtonPress = () =>{
      getUserData()
    }

 const prevScreen = () => {
      navigation.navigate('Loginscreen');
      };

  return (
    <View style={{flex: 1, backgroundColor:"#0D0D0D"}}>
    <View  style={styles.container}>
    <View style={{flexDirection:'row',alignItems:'center',gap:8,height:27}}>
    <TouchableOpacity onPress={prevScreen}>
      <BackButton/>
       </TouchableOpacity>    
           <Text style={{fontSize:20,color:'#F5EDFD'}} >Verify the OTP sent to</Text>
      </View>

    
    
          
     <View style={{marginTop:35, height:50}}>
     <TextInput
          onChangeText={handleInputChange}
          style={styles.inputNumber}
          placeholder="Enter 4 Digit OTP sent to your number"
          placeholderTextColor="#F5EDFD"
          value={phoneOtp}
          keyboardType="number-pad" 
          maxLength={4}  
          
        />
      </View>

      <View style ={styles.timingcontainer}>
        <Text style ={{color:seconds == 0?'red':'white',}}>00 : {seconds} Sce</Text>
        <Text  style ={{color:'white',}}>Resend OTP ?</Text>
      </View>

      <View style ={styles.iconcontainer}>
        <LineFade/>
        <Text style ={{color:'white',}}>OR</Text>
        <LineFade/>
      </View>
      <View style ={{}}>
        <Text style ={{color:'white',textAlign:'center'}}>Send OTP on WhatsApp</Text>
      </View>
      <View style={{paddingTop:20}}>
      < CustomButton onPress={handleButtonPress} buttontitle="Continue" />
      </View>
    </View>
    </View>
  )
}

export default OtpVerifyScreen

const styles = StyleSheet.create({
  container :{
    marginTop:100,
    margin:25
},
inputNumber: {
  flex: 1, 
  height: 50,
  borderColor: '#474747',
  borderWidth: 1,
  borderRadius: 10,
  paddingLeft: 10,
  fontSize: 14,
  backgroundColor: '#1B1B1B',
  color: '#F5EDFD'
},
timingcontainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:10,
},
iconcontainer:{
  width:'100%',
  marginVertical:15,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  gap:8
 
}
})