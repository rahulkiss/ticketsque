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

// import React from 'react';
// import { Dimensions, View, Image, StyleSheet } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import { Imageassets } from '../assets/images/image'; // Adjust this import path as necessary

// interface Category {
//   id: any;
//   icon: any; // URL or local asset for the icon
 
// }

// const data: Category[] = [
//   { id: '1', icon: Imageassets.Categoryimg1, },
//   { id: '2',  icon: Imageassets.Categoryimg2, },
//   { id: '3',icon: Imageassets.Categoryimg3,  },
  
// ];

// const CarouselBar: React.FC = () => {
//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={screenWidth}
//         height={250} // Adjust height as needed
//         autoPlay
//         autoPlayInterval={3000}
//         data={data}
//         scrollAnimationDuration={1000}
//         onSnapToItem={(index) => console.log('Current index:', index)}
//         renderItem={({ item }) => (
//           <View key={item.id} style={styles.card}>
//             <Image
//               source={item.icon}
//               style={[
//                 styles.image,
//                 { backgroundColor: '#1B1B1B', borderColor: '#474747', borderWidth: 1 },
//               ]}
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   card: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//     borderRadius: 10,
//   },
//   image: {
//     height: 250,
//     width: '100%',
//     margin: 15,
//     borderRadius: 10,
//     resizeMode: 'contain',
//   },
// });

// export default CarouselBar;

