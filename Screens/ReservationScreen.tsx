import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { icons } from '../assert/image/image'
import CustomButton from '../Components/CustomButton'
 
type ReservationScreenprops ={
  navigation: any;
}

const ReservationScreen:React.FC<ReservationScreenprops> = ({navigation}) => {
        const handler =()=>{
          navigation.navigate('booking')
        };

  return (
    <View style={{backgroundColor:'rgba(13, 13, 13, 1)',flex:1,}}> 
      <ScrollView>
        <View style={{margin:20,gap:20}}>
          <View style={styles.card}>
            <View style={styles.package}>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:400}}>Select Outlet</Text>
              <Image source={icons.down}/>
            </View>  
          </View>  
          <View style={{gap:8}}>
            <Text style={{fontWeight:700,color:'rgba(208, 162, 247, 1)',fontSize:20}}>Select No of Guests</Text>
            <View style={{backgroundColor:'rgba(212, 212, 212, 0.1)',borderRadius:4,height:40,}}>
                <View style={{flexDirection:'row',height:'100%',}}>
                  <View style={{width:'10%',borderWidth:1,borderTopLeftRadius:4,borderBottomLeftRadius:4, borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>1</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>2</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>3</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>4</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>5</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>6</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>7</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>8</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>9</Text>
                  </View>
                  <View style={{width:'10%',borderWidth:1,borderTopRightRadius:4,borderBottomRightRadius:4,borderColor:'rgba(71, 71, 71, 1)',justifyContent:'center'}}>
                  <Text style={{fontWeight:600,fontSize:15,color:'rgba(245, 237, 253, 1)',textAlign:'center'}}>10</Text>
                  </View>
                  
                </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.package}>
                  <View style={{width:'20%',paddingLeft:4}}>
                  <View style={styles.package}>
                    <Image source={icons.Calender}/>
                    <Text style={{fontSize:20,fontWeight:600,color:'rgba(245, 237, 253, 1)'}}>25 Jun</Text>
                  </View>
                  </View>
                  <View>
                  <View style={styles.package}>
                          <View style={{backgroundColor:'rgba(208, 162, 247, 1)', height:30, borderRadius:15,minWidth:'10%',paddingHorizontal:15,justifyContent:'center'}}>
                                <Text style={{fontSize:10,fontWeight:800,}}>Today</Text>
                          </View>
                          <View style={{height:30,backgroundColor:'rgba(255, 255, 255, 0.09)', borderRadius:15,minWidth:'10%',paddingHorizontal:15,justifyContent:'center',borderColor:'rgba(208, 162, 247, 1)',borderWidth:1}}>
                              <Text style={{fontSize:10,fontWeight:800,color:'rgba(208, 162, 247, 1)'}}>Tommarow</Text>
                          </View>
                  </View>
                  </View>
            </View>

          </View>
          <View style={styles.card}>
          <View style={{padding:1}}>
            <View style={styles.package}>
            <View style={{width:'45%'}}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:500}}>Lunch 1</Text>
              </View>

              <View style={{width:'45%'}}>
                <View style={styles.package}>
                <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:500}}>12:00PM to 1:30PM</Text>
                    <Image source={icons.UpArrow}/>
                </View>
              </View>
            </View>
          </View>
          </View>
          <View style={{gap:13}}>
            <View style={styles.package}>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
            </View>
            <View style={styles.package}>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
              <View style={styles.card}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:600}}>12:00 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{padding:1}}>
            <View style={styles.package}>
            <View style={{width:'45%'}}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:500}}>Dinner 2</Text>
              </View>

              <View style={{width:'45%'}}>
                <View style={styles.package}>
                <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:500}}>12:00PM to 1:30PM</Text>
                    <Image source={icons.UpArrow}/>
                </View>
              </View>
            </View>
            </View>
          </View>
          <View style={styles.card}>
          <View style={{padding:1}}>
            <View style={styles.package}>
            <View style={{width:'45%'}}>
              <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:16,fontWeight:500}}>Dinner 1</Text>
              </View>

              <View style={{width:'45%'}}>
                <View style={styles.package}>
                <Text style={{color:'rgba(245, 237, 253, 1)',fontSize:14,fontWeight:500}}>12:00PM to 1:30PM</Text>
                    <Image source={icons.UpArrow}/>
                </View>
              </View>
            </View>
            </View>
          </View>
          
        </View>
      </ScrollView>
      <View style={{position:'absolute',bottom:10,width:'100%',paddingHorizontal:20,borderTopWidth:1,borderTopColor:'rgba(245, 237, 253, 0.1)'}}>
        < CustomButton onPress={handler} buttontitle="Continue"/>
      </View>
    </View>
  )
}

export default ReservationScreen

const styles = StyleSheet.create({  
  card:{
      backgroundColor:'rgba(212, 212, 212, 0.1)',
      borderRadius:8,
      minHeight:36,
      gap:12,
      padding:10
  },
  package:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    gap:8
},
})
