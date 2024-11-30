import {StyleSheet,} from 'react-native'


const styles = StyleSheet.create({
  card:{
    backgroundColor:'rgba(212, 212, 212, 0.1)',
    borderRadius:8,
    minHeight:36,
    gap:16,
    padding:10
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
 maincontainer:{
  margin:20,
  gap:12
},
 slot:{
  backgroundColor:'rgba(13, 13, 13, 1)',
  borderColor:'rgba(71, 71, 71, 1)',
  borderWidth:1,
  height:28,
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
})

export default styles