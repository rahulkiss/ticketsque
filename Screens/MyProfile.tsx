import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { icons } from '../assert/image/image'
import { TextInput } from 'react-native-gesture-handler'
import NameBar from '../provider/NameBar'



const MyProfile = () => {
  return (
<View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
        <View>
          <NameBar name='My Profile'/>
        </View>    
      <View style={styles.Fram}>
        <View style={{alignItems:'center',width:140,gap:8}}>
            <Image source={icons.profile}/>
            <View style={styles.photo}>
                <Text style={{color:'white',fontSize:12,}}>Upload Photo</Text>
            </View>
        </View>
                <View style={{height:364,width:'100%',gap:12}}>
                    <View style={{gap:4}}>
                        <Text style={styles.heading}>Name</Text>
                        <View style={styles.TextBox}>
                            <TextInput style={{fontSize:11,fontWeight:400,color:'rgba(245, 237, 253, 1)'}} placeholder='Enter Your Name' placeholderTextColor={'#F5EDFD'} ></TextInput>
                        </View>
                    </View>
                    <View style={{gap:4}}>
                    <Text style={styles.heading}>Phone Number</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between' }}>
                        <View style={{width:'27%',}}>
                        <View style={styles.TextBox}>
                                <Text style={styles.text}> +91</Text>
                        </View>
                        </View>
                        <View style={{width:'68%',}}>
                        <View style={styles.TextBox}>
                            <TextInput style={{fontSize:12,fontWeight:500,color:'rgba(245, 237, 253, 1)'}} placeholder='Enter Mobile Number' placeholderTextColor={'#F5EDFD'} ></TextInput>
                        </View>
                        </View>
                    </View>
                    </View>
                    <View style={{gap:4}}>
                        <Text style={styles.heading}>Email Address</Text>
                        <View style={styles.TextBox}>
                            <TextInput style={{fontSize:11,fontWeight:400,color:'rgba(245, 237, 253, 1)'}} placeholder='Enter E-mail Address' placeholderTextColor={'#F5EDFD'} ></TextInput>
                        </View>
                    </View>
                    <View style={{gap:4}}>
                        <Text style={styles.heading}>Gender</Text>
                        <View style={styles.TextBox}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',height:'79%' }}>
                            <View style={{backgroundColor:'black',width:'48%',borderRadius:8,justifyContent:'center'}}>
                                <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400,textAlign:'center'}}>Male</Text>
                            </View>
                            <View style={{width:'48%',borderRadius:8,justifyContent:'center'}}>
                                <Text style={{color:'rgba(245, 237, 253, 0.5)',fontSize:14,fontWeight:400,textAlign:'center'}}>female</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor:'rgba(208, 162, 247, 1)',height:44,borderRadius:8,borderColor:'rgba(255, 255, 255, 0.25)',justifyContent:'center',}}>
                                <Text style={{color:'rgba(13, 13, 13, 1)',fontSize:16,fontWeight:700,textAlign:'center'}}>Update</Text>
                    </View>
                </View>
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    Fram:{
        minHeight:500,
        backgroundColor:'#D4D4D41A',
        margin:20,
        padding:20,
        alignItems:'center',
        borderRadius:8,
    },
    text:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:12,
        fontWeight:400,
    },
    TextBox:{
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        height:44,
        borderRadius:8,
        borderColor:'rgba(255, 255, 255, 0.25)',
        justifyContent:'center',
        paddingHorizontal:10
    },
    photo:{
        backgroundColor:'#00000099',
        height:32, 
        borderRadius:4,
        width:'100%',
        alignItems:'center',
        borderColor:'#FFFFFF40',
        justifyContent:'center',
        borderWidth:1,
    },
    heading:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:14,
        fontWeight:700,
    },
});