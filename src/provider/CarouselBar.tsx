import * as React from 'react';
import { useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselBarProps {
  imageList: any[];
  bgcolor? : any;
  position? : any;
  bottom? : any;
  carousalwidth : any;
  margintop? : any;
  carousal : any;
}

const CarouselBar: React.FC<CarouselBarProps> = ({ imageList,bgcolor,bottom,carousalwidth,position,carousal,margintop }) => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{ flex: 1,marginTop:margintop}}>
      <View>
      <Carousel
        loop
        width={width}
        height={width /carousalwidth}
        autoPlay={false}
        data={imageList ?? []}
        scrollAnimationDuration={1500}
        onSnapToItem={(index) => setCurrentIndex(index)}
        defaultIndex={currentIndex}
        renderItem={({ item,index }) => (
          <>
         { carousal == 'Home' && 
         <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <View style={{  marginHorizontal: 20,borderColor: '#474747', borderWidth: 0.8, borderRadius: 10, justifyContent: 'center',}}>
              <Image source={{uri:item?.banner_images?.[0]}} style={{ width: "100%",height:'100%', borderRadius: 10, }} resizeMode='cover' />
            </View>
           </View> 
          }

          { carousal == 'Event'  &&
            <View style={{ maxHeight:364,paddingHorizontal:15,  backgroundColor: "black", justifyContent: 'center' }}>
              <Image source={imageList[index].image} style={{ width: "100%", height: 364, borderColor: '#474747', borderWidth: 1, borderRadius: 10, }} resizeMode='cover' />
            </View>
        
         } 
         {  carousal == 'Discount' &&
                     <View style={{height:121,borderRadius:12,borderWidth:1,borderColor:'#474747',width:362,marginHorizontal:'auto',alignItems:'center',justifyContent:'flex-start',flexDirection:'row',backgroundColor:'rgba(27, 27, 27, 1)'}}> 
                                
                     <Image style={{maxHeight:91,maxWidth:140,marginHorizontal:15}} resizeMode='stretch'  source={imageList[index].image} /> 
                 
              <View style={{}} >
                 <View style={{flexDirection:'row'}}>
                     <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:600,fontSize:16}}>Get </Text>
                     <Text style={{color:'rgba(208, 162, 247, 1)',fontWeight:600,fontSize:16}}>{imageList[index].discount}  OFF</Text>
                     <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:600,fontSize:16,textAlign:'left'}}> for all the</Text>
                 </View>
                 <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:600,fontSize:16,textAlign:'left'}}>Following Events</Text>
                 <View style={{flexDirection:'row',alignItems:'baseline',paddingTop:8}}>
                     <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:10}}>code:</Text>
                       <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:800,fontSize:12,marginLeft:5}}>{imageList[index].code}</Text>
                 </View>
                   
               </View>
           
           </View>   
         }

        </>
        )}

      />
      </View>
      { imageList.length > 1 &&
      <View style={[styles.indicatorContainer,{position:position,bottom:bottom,backgroundColor:carousal=='Event'?'rgba(9, 9, 9, 1)':'rgba(212, 212, 212, 0.1)'}]}>
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
            currentIndex === index ? styles.activeIndicator : {backgroundColor:bgcolor},
          ]}
         >
          <Animated.View
            key={index}
          />
          </LinearGradient>
        ))}
      </View>}
      
    </View>
  );
}


const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5, 
    borderRadius: 15,
    borderColor:"rgba(255, 255, 255, 0.25)",
    borderWidth:1,
    marginTop:5,
   
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