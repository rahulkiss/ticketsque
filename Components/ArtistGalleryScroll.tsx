import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  ArtistGalleryScrollProps = {
   
    
  };
 
  type DataItem = {
    id: string;
    icon: any;
   
  }
  
  const data: DataItem[] = [
    { id: '1', icon: Imageassets.ArtistGalleryimg1 },
    { id: '2', icon: Imageassets.ArtistGalleryimg2  },
    { id: '3', icon: Imageassets.ArtistGalleryimg3  },
   
    
  ];
 

  const ArtistGalleryScroll: React.FC<ArtistGalleryScrollProps> = () => {
  
       

    return (
        <>
        <Text style={{fontSize:18,fontWeight:700,color:'#F5EDFD',marginHorizontal:15,marginTop:8}}>Gallery</Text>

        <View style={styles.container}>
           
        <SafeAreaView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollBox}
                contentContainerStyle={styles.scrollContent}
            >
                
                {data.map((item) => (
                      <TouchableOpacity key={item.id} style={styles.item}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image resizeMode='cover'
                                source={item.icon}
                                style={{ height: 160, width: 167.5,borderRadius:8}}
                            />
                        </View>
                        
                    </TouchableOpacity>
                ))}
            </ScrollView>
            </SafeAreaView>
        </View>
        </>
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
        paddingHorizontal: 10, 
    },
    item: {
        width: 167.5,
        height: 160, 
        marginRight: 10,
        backgroundColor: '#1B1B1B',
        borderRadius: 8,
        borderColor: '#474747',
        borderWidth: 1,
        gap:10
    },
  
});

export default ArtistGalleryScroll;
