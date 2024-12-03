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

type TicketInfoPopupProps ={
    Popup : any;
    setPopup : any;
}

const TicketInfoPopup: React.FC<TicketInfoPopupProps> = ({Popup,setPopup}) => {
 
  

  return (
    <View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <View style={styles.modalOverlay}>

          <View style={{minHeight:200,width:360,backgroundColor:"#1B1B1B",borderRadius:21,gap:3}}>
            <View style={{paddingHorizontal:30,justifyContent: 'center',alignItems:'flex-end',marginTop:20}}>
                <TouchableOpacity onPress={()=>setPopup(false)}>
                <Image source={Imageassets.Xicon}/>
                </TouchableOpacity>
            </View>
            <View style={{height:'auto',marginHorizontal:20,gap:20,marginBottom:25}}>
                <View style={{gap:8}}>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Entry Fee </Text>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14}}>The entry fee is the fixed amount required for access to the premises, which cannot be redeemed.</Text>
                </View>
                <View style={{gap:8}}>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Fully Redeemable </Text>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14}}>The amount can be utilized to settle bills or can be redeemed for purchasing food and drinks within the premises.</Text>
                </View>
                <View style={{gap:8}}>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Partially Redeemable </Text>
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14}}>The amount includes a certain entry fee, and the remaining balance can be used to settle bills or redeemed for purchasing food and drinks within the premises.</Text>
                </View>

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

});

export default TicketInfoPopup;
