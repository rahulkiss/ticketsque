import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  ArtistScrollBoxProps = {
    Title?: string;
    Color?: string;
    onPress?:any;
    view?:any;
    artistdata:any[];
   
    
  };
 
  
  
 

  const ArtistScrollBox: React.FC<ArtistScrollBoxProps> = ({Title, Color,onPress,view,artistdata}) => {
  
       

    return (
        <View style={styles.container}>
           
            {Title && <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,width:'100%'}}>
                    <Text style={{color:Color,fontSize:18,fontWeight:700}}>{Title}</Text>
                    <Text style={{color:'#F5EDFD',fontSize:14,fontWeight:400}}>{view}</Text>
                </View> }
                <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollBox}
                contentContainerStyle={styles.scrollContent}
            >
                
                {artistdata.map((items,index) => (
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
                                source={items.icon}
                                style={{ height: 172, width: 158 }}
                            />
                        </View>
                        <View>
                            <View style={{ paddingHorizontal: 10, height: 33, gap: 5.02 }}>
                                <Text style={{ color: '#F5EDFD', fontSize: 12, fontWeight: '600' }}>
                                    {items.name}
                                </Text>
                                <Text style={{ color: '#F5EDFD', fontSize: 10, fontWeight: '400' }}>
                                    {items.event}
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
    scrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    item: {
        width: 176,
        height: 235,
        marginRight: 10,
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
