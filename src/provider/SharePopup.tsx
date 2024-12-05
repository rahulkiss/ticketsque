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
import Svg, { Path } from 'react-native-svg';
import Whatsapp from '../../assets/svg/Whatsapp_logo.svg'
import Facebook from '../../assets/svg/Facrbook_logo.svg'
import Twitter from '../../assets/svg/Twitter_logo.svg'
import Insta from '../../assets/svg/Insta_logo.svg'
import Close from '../../assets/svg/CloseIcon.svg'

type SharePopupProps ={
    Popup : any;
    setPopup : any;
}

const SharePopup: React.FC<SharePopupProps> = ({Popup,setPopup}) => {


  return (
    <View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <View style={styles.modalOverlay}>

          <View style={{height:232,width:360,backgroundColor:"#1B1B1B",borderTopStartRadius:21,borderTopRightRadius:21,gap:12,position:'absolute',bottom:0}}>
            <View style={{height:52.75,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderBottomColor:'rgba(255, 255, 255, 0.25)',borderBottomWidth:0.6}}>
                <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:20,fontWeight:800}}>Sharen Event</Text>
                <TouchableOpacity onPress={()=>setPopup(false)}>
                  <Close/>
                </TouchableOpacity>
            </View>

            <View style={{ height: 81, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
  <TouchableOpacity style={{ height: 69, width: 53, justifyContent: 'center', alignItems: 'center',gap:7.5 }}>
    <Whatsapp/>
    <Text style={{ fontSize: 10, fontWeight: '500', color: 'rgba(245, 237, 253, 1)', textAlign: 'center' }}>WhatsApp</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{ height: 69, width: 53, justifyContent: 'center', alignItems: 'center',gap:7.5 }}>
    <Facebook/>
    <Text style={{ fontSize: 10, fontWeight: '500', color: 'rgba(245, 237, 253, 1)', textAlign: 'center' }}>Facebook</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{ height: 69, width: 53, justifyContent: 'center', alignItems: 'center',gap:7.5 }}>
    <View style={{ width: 46, height: 47.22 }}>
      <Twitter />
    </View>
    <Text style={{ fontSize: 10, fontWeight: '500', color: 'rgba(245, 237, 253, 1)', textAlign: 'center' }}>Twitter</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{ height: 69, width: 53, justifyContent: 'center', alignItems: 'center',gap:7.5 }}>
    <Insta />
    <Text style={{ fontSize: 10, fontWeight: '500', color: 'rgba(245, 237, 253, 1)', textAlign: 'center' }}>Feed</Text>
  </TouchableOpacity>
</View>

           

                  <View style={{height:60,marginHorizontal:8,justifyContent: 'center',backgroundColor:'black',borderColor:'rgba(71, 71, 71, 1)',borderWidth:1,borderRadius:9,alignItems:'center'}}>
                           <Text style={{height:43,width:72,fontSize:16,fontWeight:400,lineHeight:43,color:'rgba(245, 237, 253, 1)'}}>Copy Link</Text>
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
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },

});

export default SharePopup;
