

import * as React from 'react';
import { useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import { Imageassets } from '../assets/images/image';

interface EventCarouselProps {
 
}

const EventCarousel: React.FC<EventCarouselProps> = ({  }) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const  imageList = 
  [{image:Imageassets.PartyImage,},
    {image:Imageassets.ArtistGalleryimg1,},
    {image:Imageassets.ArtistGalleryimg3,},
  ]

  return (
    <View style={styles.container}>
             
   
      <View>
      <Carousel
        loop
        width={width}
        height={width / 1}
        autoPlay={true}
        data={imageList ?? []}
        scrollAnimationDuration={1500}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={currentIndex}
        renderItem={({ index }) => (
          
          
            <View style={{ maxHeight:364,paddingHorizontal:15,  backgroundColor: "black", justifyContent: 'center' }}>
              <Image source={imageList[index].image} style={{ width: "100%", height: 364, borderColor: '#474747', borderWidth: 1, borderRadius: 10, }} resizeMode='cover' />
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
  container :{
      backgroundColor:'black',
       height: 364,
    },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(9, 9, 9, 1)', 
    padding: 5, 
    borderRadius: 15,
    borderColor:"rgba(255, 255, 255, 0.25)",
    borderWidth:1,
    position:'absolute',
    bottom:10

  
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
     backgroundColor: 'rgba(212, 212, 212, 0.1)',
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

export default EventCarousel;