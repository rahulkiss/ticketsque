import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

type  VenueScrollBoxProps = {
      text?:any;
      color?:any;
  };


  const VenueScrollBox: React.FC<VenueScrollBoxProps> = ({text,color}) => {
    // Sample data for rendering items
    const navigation = useNavigation();
    const items = [1, 2, 3, 4]; // Array to repeat the item 4 times
    const GoToDetails =()=>{
        navigation.navigate('venudetailscreen')
    }

    return (
        <View  style={styles.container}>
            {/* Horizontal Scrollable Box */}
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
                
                {items.map((_, index) => (
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
        marginVertical:12 // Optional for better contrast
    },
    VenuescrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', // Ensures items are laid out horizontally
        alignItems: 'center',
        // Adds padding inside the scroll container
        backgroundColor:'black'
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
    title: {
        fontSize: 18,
        fontWeight: '700',
      },
});

export default VenueScrollBox;
