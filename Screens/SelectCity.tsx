import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Search from '../Components/Search'
import { icons } from '../assert/image/image'
import { Imageassets } from '../assets/images/image'
import NameBar from '../provider/NameBar'

const SelectCity = () => {
    const [ShowNotFount,setShowNotFount]=useState(false)
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1}}>
            <View style={{marginTop:10}}>
          <NameBar name='Select City'/>
      </View>
        <Search SearchTitle="Search  your City" />
    <View style={styles.container}>

       <TouchableOpacity onPress={()=>setShowNotFount(true)} style={styles.Location}>
        <View style={{margin:10}}>
        <Image source={icons.locationicon} />
        </View>
        <Text style={{color:'#D0A2F7', fontSize:12}}>Detect My Location</Text>
       </TouchableOpacity>
         {ShowNotFount&&
         <View style={{gap:16}}>
            <Image style={{height:150,width:150,marginHorizontal:'auto'}} source={Imageassets.EventNotFount}/>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:18,fontWeight:800,textAlign:'center'}}>No Event Fount in Your Location</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:12,fontWeight:400,textAlign:'center'}}>It looks like there aren’t any events happening near you right now. But don’t miss out—explore exciting events in the following cities and discover something new!
            </Text>
         </View>}

       <View style={{height:285,gap:12}}>
        <Text style={{height:25, fontWeight:700, fontSize:18,color:'#F5EDFD'}}>All Available Cities</Text>
        <View style={styles.Cites}>
        <Text style={{color:'#D0A2F7', fontSize:12,}}>Bengaluru</Text>
        </View>
        <View style={styles.Cites}>
        <Text style={{color:'#D0A2F7', fontSize:12,}}>Mysore</Text>
        </View>
        <View style={styles.Cites}>
        <Text style={{color:'#D0A2F7', fontSize:12,}}>Goa</Text>
        </View>
        <View style={styles.Cites}>
        <Text style={{color:'#D0A2F7', fontSize:12,}}>Mumbai</Text>
        </View>
        <View style={styles.Cites}>
        <Text style={{color:'#D0A2F7', fontSize:12,}}>Noida</Text>
        </View>

       </View>

    </View>
    </View>
  )
}

export default SelectCity

const styles = StyleSheet.create({
    container: {
        height:413,
        margin:20,
        gap: 12,   
    },
    Location: {
        backgroundColor:'#1B1B1B',
        height:48,
        borderRadius:8,
        alignItems:'center',
        flexDirection:'row'
    },
    Cites:{
        backgroundColor:'#1B1B1B',
        height:40,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#474747',
        justifyContent:'center',
        padding:10,
       
    },

})