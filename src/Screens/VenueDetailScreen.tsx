import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Imageassets } from '../../assets//images/image'
import { ScrollView } from 'react-native-gesture-handler'
import EventAvailableScroll from '../Components/EventAvailableScroll'
import ArtistScrollBox from '../Components/ArtistScrollBox'
import ScrollBox from '../Components/ScrollBox'
import BackButton from '../Components/BackButton'
import SharePopup from '../provider/SharePopup'
import MenuScroll from '../Components/MenuScroll'
import { useNavigation } from '@react-navigation/native'
import CarouselBar from '../provider/CarouselBar'
import Calender from '../../assets/svg/DateIcon.svg'
import Location from '../../assets/svg/locationIcon.svg'
import Direction from '../../assets/svg/GetDirections.svg'
import Drava from '../../assets/svg/Drava.svg'
import Down from '../../assets/svg/DropDown.svg'
import Up from '../../assets/svg/Drop_Up.svg'





const VenueDetailScreen = () => {
   const [TermsAndCondition,setTermsAndCondition] = useState(false)
   const [ArtistImage,setArtistImage] = useState(true)
   const [ShowManu,setShowManu] = useState(true)
   const [Popup,setPopup]=useState(false)
   const  data = 
   [{image:Imageassets.PartyImage,},
     {image:Imageassets.ArtistGalleryimg1,},
     {image:Imageassets.ArtistGalleryimg3,},
   ]
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
   const  navigator = useNavigation();
  
  return (
    <View style={{flex:1,backgroundColor: "black" }}>
      <ScrollView style={{ backgroundColor: "black" }}>

        <View style={{ alignItems: 'center', justifyContent: 'center',height: 364, }}>
        <CarouselBar carousal={'Event'} imageList={data} position={'absolute'} bottom={10} bgcolor={'rgba(212, 212, 212, 0.1)'} carousalwidth={1}/>
        </View>
        <View style={{ maxHeight: 423, gap: 13, paddingHorizontal: 15, paddingTop: 15 }}>
          <Text style={{ color: '#F5EDFD', fontWeight: 700, fontSize: 20 }}>Venue Name</Text>

          
             <View style={{height:42,flexDirection:'row',gap:12}}>
             <View style={{height: 42, width: 42, borderRadius: 50, borderWidth: 0.8, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center'}}>
                            <Location/>
            </View>
            <View  style={{flexDirection:"row",justifyContent:'space-between',flex:1}}>
            <View style={{justifyContent:'space-between'}}>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>Happy Brew</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize:11}}>Kormangala, Bengaluru.</Text>
            </View>
            <View style={{height:42,justifyContent:"center",}}>

              <View  style={{width:110,height:24,borderRadius:4,borderColor:'rgba(255, 255, 255,0.25)',borderWidth:1,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:7,alignItems:'center'}}>
                <View><Text style={{color:'rgba(245, 237, 253, 1)',fontSize:10,fontWeight:400,paddingBottom:1.5}}>Get Direction</Text>
                </View>
                 <View><Direction/>
                </View>
               </View>
            </View>
            </View>
            </View>

            <View style={{height:42,flexDirection:'row',gap:12}}>
          <View style={{height: 42, width: 42, borderRadius: 50, borderWidth: 0.8, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#D4D4D41A',alignItems:'center',}}>
            <Calender/>
        </View>

            <View style={{justifyContent:'space-between'}}>
            <Text  style={{color:'rgba(245, 237, 253, 1)',fontWeight:700,fontSize:16}}>20/01/2050</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize:11}}>All Days</Text>
            </View>

          </View>

        </View>

       <View style={{paddingHorizontal:15,paddingVertical:20}}>
        <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18,}}>Venue Details</Text>
        <View style={{paddingTop:10,gap:5}}>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Live DJ Sets: Our lineup features some of the most talented and sought-after DJs in the industry, each bringing their unique style to the stage. From deep house to techno, trance to funk-infused beats, they'll take you on an unforgettable sonic journey.
            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            State-of-the-Art Visuals: Prepare to be mesmerized by cutting-edge visual projections that sync perfectly with the music, creating a multisensory experience that will transport you to a world of vibrant colors and captivating visuals.            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Interactive Dance Zones: We've set up dedicated dance zones with immersive lighting and pulsating sound systems, ensuring that you'll find the perfect spot to let loose and dance to your heart's content.            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Artisanal Food and Drinks: Take a break from the dance floor and indulge in a variety of delectable bites and crafted cocktails from our top-notch culinary and mixology teams.            </Text>
          </View>
          <View style={{flexDirection:'row',gap:4}} >
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:500,fontSize: 20,lineHeight: 22,}}>•</Text>
            <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>
            Chillout Lounge: Need a breather? Visit our chillout lounge area, where you can relax, recharge, and socialize with fellow music enthusiasts. Unwind while still being enveloped in the event's electrifying atmosphere.    </Text>     
              </View>
        </View>
       </View>
       


      <View style={{gap:5}}>
      <View style={{height:'auto',paddingHorizontal:15}}>
       <TouchableOpacity  onPress={()=>setTermsAndCondition(!TermsAndCondition)} style={{flexDirection:'row',justifyContent:'center'}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Terms & Conditions</Text>
         <View >{TermsAndCondition?<Down/>:<Up/>}</View>  
       </TouchableOpacity>
       {TermsAndCondition &&
       <View style={{gap:5,paddingVertical:5}}>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>1. Age Restriction: You must be at least 21 years old to attend the ElectroGroove Fusion Night. Valid photo identification (driver's license, passport, or government- issued ID) is required for entry. No exceptions will be made.
        </Text>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>2. Ticketing: All ticket sales are final and non- refundable. Lost or stolen tickets will not be replaced. Tickets are valid only for the date and time indicated on the ticket.
        </Text>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>3. Entry and Security: Entry to the event is subject to security checks. Prohibited items include weapons, drugs, outside food and beverages, and any other items deemed unsafe or inappropriate by event security. The event organizers reserve the right to refuse entry to anyone for any reason.
        </Text>
        <Text style={{color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:14,flex:1}}>4. Behavior and Conduct: All attendees are expected to behave respectfully towards fellow attendees, event staff, and performers. Any disruptive or unruly behavior may result in removal from the event without refund</Text>
       </View>
         }
       </View>


      < View style={{height:'auto',}}>
       <TouchableOpacity onPress={()=>setArtistImage(!ArtistImage)} style={{flexDirection:'row',justifyContent:'center',paddingHorizontal:15}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Events</Text>
         <View >{ArtistImage?<Down/>:<Up/>}</View>  
       </TouchableOpacity>
       {ArtistImage &&
       
       <View >
        <ArtistScrollBox artistdata={artistdata}/>
         </View>
         }
       </View>

       <View style={{height:'auto'}}>
       <TouchableOpacity onPress={()=>setShowManu(!ShowManu)} style={{flexDirection:'row',justifyContent:'center',paddingHorizontal:15,}}>
        <Text  style={{color:'#F5EDFD',fontWeight:700,fontSize:18,flex:1}} >Menu</Text>
        <View > {ShowManu?<Down/>:<Up/>}</View>
       </TouchableOpacity>
       {ShowManu &&
            <View >
            <MenuScroll/>
             </View>
         }
       </View>
       
       <ScrollBox eventDetails={eventDetails} padding={3} Title ='Events' Color='#F5EDFD' />
       </View>
         
       <View style={{height:369, flex:1, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#1B1B1B',alignItems:'center',justifyContent:'center',marginTop:5,marginHorizontal:15,gap:8,marginBottom:10}}>
            <View style={{height: 121,width:330,gap:16}} >
              <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18}}>Venue Details</Text>
                <View>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>The Big Baadshah,</Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>88, 2nd Floor, Outer Ring Rd, near More</Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}> Supermarket, Marathahalli, Bengaluru, Karnataka </Text>
                <Text style={{color:'#F5EDFD',fontWeight:400,fontSize:14}}>560037</Text>
                </View>
            </View>
            <View>
                <Image source={Imageassets.LocationMap}/>
            </View>
         </View>

         <View style={{height:193, flex:1, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.25)', backgroundColor: '#1B1B1B',alignItems:'center',justifyContent:'center',marginTop:5,marginHorizontal:15,gap:8,marginBottom:160}}>
            <View style={{height: 153,width:330,gap:16}} >
              <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:18}}>Venue Tags</Text>
                 <View style={{height: 112,width:330,gap:9,flexDirection:'row',flexWrap:'wrap'}}>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,width:92}}>Pub & Parties</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>Dj Event</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>Night Club</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>Indiranagar(22)</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>M G Road(08)</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>Church Street(11)</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>M G Road(08)</Text></View>
                    <View><Text style={{borderRadius:18,borderColor:'rgba(71, 71, 71, 1)',borderWidth:0.8,backgroundColor:'black',color:'rgba(245, 237, 253, 1)',fontWeight:400,fontSize:12,paddingHorizontal:9,paddingVertical:6,minWidth:20}}>Church Street(11)</Text></View>
                    
                 </View>
            </View>
         </View>


      </ScrollView>
      <View style={{alignItems:'center',justifyContent:'center',backgroundColor: 'rgba(13, 13, 13, 0.8)', position:'absolute',bottom:0,width:'100%',height:76,borderTopWidth:1,borderColor:'rgba(71, 71, 71, 1)'}}>
            <View style={{height:45,paddingHorizontal:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>
              <TouchableOpacity onPress={()=>navigator.navigate('Reservation')} style={{backgroundColor:'#D0A2F7',borderRadius:23.84,flex:1,height:45,justifyContent:'center',alignItems:"center",}}>
                 <Text style={{color:'rgba(32, 32, 32, 1)',height:22,width:137,textAlign:'center',fontSize:16,fontWeight:700,lineHeight:21.82}}>Reserve Your Spot</Text>
              </TouchableOpacity>
              </View>
            
      </View>
      <BackButton setPopup={setPopup}  />
      <SharePopup  Popup={Popup} setPopup={setPopup}/>
    </View>
  )
}

export default VenueDetailScreen

const styles = StyleSheet.create({})