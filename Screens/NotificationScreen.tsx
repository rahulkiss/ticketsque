import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const NotificationScreen = () => {
    
  return (
    <View style={{backgroundColor:'#0D0D0D',flex:1}}>
      <View style={styles.frame1}>
        <View style={styles.InnerFrame}>
            <Text style={styles.InnerHead}>Event Booking Successful</Text>
            <Text style={styles.Innertext}>Your booking for the Event Name has been completed, Visit My Tickets</Text>
        </View>
        <View style={styles.InnerFrame}>
            <Text style={styles.InnerHead}>10% OFF </Text>
            <Text style={styles.Innertext}>Your have a special discount for the Event Name</Text>
        </View>
        <View style={styles.InnerFrame}>
            <Text style={styles.InnerHead}>Reservation Confirmed</Text>
            <Text style={styles.Innertext}>Your have booked a table for 4 people at Venue Name</Text>
        </View>
        <View style={styles.InnerFrame}>
            <Text style={styles.InnerHead}>Continue Booking</Text>
            <Text style={styles.Innertext}>Your have been trying to book a ticket for the Event Name</Text>
        </View>

      </View>
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
frame1:{
    height: 292,
    margin:20,
    gap: 12,
},

InnerFrame:{
    backgroundColor:'#1B1B1B',
    height:64,
    color:'#1B1B1B',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#474747',
    padding:10,
},
Innertext:{
    height:14,
    fontWeight:400,
    lineHeight:13,
    fontSize:10,
    color:'#F5EDFD',
    marginTop:8,
},

InnerHead:{
 height:22,
 fontWeight:600,
 fontSize:16,
 color:'#D0A2F7',
lineHeight:21,
},
});