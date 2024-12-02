import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarouselBar = () => {
  return (
    <View style={{height:250,margin:15 ,backgroundColor:"#1B1B1B",borderColor:'#474747',borderWidth:1,borderRadius:10,justifyContent:'center'}}>
      <Text style={{color:'white',textAlign:'center'}}>CarouselBar</Text>
    </View>
  )
}

export default CarouselBar

const styles = StyleSheet.create({})


// import * as React from 'react';
// import { Dimensions, Text, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// function CarouselBar() {
//     const width = Dimensions.get('window').width;
//     return (
//         <View style={{ flex: 1 }}>
//             <Carousel
//                 loop
//                 width={width}
//                 height={width / 2}
//                 autoPlay={true}
//                 data={[...new Array(6).keys()]}
//                 scrollAnimationDuration={1000}
//                 onSnapToItem={(index) => console.log('current index:', index)}
//                 renderItem={({ index }) => (
//                     <View
//                         style={{
//                             flex: 1,
//                             borderWidth: 1,
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//                             {index}
//                         </Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// export default CarouselBar;