import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../Components/Search'
import NameBar from '../provider/NameBar'

const SearchScreen = () => {
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
            <View style={{marginTop:10}}>
          <NameBar name='Search'/>
      </View>
     <Search SearchTitle="Search for events, Venues, Artists" />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})