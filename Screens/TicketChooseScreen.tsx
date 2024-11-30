import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import styles from '../css/style'
import { icons } from '../assert/image/image'
const TicketChooseScreen = () => {
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <View style={styles.maincontainer}>
        <View style={[styles.card,{padding:20}]}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={icons.BackArrow}/>
                        <Text style={styles.Heading}>  Event Name</Text>
                    </View>
                    <Text style={styles.Text}>May 15 Thursday | Drave Koramangala  |  500 Onwards</Text>
        </View>
        <View style={{gap:13}}>
            <Text style={styles.Heading}>Choose Tickets</Text>
            <View style={{gap:14}}>
                <View style={styles.card}>
                    <View style={styles.package}>
                        <View style={{gap:4}}>
                        <Text style={[styles.Text,{fontWeight:600}]}>Ladies</Text>
                        <Text style={[styles.Heading,{fontSize:15}]}>₹ 1000</Text>
                        <View style={[styles.package,{width:'70%'}]}>
                        <Text style={[styles.Text,{fontSize:10}]}>Permits 1 Lady | Fully-Redeemable </Text>
                        <Image source={icons.Iicon}/>
                        </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>

        </View>
    </View>
  )
}

export default TicketChooseScreen
