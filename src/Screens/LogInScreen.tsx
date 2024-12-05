import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../Components/CustomButton';
import api from '../services/api.interceptor';
import {EventsResponse} from '../interfaces/events.interfaces';
import { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser, updateUser } from '../Store/Actions/UserActions';
import BackButton from "../../assets/svg/BackButton.svg";

type  LogInScreenProps= {
  navigation: any;
};


const LogInScreen: React.FC<LogInScreenProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const dispatch = useDispatch();
    
    
    const handleButtonPress = () => {
      getUserData();
      console.log(phoneNumber)
      dispatch(updateUser({phoneNo:phoneNumber}));

      };

      const getUserData = async () => {
        try {
          setIsLoader(true);
          const requestBody = {
            "mobile":phoneNumber.trim()
        };
          const response = (await api.post('/service/accounts_service/v1/no_auth/customer',requestBody));
          setIsLoader(false);
          if(response?.data){
            console.log("response?.data",response?.data);
            navigation.navigate('otpverifyscreen');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      
      const handleInputChange = (text: string) => {
        setPhoneNumber(text);  
    };

  return (
    <View style={{flex: 1, backgroundColor:"#0D0D0D"}}>

    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',gap:8,height:27}}>
          <BackButton/>
          <Text style={{fontSize:20,color:'#F5EDFD'}} >Login/ SignUp to TicketsQue</Text>
      </View>

    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputCode}
          value="+91"
          editable={false} 
          selectTextOnFocus={false} 
        />
        
        <TextInput
         onChangeText={handleInputChange}
          style={styles.inputNumber}
          placeholder="Enter your mobile Number"
          placeholderTextColor="#F5EDFD"
          value={phoneNumber}
          keyboardType="numeric" 
          maxLength={10} 
        />
      </View>
         <View style={{paddingTop:20}}>
         < CustomButton onPress={handleButtonPress} buttontitle="Get OTP" />
         </View>
         
     
         <View style={styles.textcontainer}>
      <View style={styles.textWrapper}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>By continuing, I agree to </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.text}> & </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Privacy policy</Text>
        </TouchableOpacity>
      </View>
    </View>

    </View>
      

    </View>
  )
}

export default LogInScreen;

const styles = StyleSheet.create({
    container :{
        marginTop:100,
        margin:25,
    }, inputContainer: {
        marginTop:35,
        flexDirection: 'row', // Display inputs in a row
        alignItems: 'center', // Align inputs vertically
      },
      inputCode: {
        width: 60, // Width for the country code input
        height: 50,
        borderColor: '#474747',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 14,
        textAlign: 'center', // Center the +91 in the input
        backgroundColor: '#1B1B1B', // Light background color
        marginRight: 10,
        color: '#F5EDFD',
        
        
      },
      inputNumber: {
        flex: 1, // Take up the remaining space
        height: 50,
        borderColor: '#474747',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 14,
        backgroundColor: '#1B1B1B',
        color: '#F5EDFD'
      },
      textcontainer: {
        
        marginTop: 25,
      },
      textWrapper: {
       
        alignItems: 'baseline',
      },
      text: {
        fontSize: 14,
        color: '#F5EDFD',
    
      },
      link: {
        textDecorationLine: 'underline',
        color: '#F5EDFD',
        fontSize: 14,
          // Fine-tune the position by adjusting padding
      },
      image: {
        width: 200, // Set the width of the image
        height: 200, // Set the height of the image
        resizeMode: 'contain', // Makes sure the image is scaled without distortion
      },
})

function useAppSelector(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}

