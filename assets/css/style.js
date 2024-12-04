import {StyleSheet,} from 'react-native'


const styles = StyleSheet.create({
  card:{
    backgroundColor:'rgba(212, 212, 212, 0.1)',
    borderRadius:8,
    minHeight:36,
    gap:16,
    padding:10,
    borderWidth:1,
    borderColor:'rgba(255, 255, 255, 0.25)',
},
package:{
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row',
  gap:8
},
Heading:{
  fontSize:18,
  fontWeight:700,
  color:'rgba(245, 237, 253, 1)',
},
Text:{
  fontSize:12,
  fontWeight:500,
  color:'rgba(245, 237, 253, 1)',
},
pinkText:{
  fontSize:14,
  fontWeight:400,
  color:'rgba(208, 162, 247, 1)',
},
 maincontainer:{
  margin:20,
  gap:12
},
 slot:{
  backgroundColor:'rgba(13, 13, 13, 1)',
  borderColor:'rgba(71, 71, 71, 1)',
  borderWidth:1,
  minHeight:28,
  borderRadius:14,
  paddingHorizontal:10,
  justifyContent:'center'
 },
 bottomTab: {
  position:'absolute',
  bottom:10,
  width:'100%',
  paddingHorizontal:20,
  borderTopWidth:1,
  borderTopColor:'rgba(245, 237, 253, 0.1)'
 },
 NavBar:{
  backgroundColor:'rgba(37, 37, 37, 0.7)',
  paddingHorizontal:20,
  paddingVertical:15,
  borderColor:'rgba(71, 71, 71, 1)',
  borderBottomWidth:1,
  flexDirection:'row'}
})

export default styles