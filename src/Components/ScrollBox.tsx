import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Imageassets } from '../../assets//images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  ScrollBoxProps = {
    Title?: string;
    Color?: string;
    view?: any;
    padding?:any;
    eventDetails:any[];
  };


  const ScrollBox: React.FC<ScrollBoxProps> = ({ Title, Color,view,padding,eventDetails }) => {
   
       

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
                    <View key={index} style={[styles.item,{marginVertical:padding}]}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 8,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image
                                 source={{uri:items.images?.[0]?.image_link}}
                                style={{ height: 157, width: 157 }}
                                resizeMode='contain'
                            />
                            
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5, height: 74, gap: 7 }}>
                                <Text  numberOfLines={2} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                    {/* {items.title} */}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                    {/* {items.palce} */}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                   {/* {items.date} */}
                                </Text>
                            </View>
                            <View
                                style={{
                                    height: 23,
                                    borderRadius: 4,
                                    borderColor: '#47474766',
                                    borderWidth: 1,
                                    backgroundColor: '#0D0D0D',
                                    margin: 10,
                                    justifyContent: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 8,
                                        alignItems: 'baseline',
                                    }}
                                >
                                    <Text style={{ color: '#D0A2F7', fontSize: 12, fontWeight: '700' }}>₹{items.price}</Text>
                                    <Text
                                        style={{
                                            color: '#D0A2F7',
                                            fontSize: 8,
                                            fontWeight: '700',
                                            marginLeft: 2,
                                        }}
                                    >
                                        Onwards
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
        width: 176, 
        height: 285, 
        marginRight: 10,
        backgroundColor: '#1B1B1B',
        borderRadius: 8,
        borderColor: '#474747',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
});

export default ScrollBox;
