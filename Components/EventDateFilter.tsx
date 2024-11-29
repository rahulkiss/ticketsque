import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const EventDateFilter = () => {
    const [Select,setSelect] =useState('1')

    const handleChange = (value: string) => {
      setSelect(value); 
    };
  return (
    <View style={{height:25,width:321,gap:12,flexDirection:'row',marginTop:14}} >
   
    <Text onPress={() =>handleChange('1')}  style={{color:Select=='1'?'black':'#F5EDFD',width:56,height:24,borderRadius:18,backgroundColor:Select=='1'?'#D0A2F7':'#1B1B1B',textAlign:'center',fontSize:11,fontWeight:Select =='1'?700:400,paddingVertical:3.5,borderColor:'#474747',borderWidth:1 }}>
             Today
    </Text>
 
    <Text  onPress={() =>handleChange('2')} style={{color:Select=='2'?'black':'#F5EDFD',width:44,height:24,borderRadius:18,backgroundColor:Select=='2'?'#D0A2F7':'#1B1B1B',textAlign:'center',fontSize:11,fontWeight:Select =='2' ?700:400,paddingVertical:3.5,borderColor:'#474747',borderWidth:1 }} >
          All
    </Text>
    <Text onPress={() =>handleChange('3')}  style={{color:Select=='3'?'black':'#F5EDFD',width:101,height:24,borderRadius:18,backgroundColor:Select=='3'?'#D0A2F7':'#1B1B1B',textAlign:'center',fontSize:11,fontWeight:Select =='3' ?700:400,paddingVertical:3.5,borderColor:'#474747',borderWidth:1 }}>
          This Week
     </Text>
    <Text onPress={() =>handleChange('4')}  style={{color:Select=='4'?'black':'#F5EDFD',width:85,height:24,borderRadius:18,backgroundColor:Select=='4'?'#D0A2F7':'#1B1B1B',textAlign:'center',fontSize:11,fontWeight:Select =='4' ?700:400,paddingVertical:3.5,borderColor:'#474747',borderWidth:1 }}>
       Tommarow
    </Text>
   </View>
  )
}

export default EventDateFilter

const styles = StyleSheet.create({})