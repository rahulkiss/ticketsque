import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Imageassets } from '../../assets//images/image'
import { ScrollView } from 'react-native-gesture-handler'
import EventAvailableScroll from '../Components/EventAvailableScroll'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import ScrollBox from '../Components/ScrollBox'
import BackButton from '../Components/BackButton'
import SharePopup from '../provider/SharePopup'
import { useNavigation } from '@react-navigation/native'
import CarouselBar from '../provider/CarouselBar'
import Calender from '../../assets/svg/DateIcon.svg'
import Location from '../../assets/svg/locationIcon.svg'
import Direction from '../../assets/svg/GetDirections.svg'
import Drava from '../../assets/svg/Drava.svg'
import Down from '../../assets/svg/DropDown.svg'
import Up from '../../assets/svg/Drop_Up.svg'
import Wallet from '../../assets/svg/wallet.svg'
import api from '../services/api.interceptor'





const SingleEventDetail = ({ route }: { route: any }) => {
   const [TermsAndCondition,setTermsAndCondition] = useState(false)
   const [ArtistImage,setArtistImage] = useState(true)
   const [ShowManu,setShowManu] = useState(true)
   const [Popup,setPopup]=useState(false)
   const [EventDetails,setEventDetails]=useState([])


   const navigator = useNavigation();
   const { eventData } = route.params;
   const Address = JSON.parse(eventData?.address)
  //  console.log('datas',Address);
   const  data = 
  [{image:Imageassets.PartyImage,},
    {image:Imageassets.ArtistGalleryimg1,},
    {image:Imageassets.ArtistGalleryimg3,},
  ]
  
  const eventDetail = [
    "Live DJ Sets: Our lineup features some of the most talented and sought-after DJs in the industry, each bringing their unique style to the stage. From deep house to techno, trance to funk-infused beats, they'll take you on an unforgettable sonic journey.",
    "State-of-the-Art Visuals: Prepare to be mesmerized by cutting-edge visual projections that sync perfectly with the music, creating a multisensory experience that will transport you to a world of vibrant colors and captivating visuals.",
    "Interactive Dance Zones: We've set up dedicated dance zones with immersive lighting and pulsating sound systems, ensuring that you'll find the perfect spot to let loose and dance to your heart's content.",
    "Artisanal Food and Drinks: Take a break from the dance floor and indulge in a variety of delectable bites and crafted cocktails from our top-notch culinary and mixology teams.",
    "Chillout Lounge: Need a breather? Visit our chillout lounge area, where you can relax, recharge, and socialize with fellow music enthusiasts. Unwind while still being enveloped in the event's electrifying atmosphere.",
  ];
  const eventDetails = [
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
    {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'}
];
const artistdata= [
  { id: '1', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event'},
  { id: '2', name: 'Artist Name', icon: Imageassets.Artist3 ,event:'Event' },
  { id: '3', name: 'Artist Name', icon: Imageassets.Artist2 ,event:'Event' },
  { id: '4', name: 'Artist Name', icon: Imageassets.Artist1 ,event:'Event' },
  
];
  
   const GoToEventBooking = () =>{
     navigator.navigate('EventBooking')
     
   }
  useEffect(()=>{
    getUserData()
  },[])
  
  const getUserData = async () => {
    if (eventData) {
      try {
        // setIsLoader(true)
        const response = await api.get(`/service/events_service/v1/no_auth/customer/event/handle/${eventData.handle}?utm_source=events-page`);
        // setIsLoader(false)
        if (response?.data) {
          console.log("eventDetails", response?.data);
          setEventDetails(response?.data ?? []);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };
      
  return (
    <View style={{flex:1,backgroundColor: "black" }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "black" }}>

        <View style={{ alignItems: 'center', justifyContent: 'center',height: 364, }}>
            
            <CarouselBar carousal={'Event'} imageList={data} position={'absolute'} bottom={10} bgcolor={'rgba(9, 9, 9, 0.5)'} carousalwidth={1}/>
           
        </View>
        <View style={{ maxHeight: 423, gap: 13, paddingHorizontal: 15, paddingTop: 15 }}>
          <Text style={{ color: '#F5EDFD', fontWeight: 700, fontSize: 20 }}>{eventData?.name}</Text>

          <View style={{height:42,flexDirection:'row',gap:12}}>
                            <Calender/>
            <View style={{justifyContent:'space-between'}}>
            <Text  style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>30/11/2024</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize:11}}>sun,3.45 PM Onwards</Text>
            </View>

          </View>
             <View style={{height:42,flexDirection:'row',gap:12}}>
                <Location/>
            <View  style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
            <View style={{justifyContent:'space-between'}}>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Happy Brew</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize:11}}>Kormangala, Bengaluru.</Text>
            </View>
            <View style={{height:42,justifyContent:"center",}}>

              <View  style={{width:110,height:24,borderRadius:4,borderColor:'rgba(255, 255, 255,0.25)',borderWidth:1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:7,alignItems:'center'}}>
                <View><Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400,paddingBottom:1.5}}>Get Direction</Text>
                </View>
                  <Direction/>
               </View>
            </View>
            </View>
            </View>

          <View style={{height:42,flexDirection:'row',gap:12}}>
              <Calender/>
            <View style={{justifyContent:'center'}}>
               <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Artist Name</Text>
            </View>
          </View>

          
            <View style={{height:48,borderRadius:104,borderWidth:1,borderColor:'rgba(71, 71, 71, 1)', backgroundColor: '#D4D4D41A',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>

               <View style={{flexDirection:'row',width:177,height:22,alignItems:'center',gap:8}}>
                <Drava/>
                <Text style={{color:'rgba(245, 237, 253, 1)',height:22,fontWeight:800,fontSize:16,alignContent:'center',marginBottom:1 }}>DRAVA, Kormagala</Text>
               </View>
               <View style={{height:32,width:72,borderRadius:44,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.25)',backgroundColor:'black',justifyContent:'center'}}>
               <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:10,textAlign:'center'}}>View More</Text>      
               </View>
            </View>
        </View>


<View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
  <Text style={{ color: "#F5EDFD", fontWeight: 700, fontSize: 18 }}>Event Details</Text>
  <View style={{ paddingTop: 20, gap: 5 }}>
    {eventDetail.map((detail, index) => (
      <View key={index} style={{ flexDirection: "row", gap: 4 }}>
        <Text 
          style={{
            color: "rgba(245, 237, 253, 1)",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 22,
          }}
        >
          •
        </Text>
        <Text
          style={{
            color: "rgba(245, 237, 253, 1)",
            fontWeight: 400,
            fontSize: 14,
            flex: 1,
          }}
        >
          {detail}
        </Text>
      </View>
    ))}
  </View>
</View>;

       <View>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1,marginLeft:15}} >Available Details</Text>
        <EventAvailableScroll/>
       </View>

  
      <View style={{gap:5}}>
      <View style={{height:'auto',paddingHorizontal:15}}>
       <TouchableOpacity onPress={()=>setTermsAndCondition(!TermsAndCondition)} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Terms & Conditions</Text>
        <View > {TermsAndCondition ? <Down/> : <Up/>}</View>  
       </TouchableOpacity>
       {TermsAndCondition && (
  <View style={{ gap: 5, paddingVertical: 5 }}>
    {[
      "1.Age Restriction: You must be at least 21 years old to attend the ElectroGroove Fusion Night. Valid photo identification (driver's license, passport, or government-issued ID) is required for entry. No exceptions will be made.",
      "2.Ticketing: All ticket sales are final and non-refundable. Lost or stolen tickets will not be replaced. Tickets are valid only for the date and time indicated on the ticket.",
      "3.Entry and Security: Entry to the event is subject to security checks. Prohibited items include weapons, drugs, outside food and beverages, and any other items deemed unsafe or inappropriate by event security. The event organizers reserve the right to refuse entry to anyone for any reason.",
      "4.Behavior and Conduct: All attendees are expected to behave respectfully towards fellow attendees, event staff, and performers. Any disruptive or unruly behavior may result in removal from the event without refund.",
    ].map((term, index) => (
      <Text
        key={index}
        style={{
          color: 'rgba(245, 237, 253, 1)',
          fontWeight: 400,
          fontSize: 14,
          flex: 1,
        }}
      >
        {term}
      </Text>
    ))}
  </View>
)}

       </View>


      < View style={{height:'auto'}}>
       <TouchableOpacity onPress={()=>setArtistImage(!ArtistImage)} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Artists</Text>
        <View >{ArtistImage ? <Down/>:<Up/>}</View>
       </TouchableOpacity>
       {ArtistImage &&
       
       <View >
        <ArtistScrollBox artistdata={artistdata}/>
         </View>
         }
       </View>

       <View style={{height:'auto',paddingHorizontal:15,}}>
       <TouchableOpacity onPress={()=>setShowManu(!ShowManu)} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Menu</Text>
        <View >{ShowManu ? <Down/>:<Up/>}</View>
       </TouchableOpacity>
       {ShowManu &&
       <View style={{marginBottom:10}}>
        <View style={{paddingTop:5,gap:5}}>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
                 Mutton Briyani
            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Chicken 65
            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
               Coke 500ml
              </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
                    Chicken Ghee Roast
               </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
              Tandoori Naan
              </Text>     
              </View>
        </View>
        <TouchableOpacity onPress={()=>setShowManu(false)} style={{height: 48, flex:1, borderRadius: 8, borderWidth: 0.8, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center',marginTop:5}}>
          <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12}}>View Menu Image</Text>
        </TouchableOpacity>
        </View>
         }
       </View>
       </View>
       <ScrollBox eventDetails={eventDetails} Title ='Other Events' Color='#F5EDFD' />
       <ScrollBox eventDetails={eventDetails} Title ='Discounts' Color='#F5EDFD' />
         
       <View style={{ flex:1, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#1B1B1B',alignItems:'center',justifyContent:'center',marginTop:5,marginHorizontal:15,gap:10,marginBottom:76}}>
            <View style={{width:330,gap:8,marginTop:20}} >
              <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18}}>Venue Details</Text>
                <View style={{paddingRight:50}}>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>{Address?.location},</Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>{Address?.address}</Text>
                {/* <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>88, 2nd Floor, Outer Ring Rd, near More</Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}> Supermarket, Marathahalli, Bengaluru, Karnataka </Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>560037</Text> */}
                </View>
            </View>
            <View style={{width:330,marginBottom:20}} >
            <View  style={{width:110,height:24,borderRadius:4,borderColor:'rgba(255, 255, 255,0.25)',borderWidth:1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:7,alignItems:'center'}}>
                <View><Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400,paddingBottom:1.5}}>Get Direction</Text>
                </View>
                 <View><Direction/>
                </View>
               </View>
               </View>
       </View>
      </ScrollView>
      <View style={{alignItems:'center',justifyContent:'center',backgroundColor: 'rgba(13, 13, 13, 0.8)', position:'absolute',bottom:0,width:'100%',height:76,borderTopWidth:1,borderColor:'rgba(71, 71, 71, 1)'}}>
            <View style={{height:45,paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>
               <View style={{gap:8,height:45,flexDirection:'row',flex:1,alignItems:'center'}}>
                 <Wallet/>
                 <View style={{height:28,flexDirection:'row',justifyContent:'space-between',alignItems:'baseline'}}>
                 <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:22,}}>₹1000 </Text>
                 <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18}}>Onwards</Text>
                </View>
                </View>
              <TouchableOpacity onPress={GoToEventBooking} style={{backgroundColor:'#D0A2F7',borderRadius:23.84,width:116,height:45,justifyContent:'center',alignItems:"center",}}>
                 <Text style={{color:'rgba(32, 32, 32, 1)',height:22,width:82,textAlign:'center',fontSize:16,fontWeight:700,lineHeight:21.82}}>BooK Now</Text>
              </TouchableOpacity>
              </View>
            
      </View>
      <BackButton setPopup={setPopup}  />
      <SharePopup  Popup={Popup} setPopup={setPopup}/>
    </View>
  )
}

export default SingleEventDetail

const styles = StyleSheet.create({})