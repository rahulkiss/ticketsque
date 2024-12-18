import { StyleSheet, Text, View,Image,ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../assets/css/style'
import { icons } from '../../assets/images/image'
import CustomButton from '../Components/CustomButton'
import EventAvailableScroll from '../Components/EventAvailableScroll'
import CustomerDetailsPopup from '../provider/CustemerDetailsPopup'
import BackButton from '../../assets/svg/BackButton.svg'
import CheckBox from '../../assets/svg/CheckBox.svg'
type EventPaymentScreenprops={
    navigation: any;
}
const EventPaymentScreen:React.FC<EventPaymentScreenprops> = ({navigation}) => {
    const [Popup,setPopup] = useState(false)
        const handler=() =>{
            navigation.navigate('bookingConfirmed')
        };
       
  return (
    <View style={{backgroundColor:'black',flex:1 ,paddingBottom:80}}>
        <ScrollView>
            <View style={[styles.maincontainer,{gap:16}]}>
                <View style={[styles.card,{padding:20}]}>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{ navigation.goBack();  }}><BackButton/></TouchableOpacity> 
                        <Text style={styles.Heading}>  Event Name</Text>
                    </View>
                    <Text style={styles.Text}>May 15 Thursday | Drave Koramangala  |  500 Onwards</Text>
                </View>
                <View style={{gap:8}} >
                <Text style={styles.Heading}>Customer Details</Text>
                    <View style={styles.card}>
                        <View style={styles.package}>
                            <View style={{gap:4,width:'60%'}}>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:700}}>Shankar Pawar</Text>
                            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400}}>+91 8147113798 | shankar@gmail.com</Text>
                            </View>
                                <TouchableOpacity onPress={()=>setPopup(true)}>
                                <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:12,fontWeight:600}}>edit</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{gap:8}} >
                    <Text style={styles.Heading}>Discounts/ Promo Codes</Text>

                    <View style={styles.package}>
                    <View style={[styles.card,{paddingHorizontal:10,padding:1,width:'70%'}]}>
                        <TextInput style={[styles.Text,{fontSize:14}]} placeholder='Enter Discount Code' placeholderTextColor={'rgba(245, 237, 253, 0.5)'}></TextInput>
                    </View>    
                    <View style={[styles.card,{paddingHorizontal:10,borderColor:'rgba(208, 162, 247, 1)',width:'25%',backgroundColor:'rgba(208, 162, 247, 1)'}]}>
                        <Text style={[styles.Heading,{fontSize:16,textAlign:'center', color:'rgba(13, 13, 13, 1)'}]}>Apply</Text>
                    </View>
                    </View>
                    
                </View>
                    </View>
                     
                    <View>
                    <EventAvailableScroll/>
                    </View>
                    <View style={[styles.maincontainer,{gap:16}]}>
                        
                <View style={{gap:16}}>
                <Text style={styles.Heading}>Order Details</Text>
                <View style={styles.card}>
        <View style={{gap:8}} >
            <View style={[styles.card,{borderBottomWidth:1,borderWidth:0,borderRadius:0}]}>
                <View style={styles.package}>
                  <View style={{width:'40%'}}>
                  <Text style={[styles.Text,{fontSize:14}]}>Tickets</Text>
                  </View>
                  <View style={{width:'53%'}}>
                        <View style={styles.package}>
                            <Text style={[styles.Text,{fontSize:14}]}> QTY</Text>
                            <Text style={[styles.Text,{fontSize:14}]}>Sub Total</Text>
                        </View>
                  </View>
                    </View>
            </View>
          
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={[styles.Text,{fontSize:14}]}>Ladies</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={[styles.Text,{fontSize:14}]}>2</Text>
                        <Text style={[styles.Text,{fontSize:14}]}>₹ 2000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={[styles.Text,{fontSize:14}]}>Couple</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={[styles.Text,{fontSize:14}]}>1</Text>
                        <Text style={[styles.Text,{fontSize:14}]}>₹ 3000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={[styles.Text,{fontSize:14}]}>Stag</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={[styles.Text,{fontSize:14}]}>2</Text>
                        <Text style={[styles.Text,{fontSize:14}]}>₹ 1000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View>          
            <View style={{padding:10,borderBottomWidth:1,borderTopWidth:1,borderBlockColor:'rgba(255, 255, 255, 0.1)'}}>
            <View style={[styles.package,{marginVertical:6}]}>
                <Text style={[styles.Text,{fontSize:14}]}>Discount Applied</Text>
                <Text style={[styles.Text,{fontSize:14}]}>-1500</Text>
                </View>
                </View>
            <View style={{padding:10,borderBottomWidth:1,borderBlockColor:'rgba(255, 255, 255, 0.1)'}}>
            <View style={[styles.package,{marginVertical:6}]}>
                <Text style={[styles.Text,{fontSize:14}]}>Sub Total</Text>
                <Text style={[styles.Text,{fontSize:14}]}>₹2000.00</Text>
                </View>
                </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={[styles.Text,{fontSize:14}]}>Platform Fee</Text>
                <Text style={[styles.Text,{fontSize:14}]}>₹300.00</Text>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={[styles.Text,{fontSize:14}]}>Integrated GST @18% </Text>
                <Text style={[styles.Text,{fontSize:14}]}>₹180.00</Text>
                </View>
            </View>
          </View>
          <View style={{borderBottomWidth:1,borderTopWidth:1, borderColor:'rgba(245, 237, 253, 0.25)'}}>
          <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={[styles.Text,{fontSize:14}]}>Total Paid Amount</Text>
                <Text style={[styles.Text,{fontSize:14}]}>₹2480.00</Text>
            </View>
          </View>
            </View>
        </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    {/* <View style={{marginHorizontal:10}}>
                        <CheckBox/>
                    </View> */}
                    <View style={{marginHorizontal:10}}>
                        <View style={{height:15,width:15,borderColor:'rgba(208, 162, 247, 1)',borderWidth:2}}>

                        </View>
                    </View>
                        
                    <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400}}>I agree to the </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Tearms & Conditions')}><Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:700,textDecorationLine:'underline'}} >Terms & Conditions</Text></TouchableOpacity>   
                          
                </View>
                </View>
            </View>
        </ScrollView>
        <View style={styles.bottomTab}>
        < CustomButton onPress={handler} buttontitle="Proceed To Pay"/>
        </View>
        <CustomerDetailsPopup Popup={Popup} setPopup={setPopup}/>
    </View>
  )}

export default EventPaymentScreen

