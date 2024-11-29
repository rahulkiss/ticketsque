import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  VenueScrollBoxProps = {
   
  };


  const VenueScrollBox: React.FC<VenueScrollBoxProps> = () => {
    // Sample data for rendering items
    const items = [1, 2, 3, 4]; // Array to repeat the item 4 times

    return (
        <View style={styles.container}>
            {/* Horizontal Scrollable Box */}
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,width:'100%'}}>
                    <Text style={{color:'#F5EDFD',fontSize:18,fontWeight:700}}>Top Venues</Text>
                    {/* <Text style={{color:'#F5EDFD',fontSize:14,fontWeight:400}}>View All</Text> */}
                </View>
                <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                style={styles.VenuescrollBox}
                contentContainerStyle={styles.scrollContent}
            >
                
                {items.map((_, index) => (
                    <View key={index} style={styles.item}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 8,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image 
                                source={Imageassets.PartyImage90}
                                style={{ height: 114, width:157  }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, height: 72, gap: 8 }}>
                                <Text style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                21st AMendement gaasto
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                   TOCA, Koramangala
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                Events 14 
                                </Text>
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
        marginVertical:12 // Optional for better contrast
    },
    VenuescrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', // Ensures items are laid out horizontally
        alignItems: 'center',
        paddingHorizontal: 10, // Adds padding inside the scroll container
    },
    item: {
        width: 176, // Fixed width for each item
        height: 215, // Fixed height for each item
        marginRight: 10, // Spacing between items
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
});

export default VenueScrollBox;
