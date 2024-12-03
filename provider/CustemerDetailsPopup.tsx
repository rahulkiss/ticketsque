import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Imageassets } from '../assets/images/image';
import { TextInput } from 'react-native-gesture-handler';

type CustomerDetailsPopupProps ={
    Popup : any;
    setPopup : any;
}

const CustomerDetailsPopup: React.FC<CustomerDetailsPopupProps> = ({Popup,setPopup}) => {
  const [Name,setName] =useState('')
  const [Email,setEmail] =useState('')
  const [phoneNumber,setphoneNumber] =useState('')
  return (
    <View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <View style={styles.modalOverlay}>

          <View style={{height:329,width:360,backgroundColor:"#1B1B1B",borderTopStartRadius:21,borderTopRightRadius:21,gap:12,position:'absolute',bottom:0}}>
            <View style={{height:52.75,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderBottomColor:'rgba(255, 255, 255, 0.25)',borderBottomWidth:0.6}}>
                <Text style={{color:'#F5EDFD',fontSize:20,fontWeight:800}}>Customer Details</Text>
                <TouchableOpacity onPress={()=>setPopup(false)}>
                <Image source={Imageassets.Xicon}/>
                </TouchableOpacity>
            </View>
                 <View style={{minHeight:177,marginHorizontal:10,gap:12}}>
                 <View style={{height:44}}>
                  <TextInput
                       style={styles.inputName}
                       placeholder="Enter Your Name"
                       placeholderTextColor="rgba(245, 237, 253, 0.5)"
                       value={Name}
                       onChangeText={setName}
                       keyboardType="default"  
                       autoCapitalize="words"
                     />
                     </View >
                     <View style={styles.inputContainer}>
                                  <TextInput
                                    style={styles.inputCode}
                                    value="+91"
                                    editable={false} 
                                    selectTextOnFocus={false} 
                                  />
                                  
                                  <TextInput
                                    style={styles.inputNumber}
                                    placeholder="Enter your mobile Number"
                                    placeholderTextColor="rgba(245, 237, 253, 0.5)"
                                    value={phoneNumber}
                                    onChangeText={setphoneNumber}
                                    keyboardType="numeric" 
                                    maxLength={10} 
                                  />
                          </View>

                     <View style={{height:44}}>
                       <TextInput
                       style={styles.inputName}
                       placeholder="Enter Your E-mail Address"
                       placeholderTextColor="rgba(245, 237, 253, 0.5)"
                       value={Email}
                       onChangeText={setEmail}
                       keyboardType="default"  
                       autoCapitalize="words"
                     />
                     </View >
                     <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}>The ticket will be sent to above mentioned phone & e-mail </Text>
                 </View>

            <View style={{height:62,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderTopColor:'rgba(255, 255, 255, 0.25)',borderTopWidth:0.6}}>
                  <TouchableOpacity style={{borderColor:'rgba(208, 162, 247, 1)',width:76,height:34,borderRadius:25,borderWidth:1,justifyContent:'center'}}>
                    <Text style={{color:'rgba(208, 162, 247, 1)',textAlign:'center',fontSize:14,fontWeight:700}} >Cancle</Text>
                    </TouchableOpacity>
                    
                   
                    <TouchableOpacity style={{backgroundColor:'rgba(208, 162, 247, 1)',width:84,height:34,borderRadius:25,borderWidth:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:14,fontWeight:700,color:'rgba(13, 13, 13, 1)'}} >Confirm</Text>
                    </TouchableOpacity>

            </View>
            
            
          </View>
          
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({

  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  inputName: {
    flex: 1, // Take up the remaining space
    height: 44,
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 14,
    backgroundColor: '#1B1B1B',
    color: '#F5EDFD'
  },
  inputContainer: {
    flexDirection: 'row', // Display inputs in a row
    alignItems: 'center', // Align inputs vertically
  },
  inputCode: {
    width: 60, // Width for the country code input
    height: 44,
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 14,
    textAlign: 'center', // Center the +91 in the input
    backgroundColor: '#1B1B1B', // Light background color
    marginRight: 10,
    color: 'rgba(245, 237, 253, 0.5)',
  },
  inputNumber: {
    flex: 1, // Take up the remaining space
    height: 44,
    borderColor: '#474747',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 14,
    backgroundColor: '#1B1B1B',
    color: '#F5EDFD'
  },

});

export default CustomerDetailsPopup;
