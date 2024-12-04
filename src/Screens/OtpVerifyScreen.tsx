import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../Components/CustomButton';
import { Imageassets } from '../../assets//images/image';


type  OtpVerifyScreenProps= {
  navigation: any;
};

const OtpVerifyScreen: React.FC<OtpVerifyScreenProps> = ({ navigation }) => {
  const [phoneOtp, setPhoneOtp] = useState('');
  const [seconds, setSeconds] = useState(30);
  
  useEffect(() => {
    if (seconds === 0) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [seconds]);

  const handleButtonPress = () => {
    navigation.navigate('enterdetailscreen');
    };
    const prevScreen = () => {
      navigation.navigate('Loginscreen');
      };
  return (
    <View style={{flex: 1, backgroundColor:"#0D0D0D"}}>
    <View  style={styles.container}>
    <View style={{flexDirection:'row',alignItems:'center',gap:8,height:27}}>
    <TouchableOpacity onPress={prevScreen}>
        <Image style={{height:24,width:24}} source={Imageassets.BackArrowIcon} />
       </TouchableOpacity>    
           <Text style={{fontSize:20,color:'#F5EDFD'}} >Verify the OTP sent to</Text>
      </View>

    
    
          
     <View style={{marginTop:35, height:50}}>
     <TextInput
          style={styles.inputNumber}
          placeholder="Enter 4 Digit OTP sent to your number"
          placeholderTextColor="#F5EDFD"
          value={phoneOtp}
          onChangeText={setPhoneOtp}
          keyboardType="number-pad" 
          maxLength={4}  
          
        />
      </View>

      <View style ={styles.timingcontainer}>
        <Text style ={{color:'white',}}>00 : {seconds} Sce</Text>
        <Text  style ={{color:'white',}}>Resend OTP ?</Text>
      </View>

      <View style ={styles.iconcontainer}>
         <Image style={{width:87}} source={Imageassets.line}/>
        <Text style ={{color:'white',}}>OR</Text>
        <Image style={{width:87}} source={Imageassets.line}/>
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