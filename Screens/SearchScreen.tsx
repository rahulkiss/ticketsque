import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../Components/Search'

const SearchScreen = () => {
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
     <Search SearchTitle="Search for events, Venues, Artists" />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})