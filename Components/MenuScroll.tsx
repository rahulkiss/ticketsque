import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Imageassets } from '../assets/images/image';
import { SafeAreaView } from 'react-native-safe-area-context';

type  MenuScrollProps = {
    Title?: string;
    Color?: string;
    onPress?:any;
    view?:any;
   
    
  };
 
  type DataItem = {
    id: string;
    name: string;
    icon: any;
    event:string
  }
  
  const data: DataItem[] = [
    { id: '1', name: 'Food Menu', icon: Imageassets.FoodMenu,event:'13 Pages'},
    { id: '2', name: 'Bar Menu', icon: Imageassets.BarMenu ,event:'13 Pages' },
    
    
  ];
 

  const MenuScroll: React.FC<MenuScrollProps> = ({Title, Color,onPress,view}) => {
  
       

    return (
        <View style={styles.container}>
            {/* Horizontal Scrollable Box */}
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
        marginVertical:16 
    },
    scrollBox: {
        marginHorizontal: 10,
    },
    scrollContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        width: 177,
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

export default MenuScroll;
