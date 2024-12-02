import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
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
            <View key={index} style={styles.card}>
              <View>
                <Text style={styles.title}>Flat 100 Off</Text>
                <Text style={styles.description}>
                  Get flat 20% OFF on tickets above 499, use discount code
                </Text>
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
    paddingHorizontal: 15,
    marginHorizontal: 10, // Adds spacing between cards
    borderColor:'white',
    borderWidth:1,
     // Example solid color
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Text color white for visibility
  },
  description: {
    fontSize: 12,
    color: '#fff', // Text color white for visibility
  },
});

export default EventAvailableScroll;
