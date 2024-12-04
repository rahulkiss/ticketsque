import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Imageassets } from '../../assets//images/image';
import ArtistGalleryScroll from '../Components/ArtistGalleryScroll';
import ScrollBox from '../Components/ScrollBox';
import BackButton from '../Components/BackButton';
import SharePopup from '../provider/SharePopup';

type ArtistDetailScreenProps = {
    navigation: any;
};

const ArtistDetailScreen: React.FC<ArtistDetailScreenProps> = ({ navigation }) => {
    const [Popup,setPopup]=useState(false)
    const eventDetails = [
        {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
        {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
        {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'},
        {title:'ElectroGroove Fusion Night Geater fun unlimited bre...',image:Imageassets.PartyImage,palce:'TOCA, Koramangala',date:' 24th March, 6:30',price:'1000'}
    ];
    

    return (
        <>
            <ScrollView  showsVerticalScrollIndicator={false} style={styles.scrollView} >
                <View style={styles.artistImageContainer}>
                    <Image style={styles.artistImage} source={Imageassets.ArtistSingleimg} />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.artistName}>Artist Name</Text>
                    <View style={styles.professionBadge}>
                        <Text style={styles.professionText}>Musician</Text>
                    </View>
                    <View style={styles.bioContainer}>
                        <Text style={styles.bioText}>
                            Born and raised in Bengaluru, Aarav was introduced to music at a very young age...
                        </Text>
                        <Text style={styles.bioText}>
                            Aarav's journey into the world of indie music began during his teenage years...
                        </Text>
                        <Text style={styles.bioText}>
                            Aarav Raj's music is characterized by its fusion of classical Indian elements...
                        </Text>
                    </View>
                </View>

                <View style={styles.socialLinksContainer}>
                    <Text style={styles.socialLinksTitle}>Social Links</Text>
                    <View style={styles.socialLinks}>
                        <View style={styles.socialLink}>
                            <Image style={styles.socialIcon} source={Imageassets.SocialLink1} />
                        </View>
                        <View style={styles.socialLink}>
                            <Image style={styles.socialIcon} source={Imageassets.SocialLink2} />
                        </View>
                        <View style={styles.socialLink}>
                            <Image style={styles.socialIcon} source={Imageassets.SocialLink3} />
                        </View>
                        <View style={styles.addLink}>
                            <Text style={styles.addLinkText}>Artist add Link</Text>
                        </View>
                    </View>
                </View>

                <ArtistGalleryScroll />
                <ScrollBox eventDetails={eventDetails} Title="Events" Color="#F5EDFD" />
            </ScrollView>

            <BackButton setPopup={setPopup}  />
            <SharePopup  Popup={Popup} setPopup={setPopup}/>
        </>
    );
};

export default ArtistDetailScreen;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: 'black',
        height: 'auto',
    },
    artistImageContainer: {
        height: 327,
        alignItems: 'center',
        marginHorizontal: 15,
        borderWidth: 1.32,
        borderColor: '#474747',
        borderRadius: 10,
        backgroundColor: '#D4D4D41A',
    },
    artistImage: {
        width: 200,
        height: '100%',
    },
    detailsContainer: {
        marginHorizontal: 15,
    },
    artistName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#F5EDFD',
        marginTop: 10,
    },
    professionBadge: {
        height: 28,
        width: 66,
        borderRadius: 15,
        borderWidth: 1.2,
        borderColor: '#474747',
        backgroundColor: '#1B1B1B',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    professionText: {
        fontWeight: '400',
        fontSize: 12,
        color: '#F5EDFD',
        textAlign: 'center',
        paddingBottom: 1.5,
    },
    bioContainer: {
        gap: 8,
    },
    bioText: {
        color: '#F5EDFD',
        fontWeight: '400',
        fontSize: 14,
    },
    socialLinksContainer: {
        marginHorizontal: 15,
        marginVertical: 8,
    },
    socialLinksTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#F5EDFD',
    },
    socialLinks: {
        flexDirection: 'row',
        height: 42,
        width: 313,
        gap: 21,
        alignItems: 'center',
        marginTop: 10,
    },
    socialLink: {
        height: 42,
        width: 42,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: '#FFFFFF',
        backgroundColor: '#D4D4D41A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        height: 22,
        width: 22,
    },
    addLink: {
        height: 36,
        width: 121,
        borderRadius: 40,
        borderWidth: 0.8,
        borderColor: '#FFFFFF',
        backgroundColor: '#D4D4D41A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addLinkText: {
        color: '#F5EDFD',
        fontWeight: '700',
        fontSize: 14,
    },
});
