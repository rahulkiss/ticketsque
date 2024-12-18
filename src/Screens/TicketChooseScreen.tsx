import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/style'
import { icons } from '../../assets/images/image'
import CustomButton from '../Components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import TicketInfoPopup from '../provider/TicketInfoPopup'
import BackButton from '../../assets/svg/BackButton.svg'
import Info from '../../assets/svg/InfoIcon.svg'
import DownIcon from '../../assets/svg/DownIcon.svg'

type TicketChooseScreenprops = {
    navigation: any;
    
};
const TicketChooseScreen:React.FC<TicketChooseScreenprops> = ({navigation}) => {
    const [Popup,setPopup] =useState(false)
    const handler = () => {
        navigation.navigate('eventpayment')
    };
  return (
    <>
    

    <View style={{backgroundColor:'black',flex:1}}>
        <View style={styles.maincontainer}>
        <View style={[styles.card,{padding:20}]}>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{ navigation.goBack();  }}><BackButton/></TouchableOpacity> 
                        <Text style={styles.Heading}>  Event Name</Text>
                    </View>
                    <Text style={styles.Text}>May 15 Thursday | Drave Koramangala  |  500 Onwards</Text>
        </View>
        <View style={{gap:13}}>
            <Text style={styles.Heading}>Choose Tickets</Text>
            <View style={{gap:14}}>
                <View style={[styles.card,{backgroundColor:'rgba(27, 27, 27, 1)'}]}>
                        <View style={{gap:4}}>
                            <View style={styles.package}>
                                <View>
                                <Text style={[styles.Text,{fontWeight:600}]}>Ladies</Text>
                                <Text style={[styles.Heading,{fontSize:15}]}>₹ 1000</Text>
                                </View>
                                <View style={[styles.card,{paddingHorizontal:20}]}>
                                    <Text style={[styles.Text,{fontWeight:600,fontSize:13}]}>Add</Text>
                                </View>
                            </View>
                        <View style={[styles.package,{width:'50%'}]}>
                          <View>
                            <Text style={[styles.Text,{fontSize:10}]}>Permits 1 Lady | Fully-Redeemable </Text>
                            </View> 
                           <TouchableOpacity  onPress={()=>setPopup(true)}> 
                            <Info/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={[styles.card,{backgroundColor:'rgba(27, 27, 27, 1)'}]}>
                        <View style={{gap:4}}>
                            <View style={styles.package}>
                                <View>
                                <Text style={[styles.Text,{fontWeight:600}]}>Ladies</Text>
                                <Text style={[styles.Heading,{fontSize:15}]}>₹ 1000</Text>
                                </View>
                                <View style={[styles.card,{paddingHorizontal:20}]}>
                                    <Text style={[styles.Text,{fontWeight:600,fontSize:13}]}>Add</Text>
                                </View>
                            </View>
                            <View style={styles.package}>  
                                <View style={[styles.package,{width:'35%'}]}>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>Entry Fee </Text>
                                <Info/>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>Details</Text>
                                <DownIcon/>
                            </View>
                            <View style={styles.package}>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600,color:'red'}]}>Ends in </Text>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>00H : 24M : 00S</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.card,{backgroundColor:'rgba(27, 27, 27, 1)'}]}>
                        <View style={{gap:4}}>
                            <View style={styles.package}>
                                <View>
                                <Text style={[styles.Text,{fontWeight:600}]}>Ladies</Text>
                                <Text style={[styles.Heading,{fontSize:15}]}>₹ 1000</Text>
                                </View>
                                <View style={[styles.card,{paddingHorizontal:20}]}>
                                    <Text style={[styles.Text,{fontWeight:600,fontSize:13}]}>Add</Text>
                                </View>
                            </View>
                            <View style={styles.package}>  
                                <View style={[styles.package,{width:'35%'}]}>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>Entry Fee </Text>
                                <Info/>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>Details</Text>
                                <DownIcon/>
                            </View>
                            <View style={styles.package}>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600,color:'red'}]}>Ends in </Text>
                                <Text style={[styles.Text,{fontSize:10,fontWeight:600}]}>00H : 24M : 00S</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>

        </View>

        <View style={styles.bottomTab}>
            <View style={[styles.package,{marginTop:10}]}>
                <Text style={[styles.Text,{fontWeight:600}]}>Total Amount  : 5000 </Text>
                <Text style={[styles.Text,{fontWeight:600}]}>Total People : 06 </Text>
            </View>
                <CustomButton onPress={handler} buttontitle='Continue'/>
        </View>
    </View>
    
    <TicketInfoPopup Popup={Popup} setPopup={setPopup}/>
    </>
  )
}

export default TicketChooseScreen
