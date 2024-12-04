import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import NameBar from '../provider/NameBar'

const TermsAndConditionScreen = () => {
  return (
    <ScrollView style={{backgroundColor:"black"}}>
            <View>
          <NameBar name='Terms & Conditions'/>
      </View>
    <View  style={{padding:15}}>
     <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:20,fontWeight:700,}}>Discounts - Terms & Conditions</Text>
     <View style={{marginTop:15,gap:12}}>
        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>1.Discount Ownership</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>All discounts listed on the platform are created, managed, and controlled by the respective vendors. Ticketsque acts solely as a platform that enables the creation, distribution, and redemption of discounts by these vendors.</Text>
        </View>
        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>2.Vendor's Right to Modify Terms</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Vendors reserve the right to modify, update, or cancel discount offers at any time based on their business needs, without prior notice. Users are encouraged to check the terms of individual discounts regularly.</Text>
        </View>
        <View >
            <Text style={{ paddingBottom:5,color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>3.Responsibility for Service</Text>
             <Text  style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Ticketsque is not responsible for any issues related to the redemption of discounts, including but not limited to:</Text>
             <View style={{flexDirection:'row',gap:5}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Vendor refusal to honor discounts.
            </Text>
          </View>
          <View style={{flexDirection:'row',gap:5}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Changes in the availability of the discount.
            </Text>
          </View>
          <View style={{flexDirection:'row',gap:5}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Non-availability of products or services associated with the discount.
            </Text>
          </View>
    </View>
         
    <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>4.Discount Validity</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Each discount will have a defined validity period as set by the vendor. Users must redeem discounts before the expiry date, as expired discounts will not be honored.</Text>
        </View>


        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>5.Usage Restrictions</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Some discounts may come with specific restrictions or conditions such as minimum spend requirements, location-specific availability, or limits on the number of uses per customer. These conditions are set by vendors and must be adhered to for successful redemption.</Text>
        </View>


        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>6.Non-Transferability</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Discounts are non-transferable unless explicitly stated by the vendor. Only the recipient of the discount is eligible to redeem it.</Text>
        </View>


        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>7.Combination with Other Offers</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>The ability to combine discounts with other promotions, offers, or loyalty programs is at the discretion of the vendor and should be confirmed at the time of redemption.</Text>
        </View>

        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>8.Denial of Service</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Vendors have the right to deny service for reasons such as abuse of the offer, failure to meet eligibility criteria, or violation of the terms specific to the discount. Ticketsque is not liable for such refusals or any disputes arising from them.</Text>
        </View>

        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>9.QR Code Redemption</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Discounts are generally redeemed via QR codes sent to the user’s registered contact. The QR code must be presented at the time of redemption, and it is the user's responsibility to ensure that the code is valid and not expired.</Text>
        </View>

        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>10.No Cash Alternative</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Discounts cannot be exchanged for cash unless the vendor explicitly offers such an option. Any unused portion of a discount will not be refunded in cash or any other form.</Text>
        </View>

        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>11.Platform Liability</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Ticketsque provides the platform for discounts but does not guarantee the availability, accuracy, or fulfillment of offers. All issues regarding the discount terms should be directed to the vendor.</Text>
        </View>

        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>12.Dispute Resolution</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Any disputes arising between the user and the vendor regarding discounts should be resolved between the parties involved. Ticketsque will not mediate disputes related to the terms or redemption of discounts.</Text>
        </View>
        <View style={{gap:5}}>
            <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:16,fontWeight:700,}}>13.Changes to Terms & Conditions</Text>
             <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:400,}}>Ticketsque reserves the right to modify these Terms & Conditions at any time. Users will be notified of major changes, but it is recommended to periodically review the terms for updates.</Text>
        </View>


     </View>
    </View>
    </ScrollView>
  )
}

export default TermsAndConditionScreen

const styles = StyleSheet.create({})