import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

type  VenueScrollBoxProps = {
      text?:any;
      color?:any;
      venueData:any[];
  };

 
  const VenueScrollBox: React.FC<VenueScrollBoxProps> = ({text,color,venueData}) => {
    
    const navigation = useNavigation();
   
    const GoToDetails =()=>{
        navigation.navigate('venudetailscreen')
    }

    return (
        <View  style={styles.container}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,width:'100%'}}>
                   <View><Text style={[styles.title, { color }]}>{text}</Text></View> 
                    {/* <Text style={{color:'#F5EDFD',fontSize:14,fontWeight:400}}>View All</Text> */}
                </View>
                <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.VenuescrollBox}
                contentContainerStyle={styles.scrollContent}
            >
                
                {venueData.map((items,index) => (
                    <TouchableOpacity  onPress={GoToDetails} key={index} style={styles.item}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 8,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image 
                                source={items.image}
                                style={{ height: 114, width:157  }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, height: 72, gap: 8 }}>
                                <Text style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                  {items.title}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                   {items.palce}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                  {items.eventNo}
                                </Text>
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
    VenuescrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', 
        alignItems: 'center',
      
        backgroundColor:'black'
    },
    item: {
        width: 176,
        height: 215,
        marginRight: 10,
        backgroundColor: '#1B1B1B',
        borderRadius: 8,
        borderColor: '#474747',
        borderWidth: 1,
        gap:8.3
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
      },
});

export default VenueScrollBox;
