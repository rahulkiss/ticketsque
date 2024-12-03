import * as React from 'react';
import { useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselBarProps {
  imageList: any[];
}

const CarouselBar: React.FC<CarouselBarProps> = ({ imageList }) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ flex: 1,marginTop:10}}>
      <View>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={imageList ?? []}
        scrollAnimationDuration={1500}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={currentIndex}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View style={{ height: 250, margin: 10, backgroundColor: "#1B1B1B", borderColor: '#474747', borderWidth: 0.1, borderRadius: 10, justifyContent: 'center' }}>
              <Image source={imageList[index]} style={{ width: "100%", height: 300 }} resizeMode="contain" />
            </View>
          </View>
        )}
      />
      </View>
      <View style={styles.indicatorContainer}>
        {imageList.map((_, index) => (
           <LinearGradient
           key={index}
           colors={
             currentIndex === index
               ? ['rgba(208, 162, 247, 1)', 'rgba(208, 162, 247, 1)'] 
               : ['rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.3)'] 
           }
           style={[
            styles.indicator,
            currentIndex === index ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
         >
          <Animated.View
            key={index}
          />
          </LinearGradient>
        ))}
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(212, 212, 212, 0.1)', 
    padding: 5, 
    borderRadius: 15,
    borderColor:"rgba(255, 255, 255, 0.25)",
    borderWidth:1,
    marginTop:3
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
    borderWidth:0.6,
    borderColor:"rgba(208, 162, 247, 1)",
  },
  activeIndicator: {
    width: 16,
  },
  inactiveIndicator: {
    // backgroundColor: 'rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.05)',
  },
  gradientIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CarouselBar;