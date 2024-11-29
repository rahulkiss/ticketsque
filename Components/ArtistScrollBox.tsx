import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  ArtistScrollBoxProps = {
    Title: string;
    Color: string;
    onPress:any;
   
    
  };
 
  type DataItem = {
    id: string;
    name: string;
    icon: any;
    event:string
  }
  
  const data: DataItem[] = [
    { id: '1', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event'},
    { id: '2', name: 'Artist Name', icon: Imageassets.Artist3 ,event:'Event' },
    { id: '3', name: 'Artist Name', icon: Imageassets.Artist2 ,event:'Event' },
    { id: '4', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event' },
    
  ];
 

  const ArtistScrollBox: React.FC<ArtistScrollBoxProps> = ({Title, Color,onPress}) => {
  
       

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
                
                {data.map((item) => (
                      <TouchableOpacity onPress={onPress}  key={item.id} style={styles.item}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 8,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image
                                source={item.icon}
                                style={{ height: 172, width: 158 }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, height: 33, gap: 5.02 }}>
                                <Text style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                    {item.name}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                    {item.event}
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
        height: 235, // Fixed height for each item
        marginRight: 10, // Spacing between items
        backgroundColor: '#1B1B1B',
        borderRadius: 8,
        borderColor: '#474747',
        borderWidth: 1,
        gap:10
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
});

export default ArtistScrollBox;
