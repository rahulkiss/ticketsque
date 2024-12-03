import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


const EventAvailableScroll = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Render the cards in a loop for scalability */}
          {[...Array(3)].map((_, index) => (
            <LinearGradient colors={['rgba(131, 56, 236, 1)','rgba(246, 79, 89, 1)','rgba(245, 175, 25, 1)']} start={{ x: 0, y: 0 }}end={{ x: 1, y: 1 }} key={index} style={styles.card}>
              <View style={{paddingHorizontal:15,gap:3}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.title}>Flat 100 Off</Text>
                <Text style={{color:'rgba(13, 13, 13, 1)',fontWeight:700,fontSize:14}}>Apply</Text>
                </View>
                
                <Text style={styles.description}>
                  Get flat 20% OFF on tickets above 499, use discount code
                </Text>
              </View>
            </LinearGradient>
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
    marginVertical: 12, // Ensures proper spacing around the container
  },
  scrollContent: {
    flexDirection: 'row', // Ensures horizontal layout
    alignItems: 'center',
    paddingHorizontal: 5, // Adds padding on both sides of the scroll view
  },
  card: {
    width: 362,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 5, 
  // Adds spacing between cards
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    width:'50%'
     // Text color white for visibility
  },
  description: {
    fontSize: 12,
    color: '#fff', // Text color white for visibility
    },
});

export default EventAvailableScroll;
