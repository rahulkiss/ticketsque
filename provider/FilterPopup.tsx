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

type FilterPopupProps ={
    Popup : any;
    setPopup : any;
}

const FilterPopup: React.FC<FilterPopupProps> = ({Popup,setPopup}) => {


  return (
    <View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <View style={styles.modalOverlay}>

          <View style={{height:453,width:360,backgroundColor:"#1B1B1B",borderTopStartRadius:21,borderTopRightRadius:21,gap:12,position:'absolute',bottom:0}}>
            <View style={{height:52.75,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderBottomColor:'rgba(255, 255, 255, 0.25)',borderBottomWidth:0.6}}>
                <Text style={{color:'#F5EDFD',fontSize:20,fontWeight:800}}>Filters</Text>
                <TouchableOpacity onPress={()=>setPopup(false)}>
                <Image source={Imageassets.Xicon}/>
                </TouchableOpacity>
            </View>
            <View style={{height:301,marginHorizontal:10,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)'}}>
            </View>

            <View style={{height:62,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderTopColor:'rgba(255, 255, 255, 0.25)',borderTopWidth:0.6}}>
                  <TouchableOpacity style={{borderColor:'rgba(208, 162, 247, 1)',width:76,height:34,borderRadius:25,borderWidth:1,justifyContent:'center'}}>
                    <Text style={{color:'rgba(208, 162, 247, 1)',textAlign:'center',fontSize:14,fontWeight:700}} >Cancle</Text>
                    </TouchableOpacity>
                    <View style={{width:206,height:34,justifyContent: 'space-between',flexDirection:'row'}}>
                    <Text style={{textAlign:'center',width:90,height:34,textAlignVertical:'center',color:"rgba(245, 237, 253, 1)",fontSize:14,fontWeight:700}} >Clear All</Text>
                    <TouchableOpacity style={{backgroundColor:'rgba(208, 162, 247, 1)',width:116,height:34,borderRadius:25,borderWidth:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:14,fontWeight:700,color:'rgba(13, 13, 13, 1)'}} >Apply Filters</Text>
                    </TouchableOpacity>

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

export default FilterPopup;
