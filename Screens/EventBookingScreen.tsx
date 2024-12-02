import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import styles from '../css/style'
import { icons } from '../assert/image/image'
import CustomButton from '../Components/CustomButton'

type EventBookingScreenProps = {
    navigation: any;
};
const EventBookingScreen:React.FC<EventBookingScreenProps> = ({navigation}) => {
    const handler =()=>{
        navigation.navigate('choose Ticket')
      };
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <ScrollView>
            <View style={styles.maincontainer}>
                <View style={[styles.card,{padding:20}]}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={icons.BackArrow}/>
                        <Text style={styles.Heading}>  Event Name</Text>
                    </View>
                    <Text style={styles.Text}>May 15 Thursday | Drave Koramangala  |  500 Onwards</Text>
                </View>
                <View style={{gap:16}}>
                    <Text style={styles.Heading}>Choose Slots</Text>
                    <View style={{gap:8}}>
                    <Text style={styles.Heading}>24/06/2016</Text>
                    <View style={styles.card}>
                        <View style={[styles.package,{margin:10,width:'88%'}]}>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={{gap:8}}>
                    <Text style={styles.Heading}>24/06/2016</Text>
                    <View style={styles.card}>
                        <View style={[styles.package,{margin:10,width:'88%'}]}>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                            <View style={styles.slot}>
                            <Text style={styles.Text}>Slot Name 1</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={styles.bottomTab}>
            <View style={[styles.package,{marginTop:10}]}>
                <Text style={[styles.Text,{fontWeight:600}]}>Total Amount  : 5000 </Text>
                <Text style={[styles.Text,{fontWeight:600}]}>Total People : 06 </Text>
            </View>
                <CustomButton onPress={handler} buttontitle='Continue'/>
        </View>
    </View>
  )
}

export default EventBookingScreen
