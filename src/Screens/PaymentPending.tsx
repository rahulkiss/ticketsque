import { Text, View,ScrollView,Image } from 'react-native'
import styles from '../../assets/css/style'
import React from 'react'
import Pending from '../../assets/svg/pending.svg'
const PaymentPending = () => {
  return (
    <View style={{backgroundColor:'black',flex:1}}>
        <ScrollView>
            <View style={styles.maincontainer}>
            <View style={{alignItems:'center',marginTop:40}}>
                  <Pending/>
                    </View>
                    <View style={{alignItems:'center',gap:16,}}>

                        <Text style={[styles.Heading,{fontSize:24,color:'rgba(208, 162, 247, 1)'}]}>Payment Pending</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)'}]}>Your booking is being processed. Please wait.</Text>
                        <Text style={[styles.pinkText,{color:'rgba(245, 237, 253, 1)' ,textAlign:'center'}]}>If this takes too long, you can refresh the page or retry the payment.</Text>
                    </View>
                    <View style={[styles.package,{marginTop:20}]}>
                        <View style={[styles.slot,{paddingVertical:10,borderRadius:20,borderColor:'rgba(208, 162, 247, 1)',width:'47%',}]}>
                            <View style={{marginHorizontal:15}}>
                            <Text style={[styles.Heading,{fontSize:14,textAlign:'center',color:'rgba(208, 162, 247, 1)'}]}>Refresh Page</Text>
                            </View>
                        </View>
                        <View style={[styles.slot,{paddingVertical:10,borderRadius:20,borderColor:'rgba(208, 162, 247, 1)',width:'47%'}]}>
                            <View style={{marginHorizontal:15}}>
                            <Text style={[styles.Heading,{fontSize:14,textAlign:'center',color:'rgba(208, 162, 247, 1)'}]}>Retry Payment</Text>
                            </View>
                        </View>

                    </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default PaymentPending

