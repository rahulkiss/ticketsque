import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  ScrollBoxProps = {
    Title: string;
    Color: string;
  };


  const ScrollBox: React.FC<ScrollBoxProps> = ({ Title, Color }) => {
    // Sample data for rendering items
    const items = [1, 2, 3, 4]; // Array to repeat the item 4 times
    

    return (
        <View style={styles.container}>
            {/* Horizontal Scrollable Box */}
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,width:'100%'}}>
                    <Text style={{color:Color,fontSize:18,fontWeight:700}}>{Title}</Text>
                    <Text style={{color:'#F5EDFD',fontSize:14,fontWeight:400}}>View All</Text>
                </View>
                <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                style={styles.scrollBox}
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
                                source={Imageassets.PartyImage}
                                style={{ height: 157, width: 157 }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5, height: 74, gap: 7 }}>
                                <Text style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                    ElectroGroove Fusion Night Geater fun unlimited bre...
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                    TOCA, Koramangala
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                    24th March, 6:30
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
                                    <Text style={{ color: '#D0A2F7', fontSize: 12, fontWeight: '700' }}>₹1000</Text>
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
        marginVertical:12 // Optional for better contrast
    },
    scrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', // Ensures items are laid out horizontally
        alignItems: 'center',
        paddingHorizontal: 10, // Adds padding inside the scroll container
    },
    item: {
        width: 177, // Fixed width for each item
        height: 285, // Fixed height for each item
        marginRight: 10, // Spacing between items
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
