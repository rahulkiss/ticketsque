import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import PercentageIcon from '../../assets/svg/PercentageIcon.svg'
import api from '../services/api.interceptor';


type EventDetailsProps ={
    ViewDetails : (items:any) => void ;
    eventDetails:any[];
}




  const EventDetails: React.FC<EventDetailsProps> = ({ViewDetails,eventDetails}) => {
    const [discounts, setDiscounts] = useState({});
  
  
  const getDiscount = async (id:any) => {
    try {
      const response = await api.get(`/service/accounts_service/v1/no_auth/discount/${id}/get_event_discounts`);
      if (response?.data) {
        return response?.data?._payload?.discount?.[0]?.discount_value || null;
      }
    } catch (error) {
    //   console.error('Error fetching discount data:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDiscounts = async () => {
      const discountPromises = eventDetails.map(async (item) => {        
        const discount = await getDiscount(item._id);
        return { [item._id]: discount };
      });
      
      const results = await Promise.all(discountPromises);
      const discountsMap = Object.assign({}, ...results);
      setDiscounts(discountsMap);
    };

    fetchDiscounts();
  }, [eventDetails]);
    

    

    return (
        <View style={styles.container}>
          
            <View style={{flexDirection:'row',flexWrap:'wrap',gap:12,justifyContent:'center'}}>
                 
                {eventDetails.map((items,index) => (
                    // <TouchableOpacity onPress={()=> ViewDetails(items)}  key={index} style={styles.item}>
                    //     <View
                    //         style={{
                    //             justifyContent: 'center',
                    //             alignItems: 'center',
                    //             paddingTop: 8,
                    //             paddingHorizontal: 10,
                    //         }}
                    //     >
                    //          <Image
                    //              source={{uri:items?.images?.[0]?.image_link}}
                    //             style={{ height: 157, width: '100%' }}
                    //             resizeMode='contain'
                    //         />
                            
                    //     </View>
                    //     <View>
                    //         <View style={{ paddingHorizontal: 10, paddingTop: 5, height: 74, gap: 7 }}>
                    //             <Text numberOfLines={2} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                    //                {items.name}
                    //             </Text>
                    //             <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                    //             {JSON.parse(items.address)?.location  }
                    //             </Text>
                    //             <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                    //             {/* {items.event_start} */}
                    //             {format(new Date(items?.event_start), "EEE dd MMM hh:mm a")}
                                
                    //             </Text>
                    //         </View>
                    //         <View
                    //             style={{
                    //                 height: 23,
                    //                 borderRadius: 4,
                    //                 borderColor: '#47474766',
                    //                 borderWidth: 1,
                    //                 backgroundColor: '#0D0D0D',
                    //                 margin: 10,
                    //                 justifyContent: 'center',
                    //             }}
                    //         >
                    //             <View
                    //                 style={{
                    //                     flexDirection: 'row',
                    //                     marginLeft: 8,
                    //                     alignItems: 'baseline',
                    //                 }}
                    //             >
                    //                 <Text style={{ color: '#D0A2F7', fontSize: 12, fontWeight: '700' }}>₹{items.package_prices[0]}</Text>
                    //                 <Text
                    //                     style={{
                    //                         color: '#D0A2F7',
                    //                         fontSize: 8,
                    //                         fontWeight: '700',
                    //                         marginLeft: 2,
                    //                     }}
                    //                 >
                    //                     Onwards
                    //                 </Text>
                    //             </View>
                    //         </View>
                    //     </View>
                    // </TouchableOpacity>

                    
                    <TouchableOpacity onPress={()=> ViewDetails(items)} key={index} style={[styles.item]}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                 paddingTop: 8,
                                borderRadius: 14,
                                
                            }}
                        >
                            <Image
                                 source={{uri:items?.images?.[0]?.image_link}}
                                style={{ height: 172, width: 344, borderRadius: 14, }}
                                resizeMode='contain'
                            />
                            
                        </View>
                        <View style={{gap:6.9,marginHorizontal:8}}>
                            <View style={{   height: 41, gap:7.11 }}>
                                <Text  numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 14, fontWeight: '700'}}>
                                    {items.name} 
                                </Text>
                                <Text   numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '400' }}>
                                    {items.address && JSON.parse(items.address)?.location  }
                                </Text>
                            </View>

                            <View
                                style={{
                                    height: 31,
                                    borderRadius: 44,
                                    borderColor: '#47474766',
                                    borderWidth: 1,
                                    backgroundColor: '#0D0D0D',
                                    justifyContent:'space-between',
                                    flexDirection:'row',
                                    alignItems:'center',
                                    paddingHorizontal:10,
                                   
                                    
                                }}
                            >
                                 <Text  numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '400' }}>
                                {/* {items.event_start} */}
                                {format(new Date(items?.event_start), "EEE dd MMM hh:mm a")}
                               
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 8,
                                        alignItems: 'baseline',
                                    }}
                                >
                                    <Text style={{ color: '#D0A2F7', fontSize: 14, fontWeight: '700' }}>₹{items.package_prices && items.package_prices[0]}</Text>
                                    <Text
                                        style={{
                                            color: '#D0A2F7',
                                            fontSize: 10,
                                            fontWeight: '700',
                                            marginLeft: 2,
                                        }}
                                    >
                                        Onwards
                                    </Text>
                                </View>
                            </View>
                            
                            {discounts[items._id] && (    
                     <View style={{height:22,width:75,backgroundColor:'rgba(208, 162, 247, 1)',flexDirection:'row',alignItems:'center',borderRadius:113.74,gap:4.6,justifyContent:'center',marginBottom:6.9}}>
                      <PercentageIcon/>
                      <Text style={{fontWeight:800,fontSize:10}}>{discounts[items._id]}% OFF*</Text>
                     </View >)}
                        </View>
                   
                </TouchableOpacity>

                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginVertical:12,
        paddingBottom:20
    },
    // EventDetails: {
    //     marginHorizontal: 10,
    // },
    // scrollContent: {
    //     flexDirection: 'row', 
    //     alignItems: 'center',
    //     paddingHorizontal: 10, 
    // },
    // item: {
    //     width: "48%",
    //     height: 285, 
    //     backgroundColor: '#1B1B1B',
    //     borderRadius: 8,
    //     borderColor: '#474747',
    //     borderWidth: 1,
    // },
    // text: {
    //     fontSize: 16,
    //     color: '#fff',
    // },
    item: {
        width: 362, 
        minHeight: 276, 
        backgroundColor: '#1B1B1B',
        borderRadius: 20,
        borderColor: '#474747',
        borderWidth: 1,
        gap:8
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
});

export default EventDetails;
