import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton';
import { TextInput } from 'react-native-gesture-handler';

type  EnterDetailScreenProps= {
    navigation: any;
  };
  const EnterDetailScreen: React.FC<EnterDetailScreenProps> = ({ navigation }) => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const handleButtonPress = () => {
        navigation.navigate('homescreen');
        };
   const prevScreen = () => {
            navigation.navigate('otpverifyscreen');
            };

            
  return (
    <View style={{flex: 1, backgroundColor:"#0D0D0D"}}>
    <View  style={styles.container}>
    <TouchableOpacity onPress={prevScreen}>
    <Text style={{fontSize:20,color:'#F5EDFD'}} >Enter your Details</Text>
    </TouchableOpacity>
          
     <View style={{marginTop:35, height:50}}>
     <TextInput
          style={styles.inputNumber}
          placeholder="Enter Your Name"
          placeholderTextColor="#F5EDFD"
          value={Name}
          onChangeText={setName}
          keyboardType="default"  
          autoCapitalize="words"
        />
      </View>
      <View style={{marginTop:20, height:50}}>
     <TextInput
          style={styles.inputNumber}
          placeholder="Enter Your E-Mail"
          placeholderTextColor="#F5EDFD"
          value={Email}
          onChangeText={setEmail}
          keyboardType="email-address" 
          autoCapitalize="none" 
          textContentType="emailAddress"
        />
      </View>

      

      <View style={{paddingTop:20}}>
      < CustomButton onPress={handleButtonPress} buttontitle="Continue" />
      </View>

    </View>
    </View>
  )
}

export default EnterDetailScreen

const styles = StyleSheet.create({

    container :{
        marginTop:100,
        margin:25
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
})