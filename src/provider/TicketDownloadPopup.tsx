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
import { Imageassets } from '../../assets//images/image';

type TicketDownloadPopupProps ={
    Popup : any;
    setPopup : any;
}

const TicketDownloadPopup: React.FC<TicketDownloadPopupProps> = ({Popup,setPopup}) => {
  
  return (
    <View>
    
      <Modal
        
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <TouchableOpacity onPress={()=>setPopup(false)}  style={styles.modalOverlay}>

          <View style={{backgroundColor:"rgba(13, 13, 13, 0.4)",borderColor:'rgba(255, 255, 255, 0.25)',borderWidth:1,borderRadius:8,height:104,position:'absolute',top:120,right:30,gap:8,padding:20}}>
                  <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:20,fontWeight:400,textAlign:'right'}}>Download Ticket</Text>
                  <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:20,fontWeight:400,textAlign:'right'}}>Resend Ticket</Text>
          </View>
          
        </TouchableOpacity>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({

  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

});

export default TicketDownloadPopup;
