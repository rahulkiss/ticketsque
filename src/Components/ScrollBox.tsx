import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';
import PercentageIcon from '../../assets/svg/PercentageIcon.svg'
import api from '../services/api.interceptor';

type  ScrollBoxProps = {
    Title?: string;
    Color?: string;
    view?: any;
    padding?:any;
    eventDetails:any[];
    ViewDetails : (items:any) => void ;
  };


  const ScrollBox: React.FC<ScrollBoxProps> = ({ Title, Color,view,padding,eventDetails,ViewDetails }) => {
    const [discounts, setDiscounts] = useState({});
    const [DateAndTiming, setDateAndTiming] = useState({});
//   console.log('iyftuutdfg',discounts);
  
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

      const DateAndTiming =  eventDetails.map(async (item) => {  
        const fomatDate =  format(new Date(item.event_start), "EEE dd MMM hh:mm a")
        return { [item._id]: fomatDate };
      })
      const dateresults = await Promise.all(DateAndTiming);
      const dateAndTimingMap = Object.assign({}, ...dateresults);
      setDateAndTiming(dateAndTimingMap);

    };

    fetchDiscounts();
  }, [eventDetails]);




    return (
        <View style={styles.container}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,width:'100%',alignItems:'center'}}>
                    <Text style={{color:Color,fontSize:18,fontWeight:700}}>{Title}</Text>
                    <Text style={{color:'#F5EDFD',fontSize:14,fontWeight:400}}>{view}</Text>
                </View>
                <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollBox}
                contentContainerStyle={styles.scrollContent}
            >
                
                {eventDetails.map((items,index) => (
                    
                    <TouchableOpacity onPress={()=> ViewDetails(items)} key={index} style={[styles.item,{marginVertical:padding}]}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                 paddingTop: 8,
                                borderRadius: 14,
                              
                            }}
                        >
                            <View>
                            <Image
                                 source={{uri:items.images?.[0]?.image_link}}
                                style={{ height: 172, width: 344, borderRadius: 14, }}
                                resizeMode='contain'
                            />
                             {discounts[items._id] && (
                                <View style={{position:'absolute',height:20,width:75,backgroundColor:'rgba(208, 162, 247, 1)',top:11,left:0,borderTopRightRadius:113.74,borderBottomRightRadius:113.74,flexDirection:'row',alignItems:'center',paddingLeft:8.12,}}>
                                 <PercentageIcon/>
                                 <Text style={{fontWeight:800,fontSize:10}}> {discounts[items._id]}% OFF*</Text>
                            </View >)}
                            </View>
                        </View>
                        <View style={{gap:6.9}}>
                            <View style={{ paddingHorizontal: 12,  height: 41, gap:7.11 }}>
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
                                    marginHorizontal:8
                                    
                                }}
                            >
                                 <Text  numberOfLines={1} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '400' }}>
                                {DateAndTiming[items._id] && DateAndTiming[items._id]}
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
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        marginVertical:12 
    },
    scrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', 
        alignItems: 'center',
    
        backgroundColor:'black'
    },
    item: {
        width: 361, 
        height: 276, 
        marginRight: 10,
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

export default ScrollBox;
