

import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Imageassets } from '../assets/images/image';

interface Category {
    id: string;
    name: string;
    icon: any; // URL or local asset for the icon
    count?: number; 
    width: any;
    height: any;
  }
  
  const data: Category[] = [
    { id: '1', name: 'Discounts', icon: Imageassets.Categoryimg1, count: 20, width: 50,height: 50, },
    { id: '2', name: 'Travel', icon: Imageassets.Categoryimg2,width: 36,height: 32, },
    { id: '3', name: 'Entertainment', icon: Imageassets.Categoryimg3,width: 36,height: 36, },
    { id: '4', name: 'Music', icon: Imageassets.Categoryimg1, count: 12, width: 50,height: 50, },
    { id: '5', name: 'Club & Nightlife', icon: Imageassets.Categoryimg5, count: 2 ,width: 36,height: 36,},
    { id: '6', name: 'Travel', icon: Imageassets.Categoryimg2, count: 2 , width: 36,height: 32,},
  ];
  
  const CategoryScroll: React.FC = () => {
    // Render item using FlatList
    const renderItem = ({ item }: { item: Category }) => (
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Image source={item.icon} style={{width:item.width ,height:item.height,}} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        {item.count !== undefined && <Text style={styles.count}>({item.count})</Text>}
      </View>
    );
    return (
        <View style={{marginBottom:12}} >
            <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18,paddingLeft:15}}>Categories</Text>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
                nestedScrollEnabled={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        
    },
    flatListContent: {
       marginHorizontal:10,
       marginTop:5
    },
    card: {
        alignItems: 'center',
        padding: 10,
        width:"auto",
        height:100,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderColor:'#474747',
        borderWidth:1
        
        
    },
   
    name: {
        fontSize: 10,
        fontWeight:700,
        color: '#F5EDFD',
        textAlign: 'center',
    },
    count: {
        fontSize: 10,
        color: '#F5EDFD',
        textAlign: 'center',
    },
});

export default CategoryScroll;