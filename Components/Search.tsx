import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { icons } from '../assert/image/image';

type searchprops={
    SearchTitle: string;

}
const Search = (props:searchprops) => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.search} placeholder={props.SearchTitle} placeholderTextColor={'white'}></TextInput>
      <View >
      <Image source={icons.searchicon} style={{tintColor:'white'}} />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    box: {
        marginTop:20,
        marginHorizontal:20,
        height:48,
        borderRadius:24,
        backgroundColor:'#1B1B1B',
        borderWidth:2,
        borderColor:'rgba(255, 255, 255, 0.25)',
        paddingHorizontal:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    search: {
        color:'white',
        fontWeight:600,
        fontSize:14,
        lineHeight:24,

    },
})