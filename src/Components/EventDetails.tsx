import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../../assets//images/image';

type EventDetailsProps ={
    onPress : any
}




  const EventDetails: React.FC<EventDetailsProps> = ({onPress}) => {
    
    const items = [1,2,3,4,5,6,7,8]; 

    return (
        <View style={styles.container}>
          
            <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:12}}>
            
                
            
                 
                {items.map((_, index) => (
                    <TouchableOpacity onPress={onPress}  key={index} style={styles.item}>
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
                                style={{ height: 157, width: '100%' }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5, height: 74, gap: 7 }}>
                                <Text numberOfLines={2} ellipsizeMode="tail" style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600', }}>
                                    ElectroGroove Fusion Night Geater fun unlimited bre
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
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        marginVertical:12,
        paddingBottom:20
    },
    EventDetails: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row', 
        alignItems: 'center',
        paddingHorizontal: 10, 
    },
    item: {
        maxWidth: "48%",
        height: 285, 
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

export default EventDetails;
