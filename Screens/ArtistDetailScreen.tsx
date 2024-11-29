import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Imageassets } from '../assets/images/image';
import ArtistGalleryScroll from '../Components/ArtistGalleryScroll';
import ScrollBox from '../Components/ScrollBox';
import BackButton from '../Components/BackButton';

type ArtistDetailScreenProps = {
    navigation: any;
};

const ArtistDetailScreen: React.FC<ArtistDetailScreenProps> = ({ navigation }) => {
    const BackToPage = () =>{
        navigation.navigate('homescreen')
    }

    return (
        <>
           
            <ScrollView style={{ flex: 1, backgroundColor: "#0D0D0D", height: 'auto' }}>
                   
                <View style={{ height: 327, alignItems: 'center', marginHorizontal: 15, borderWidth: 1.32, borderColor: '#474747', borderRadius: 10, backgroundColor: '#D4D4D41A' }}>
                    <Image style={{ width: 200, height: '100%' }} source={Imageassets.ArtistSingleimg} />
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 700, color: '#F5EDFD', marginTop: 10 }} >Artist Name</Text>
                    <View style={{ height: 28, width: 66, borderRadius: 15, borderWidth: 1.2, borderColor: '#474747', backgroundColor: '#1B1B1B', gap: 8, alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                        <Text style={{ fontWeight: 400, fontSize: 12, color: '#F5EDFD', textAlign: 'center', alignItems: 'center', paddingBottom: 1.5 }} >Musician</Text>
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={{ color: '#F5EDFD', fontWeight: 400, fontSize: 14, }}>Born and raised in Bengaluru, Aarav was introduced to music at a very young age. His parents, both avid music enthusiasts, encouraged his early interest in music. At the age of six, Aarav began learning the sitar under the tutelage of the renowned sitar maestro, Pandit Ravi Narayan. His rigorous training in classical music provided a strong foundation that would later influence his distinctive musical style.</Text>
                        <Text style={{ color: '#F5EDFD', fontWeight: 400, fontSize: 14, }}>Aarav's journey into the world of indie music began during his teenage years. Fascinated by the sounds of artists like A.R. Rahman and bands like Indian Ocean, Aarav started experimenting with different genres. He began playing the guitar and quickly developed a passion for songwriting. His ability to seamlessly blend classical Indian music with contemporary styles set him apart from his peers.</Text>
                        <Text style={{ color: '#F5EDFD', fontWeight: 400, fontSize: 14, }}>Aarav Raj's music is characterized by its fusion of classical Indian elements with indie and alternative sounds. His compositions often feature intricate </Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 700, color: '#F5EDFD' }}>Social Links</Text>
                    <View style={{flexDirection:'row',height:42,width:313,gap:21,alignItems:'center',marginTop:10}}>
                        <View style={{height: 42, width: 42, borderRadius: 50, borderWidth: 0.8, borderColor: '#FFFFFF', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center'}}>
                            <Image  style={{height: 22, width: 22}}  source={Imageassets.SocialLink1}/>
                        </View>
                        <View style={{height: 42, width: 42, borderRadius: 50, borderWidth: 0.8, borderColor: '#FFFFFF', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center'}}>
                            <Image style={{height: 26, width: 26}}   source={Imageassets.SocialLink2}/>
                        </View>
                        <View style={{height: 42, width: 42, borderRadius: 50, borderWidth: 0.8, borderColor: '#FFFFFF', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center'}}>
                           <Image style={{height: 26, width: 26}}   source={Imageassets.SocialLink3}/>
                        </View>

                        <View style={{height:36, width: 121, borderRadius: 40, borderWidth: 0.8, borderColor: '#FFFFFF', backgroundColor: '#D4D4D41A',alignItems:'center',justifyContent:'center'}} >
                            <Text style={{color:'#F5EDFD',fontWeight:700,fontSize:14}}>Artist add Link</Text>
                        </View>
                    </View>
                </View>
                <ArtistGalleryScroll/>
                <ScrollBox Title ='Events' Color='#F5EDFD' />

            </ScrollView>
            <BackButton onPress={BackToPage}/>
        </>
    )
}

export default ArtistDetailScreen

const styles = StyleSheet.create({})