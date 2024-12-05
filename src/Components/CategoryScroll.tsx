

import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Imageassets } from '../../assets//images/image';
import discount from '../../assets/svg/Discount.svg'
import Travel from '../../assets/svg/Travel.svg'
import entertainment from '../../assets/svg/entertainment.svg'
import Music from '../../assets/svg/Music.svg'
import club from '../../assets/svg/Club.svg'

interface Category {
    id: string;
    name: string;
    icon: any; 
    count?: number; 

 
  }
  
  const data: Category[] = [
    { id: '1', name: 'Discounts',  icon: discount, count: 20,},
    { id: '2', name: 'Travel', icon: Travel, },
    { id: '3', name: 'Entertainment', icon:entertainment , },
    { id: '4', name: 'Music', icon: Music , count: 12,},
    { id: '5', name: 'Club & Nightlife', icon:club , count: 2,},
    { id: '6', name: 'Travel', icon:Travel , count: 2},
  ];
  
  const CategoryScroll: React.FC = () => { 
    const renderItem = ({ item }: { item: Category }) => (
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <item.icon/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        {item.count !== undefined && <Text style={styles.count}>({item.count})</Text>}
      </View>
    );
    return (
        <View style={{marginBottom:12,backgroundColor: '#000',}} >
            <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18,paddingLeft:15}}>Categories</Text>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContent}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
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
       marginTop:5
    },
    card: {
        alignItems: 'center',
        padding: 10,
        maxWidth:90,
        height:100,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 100,
        backgroundColor: 'rgba(21, 21, 21, 10)',
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
