import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '../../assets/images/image'
import NameBar from '../provider/NameBar';

type MyticketsProps={
    navigation: any;
}
const Mytickets:React.FC<MyticketsProps> = ({navigation}) => {
    const handler =(value:string)=>{
        navigation.navigate(value);
    };
  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1 }}>
              <View>
          <NameBar name='My Tickets' />
      </View> 
    <View style={{margin:20,minHeight:550,gap:16}}>

       <View style={styles.TextBox}>
            <View style={{flexDirection:'row',justifyContent:'space-between',height:'79%' }}>
                 <View style={{backgroundColor:'black',width:'48%',borderRadius:8,justifyContent:'center'}}>
                     <Text style={{color:'rgba(208, 162, 247, 1)',fontSize:14,fontWeight:400,textAlign:'center'}}>Upcoming Bookings</Text>
                 </View>
                 <View style={{width:'48%',borderRadius:8,justifyContent:'center'}}>
                     <Text style={{color:'rgba(245, 237, 253, 0.5)',fontSize:14,fontWeight:400,textAlign:'center'}}>Precious Bookings</Text>
                 </View>
            </View>
        </View>
        <TouchableOpacity onPress= {()=>handler("Tickets Details")}>
        <View style={styles.TicketCard}>
            <View  style={{marginRight:10}}>
                <Image source={icons.Event}/>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Name}>Event Name</Text>
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
                <Text style={styles.place}>TOCA, Koramangala</Text>
                <Text style={styles.date}>20/02/2024   06:30 PM</Text>
                <View style={styles.status}>
                    <Text style={{fontSize:12,fontWeight:400, color:'rgba(245, 237, 253, 1)',}}>Status : </Text>
                    <Text style={{fontSize:12,fontWeight:400,color:'rgba(208, 162, 247, 1)'}}>Confirmed</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=>handler("Tickets Details")}>

        <View style={styles.TicketCard}>
            <View  style={{marginRight:10}}>
                <Image source={icons.Event}/>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Name}>Event Name</Text>
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
                <Text style={styles.place}>TOCA, Koramangala</Text>
                <Text style={styles.date}>20/02/2024   06:30 PM</Text>
                <View style={styles.status}>
                    <Text style={{fontSize:12,fontWeight:400, color:'rgba(245, 237, 253, 1)',}}>Status : </Text>
                    <Text style={{fontSize:12,fontWeight:400,color:'rgba(208, 162, 247, 1)'}}>Confirmed</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress= {()=>handler("Tickets Details")}>
        <View style={styles.TicketCard}>
            <View  style={{marginRight:10}}>
                <Image source={icons.Event}/>
            </View>
            <View style={styles.Details}>
                <Text style={styles.Name}>Event Name</Text>
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
                <Text style={styles.place}>TOCA, Koramangala</Text>
                <Text style={styles.date}>20/02/2024   06:30 PM</Text>
                <View style={styles.status}>
                    <Text style={{fontSize:12,fontWeight:400, color:'rgba(245, 237, 253, 1)',}}>Status : </Text>
                    <Text style={{fontSize:12,fontWeight:400,color:'rgba(208, 162, 247, 1)'}}>Confirmed</Text>
                </View>
            </View>

        </View>
        </TouchableOpacity>

        </View>   

    </View>
  )
}

export default Mytickets

const styles = StyleSheet.create({
    TextBox:{
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        height:50,
        borderRadius:8,
        borderColor:'rgba(255, 255, 255, 0.25)',
        justifyContent:'center',
        paddingHorizontal:10
    },
    status:{
            backgroundColor:'rgba(212, 212, 212, 0.1)',
            height:28,
            borderRadius:8,
            borderColor:'rgba(255, 255, 255, 0.25)',
            flexDirection:'row',
            alignItems:'center',
            width:'65%',
            paddingHorizontal:8
    },
    place:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:12,
        fontWeight:500,
    },
    date:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:10,
        fontWeight:500,
    },
    TicketCard:{
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        minHeight:158,
        borderRadius:8,
        borderColor:'rgba(255, 255, 255, 0.25)',
        padding:10,
        flexDirection:'row',

    },
    Details:{
        gap:8,
        width:'55%',
        padding:1
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
    Name:{
        color:'rgba(245, 237, 253, 1)',
        fontSize:16,
        fontWeight:700,  
    },
    box:{
        height:16,
        backgroundColor:'rgba(212, 212, 212, 0.1)',
        borderRadius:8,
        paddingHorizontal:8,
        justifyContent:'center'
    },
});