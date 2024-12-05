import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../assets/images/image'
import NameBar from '../provider/NameBar'
import TicketDownloadPopup from '../provider/TicketDownloadPopup'
import ThreeDot from '../../assets/svg/ThreeDot.svg'
const TicketDetailsScreen = () => {
  const [Popup,setPopup] = useState(false)
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1,}}> 
    <ScrollView>
    <View>
          <NameBar name='My Tickets' />
      </View>
    <View style={{margin:20,gap:16,marginBottom:60 }}>
      <View style={styles.card}>
        
        <View style={{minHeight:233,gap:8}}>
          
          <View style={{flexDirection:'row',justifyContent:'space-between', margin:10}}>
            <View style={{gap:8}}>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:18,fontWeight:700}}>Event Name</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:12,fontWeight:500,}}>TOCA, Koramangala</Text>
            </View>
             <TouchableOpacity onPress={()=>setPopup(true)}><ThreeDot/></TouchableOpacity>
          </View>
          <View >    
          <Image source={icons.ticket} style={{width:'100%',}}/>
          </View>
        
      </View>
      <View >
      <Image source={icons.Line} style={{width:'99%'}}/> 
      </View>     
     <View style={{minHeight:105, flexDirection:'row'}}>
      <Image source={icons.Qr}/>
      <View style={styles.Details}>
          <View>
            <Text style={styles.headding}>Name</Text>
            <Text style={styles.values}>Basavaraddi Mulimani</Text>
          </View>
          <View>
            <Text style={styles.headding}>Ticket ID</Text>
            <Text style={styles.values}>#123456</Text>
          </View>
      <View>

      <Text style={styles.headding}>Admit</Text>            
        <View style={styles.package}>
                      <Text style={styles.packageText}>04</Text>
                      <Text style={styles.packageText}>|</Text>
                      <View style={styles.package}>
                          <View style={styles.box}>
                              <Text style={{fontSize:8,fontWeight:500,color:'rgba(245, 237, 253, 1)'}}>1 × Package name</Text>
                          </View>
                          <View style={styles.box}>
                              <Text style={{fontSize:8,fontWeight:500,color:'rgba(245, 237, 253, 1)'}}>1 × Package name</Text>
                          </View>
                      </View>
                  </View>
     </View>
      </View>
     </View>
      </View>
        <View style={{gap:12}}>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:700}}>Ticket Details</Text>
          <View style={{gap:8}} >
            <View style={styles.card}>
              <View style={{gap:16}} >
                <View style={styles.package}>
                <Text style={styles.TicketDetail}>Ticket ID</Text>
                <Text style={styles.TicketDetail}>012345</Text>
                </View>
                <View style={styles.package}>
                <Text style={styles.TicketDetail}>Customer Name</Text>
                <Text style={styles.TicketDetail}>Ganesh Horamata</Text>
                </View>
                <View style={styles.package}>
                <Text style={styles.TicketDetail}>Amount Paid</Text>
                <Text style={styles.TicketDetail}>₹ 9,482</Text>
                </View>
                <View style={styles.package}>
                <Text style={styles.TicketDetail}>Payment Id</Text>
                <Text style={styles.TicketDetail}>0123588</Text>
                </View>
                <View style={styles.package}>
                <Text style={styles.TicketDetail}>Payment Status</Text>
                <Text style={styles.TicketDetail}>Completed</Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
            <View style={styles.package}>
                <Text style={styles.TicketDetail}>Total Redeemable Amount</Text>
                <Text style={styles.TicketDetail}>₹ 2500.00</Text>
                </View>

            </View>
          </View>
        </View>
        <View style={{gap:12}}>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:700}}>Payment Breakdown</Text>
        <View style={{gap:8}} >
            <View style={styles.card}>
                <View style={styles.package}>
                  <View style={{width:'40%'}}>
                  <Text style={styles.TicketDetail}>Tickets</Text>
                  </View>
                  <View style={{width:'49%'}}>
                        <View style={styles.package}>
                            <Text style={styles.TicketDetail}> QTY</Text>
                            <Text style={styles.TicketDetail}>Sub Total</Text>
                        </View>
                  </View>
                    </View>
            </View>
          
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={styles.TicketDetail}>Ladies</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={styles.TicketDetail}>2</Text>
                        <Text style={styles.TicketDetail}>₹ 2000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={styles.TicketDetail}>Couple</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={styles.TicketDetail}>1</Text>
                        <Text style={styles.TicketDetail}>₹ 3000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={styles.TicketDetail}>Stag</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={styles.TicketDetail}>2</Text>
                        <Text style={styles.TicketDetail}>₹ 1000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{borderWidth:1, borderBottomColor:'rgba(245, 237, 253, 0.1)',borderTopColor:'rgba(245, 237, 253, 0.25)'}}>          
            <View style={{padding:10}}>
            <View style={styles.package}>
              <View style={{width:'40%'}}>
              <Text style={styles.TicketDetail}>Sub Total</Text>
              </View>
              <View style={{width:'49%'}}>
                    <View style={styles.package}>
                        <Text style={styles.TicketDetail}>5</Text>
                        <Text style={styles.TicketDetail}>₹ 2000.00</Text>
                    </View>
              </View>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={styles.TicketDetail}>Platform Fee</Text>
                <Text style={styles.TicketDetail}>₹300.00</Text>
                </View>
            </View>
            <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={styles.TicketDetail}>Integrated GST @18% </Text>
                <Text style={styles.TicketDetail}>₹180.00</Text>
                </View>
            </View>
          </View>
          <View style={{borderWidth:1, borderBottomColor:'rgba(245, 237, 253, 0.1)'}}>
          <View style={{padding:10}}>
            <View style={styles.package}>
                <Text style={styles.TicketDetail}>Total Paid Amount</Text>
                <Text style={styles.TicketDetail}>₹2480.00</Text>
            </View>
          </View>
            </View>
        </View>
        </View>
      </View>
      </ScrollView>
      <TicketDownloadPopup Popup={Popup}  setPopup={setPopup}/>
    </View>
  )
}

export default TicketDetailsScreen

const styles = StyleSheet.create({
  card:{
      backgroundColor:'rgba(212, 212, 212, 0.1)',
      borderRadius:4,
      minHeight:44,
      gap:10,
      padding:10
  },
  TicketDetail:{
    color:'rgba(245, 237, 253, 1)',
    fontSize:14,
    fontWeight:500
  },
  headding:{
    fontWeight:400,
    fontSize:8,
    color:'rgba(245, 237, 253, 1)',
  },
  values:{
    fontWeight:700,
    fontSize:14,
    color:'rgba(245, 237, 253, 1)',
  },
  package:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    gap:8
},
packageText:{
    color:'rgba(245, 237, 253, 1)',
},
box:{
  height:16,
  backgroundColor:'rgba(212, 212, 212, 0.1)',
  borderRadius:8,
  paddingHorizontal:8,
  justifyContent:'center'
},
Details:{
  gap:6,
  width:'55%',
  padding:1,
  marginLeft:10,
},
})