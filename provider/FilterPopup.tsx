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
   const [ShowCategory,setShowCategory] = useState(true)
   const [ShowPlace1,setShowPlace1] = useState(true)
   const [ShowPlace2,setShowPlace2] = useState(false)
   const [ShowPlace3,setShowPlace3] = useState(false)

  return (
    <View>
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={Popup}
        // onRequestClose={() => setPopup(false)} 
      >
        <View style={styles.modalOverlay}>

          <View style={{minHeight:453,width:360,backgroundColor:"#1B1B1B",borderTopStartRadius:21,borderTopRightRadius:21,gap:12,position:'absolute',bottom:0}}>
            <View style={{height:52.75,paddingHorizontal:10,marginHorizontal:8,justifyContent: 'space-between',flexDirection:'row',alignItems: 'center',borderBottomColor:'rgba(255, 255, 255, 0.25)',borderBottomWidth:0.6}}>
                <Text style={{color:'#F5EDFD',fontSize:20,fontWeight:800}}>Filters</Text>
                <TouchableOpacity onPress={()=>setPopup(false)}>
                <Image source={Imageassets.Xicon}/>
                </TouchableOpacity>
            </View>
   <View style={{minHeight:301,marginHorizontal:10,gap:16}}>

  <View style={{height:'auto',paddingHorizontal:15,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)',borderRadius:8}}>
       <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:8,}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Categores</Text>
        {ShowCategory && <TouchableOpacity onPress={()=>setShowCategory(false)}><Image source={Imageassets.ArrowDownIcon}/></TouchableOpacity>}  
        {!ShowCategory&& <TouchableOpacity onPress={()=>setShowCategory(true)}><Image source={Imageassets.ArrowUpIcon}/></TouchableOpacity>} 
       </View>
       {ShowCategory &&
         <View>
          <View style={{gap:9,flexDirection:'row',flexWrap:'wrap',paddingBottom:15}}>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Dj</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Night Life</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Travel</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Plays</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Music</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Comedy Show</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Trek & Adventure</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Sports</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Movies</Text></View>

                 </View>
         </View>
         }
       </View>

       <View style={{height:'auto',paddingHorizontal:15,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)',borderRadius:8}}>
       <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:8}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Places</Text>
        {ShowPlace1 && <TouchableOpacity onPress={()=>setShowPlace1(false)}><Image source={Imageassets.ArrowDownIcon}/></TouchableOpacity>}  
        {!ShowPlace1&& <TouchableOpacity onPress={()=>setShowPlace1(true)}><Image source={Imageassets.ArrowUpIcon}/></TouchableOpacity>} 
       </View>
       {ShowPlace1 &&
         <View>
          <View style={{gap:9,flexDirection:'row',flexWrap:'wrap',paddingBottom:15,paddingRight:40}}>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Dj</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Night Life</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Travel</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Plays</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Music</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Comedy Show</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Trek & Adventure</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Sports</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Movies</Text></View>

                 </View>
         </View>
         }
       </View>

       <View style={{height:'auto',paddingHorizontal:15,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)',borderRadius:8}}>
       <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:8}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Places</Text>
        {ShowPlace2 && <TouchableOpacity onPress={()=>setShowPlace2(false)}><Image source={Imageassets.ArrowDownIcon}/></TouchableOpacity>}  
        {!ShowPlace2&& <TouchableOpacity onPress={()=>setShowPlace2(true)}><Image source={Imageassets.ArrowUpIcon}/></TouchableOpacity>} 
       </View>
       {ShowPlace2 &&
         <View>
          <View style={{gap:9,flexDirection:'row',flexWrap:'wrap',paddingBottom:15,paddingRight:40}}>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Dj</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Night Life</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Travel</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Plays</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Music</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Comedy Show</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Trek & Adventure</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Sports</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Movies</Text></View>

                 </View>

         </View>
         }
       </View>

       <View style={{height:'auto',paddingHorizontal:15,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)',borderRadius:8}}>
       <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:8}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Places</Text>
        {ShowPlace3 && <TouchableOpacity onPress={()=>setShowPlace3(false)}><Image source={Imageassets.ArrowDownIcon}/></TouchableOpacity>}  
        {!ShowPlace3&& <TouchableOpacity onPress={()=>setShowPlace3(true)}><Image source={Imageassets.ArrowUpIcon}/></TouchableOpacity>} 
       </View>
       {ShowPlace3 &&
         <View>
          <View style={{gap:9,flexDirection:'row',flexWrap:'wrap',paddingBottom:15,paddingRight:40}}>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Dj</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Night Life</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Travel</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Plays</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Music</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Comedy Show</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Trek & Adventure</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Sports</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'rgba(71, 71, 71,0.30)',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:40,textAlign:'center'}}>Movies</Text></View>

                 </View>

         </View>
         }
       </View>


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
