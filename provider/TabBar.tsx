import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Image,
  Modal,
  Alert,
} from "react-native";
import Svg, { Path } from "react-native-svg";


type TabBar = {
  state: any
  descriptors: any
  navigation : any
}

const TabBar = ({ state, descriptors, navigation }:TabBar) => {
    return (
      <View style={styles.tabBarContainer}>

        {state.routes.map((route:any, index:any) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  const getIcons = (value:string) =>{
    switch (route.name) {
        case 'Home':
          return  isFocused ?<Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
          <Path d="M13.6955 4.94194C13.3614 4.66031 12.9384 4.50586 12.5014 4.50586C12.0644 4.50586 11.6415 4.66031 11.3074 4.94194L5.74865 9.63183C5.54233 9.80572 5.37647 10.0226 5.26268 10.2672C5.14889 10.5119 5.0899 10.7784 5.08984 11.0483V18.711C5.08984 19.5066 5.73548 20.1522 6.53099 20.1522H9.00152C9.38374 20.1522 9.7503 20.0004 10.0206 19.7301C10.2908 19.4598 10.4427 19.0933 10.4427 18.711V15.4145C10.4427 14.8545 10.889 14.4 11.4449 14.3851H13.558C13.8263 14.3922 14.0812 14.5038 14.2684 14.6961C14.4556 14.8884 14.5603 15.1462 14.5602 15.4145V18.711C14.5602 19.5066 15.2059 20.1522 16.0014 20.1522H18.4719C18.8541 20.1522 19.2207 20.0004 19.4909 19.7301C19.7612 19.4598 19.913 19.0933 19.913 18.711V11.0474C19.913 10.7776 19.854 10.5111 19.7402 10.2664C19.6264 10.0218 19.4606 9.8049 19.2542 9.63101L13.6955 4.94194Z" fill="#F5EDFD"/>
          </Svg> : <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <Path d="M12.5014 5.55898C12.7969 5.55898 13.0829 5.66342 13.3089 5.85385L18.8674 10.5428L18.8676 10.5429C19.0071 10.6605 19.1192 10.8071 19.1962 10.9726C19.2731 11.138 19.313 11.3182 19.313 11.5006C19.313 11.5006 19.313 11.5007 19.313 11.5007V19.1642C19.313 19.3873 19.2244 19.6012 19.0667 19.7589C18.9089 19.9167 18.695 20.0053 18.4719 20.0053H16.0014C15.5372 20.0053 15.1602 19.6283 15.1602 19.1642V15.8679C15.1602 15.8678 15.1602 15.8677 15.1602 15.8677C15.1603 15.4429 14.9946 15.035 14.6983 14.7307C14.402 14.4263 13.9985 14.2497 13.5738 14.2385L13.5659 14.2383H13.558H11.4449H11.4369L11.4289 14.2385C10.5494 14.2619 9.84267 14.9811 9.84267 15.8677V19.1642C9.84267 19.3873 9.75405 19.6012 9.5963 19.7589C9.43856 19.9167 9.22461 20.0053 9.00152 20.0053H6.53099C6.06685 20.0053 5.68984 19.6283 5.68984 19.1642V11.5015C5.68984 11.5015 5.68984 11.5014 5.68984 11.5014C5.6899 11.319 5.72978 11.1388 5.80671 10.9734C5.88366 10.808 5.99581 10.6613 6.13532 10.5438L6.13556 10.5435L11.694 5.85385C11.92 5.66342 12.206 5.55898 12.5014 5.55898Z" stroke="#F5EDFD" stroke-width="1.2"/>
           </Svg> 
           case 'Events':
            return  isFocused ? <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Path d="M5 10.762H19.8427V7.46364C19.8427 7.02625 19.669 6.60677 19.3597 6.29749C19.0504 5.98821 18.6309 5.81445 18.1935 5.81445H6.64919C6.2118 5.81445 5.79232 5.98821 5.48304 6.29749C5.17375 6.60677 5 7.02625 5 7.46364V19.008C5 19.4454 5.17375 19.8649 5.48304 20.1741C5.79232 20.4834 6.2118 20.6572 6.64919 20.6572H12.4214" stroke="#D0A2F7" stroke-width="1.14175" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9.12109 4.16406V7.46244" stroke="#D0A2F7" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15.7227 4.16406V7.46244" stroke="#D0A2F7" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20.0875 14.6361C19.8065 14.3565 19.4489 14.1666 19.06 14.0902C18.671 14.0139 18.2681 14.0547 17.9023 14.2073C17.655 14.3063 17.4323 14.4547 17.2427 14.6444L16.9623 14.9247L16.6737 14.6444C16.3936 14.3634 16.0365 14.1719 15.6475 14.0941C15.2585 14.0163 14.8551 14.0557 14.4885 14.2073C14.2411 14.3063 14.0267 14.4547 13.8371 14.6444C13.0537 15.4195 13.0125 16.7306 14.002 17.7284L16.9623 20.6557L19.9308 17.7284C20.9204 16.7306 20.8709 15.4195 20.0875 14.6444V14.6361Z" stroke="#D0A2F7" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
              : <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Path d="M5 11.2152H19.8427V7.91677C19.8427 7.47938 19.669 7.0599 19.3597 6.75061C19.0504 6.44133 18.6309 6.26758 18.1935 6.26758H6.64919C6.2118 6.26758 5.79232 6.44133 5.48304 6.75061C5.17375 7.0599 5 7.47938 5 7.91677V19.4611C5 19.8985 5.17375 20.318 5.48304 20.6273C5.79232 20.9365 6.2118 21.1103 6.64919 21.1103H12.4214" stroke="#F5EDFD" stroke-width="1.14175" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9.12109 4.61719V7.91557" stroke="#F5EDFD" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15.7227 4.61719V7.91557" stroke="#F5EDFD" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20.0875 15.0893C19.8065 14.8097 19.4489 14.6197 19.06 14.5434C18.671 14.467 18.2681 14.5078 17.9023 14.6605C17.655 14.7594 17.4323 14.9078 17.2427 15.0975L16.9623 15.3779L16.6737 15.0975C16.3936 14.8165 16.0365 14.625 15.6475 14.5472C15.2585 14.4694 14.8551 14.5088 14.4885 14.6605C14.2411 14.7594 14.0267 14.9078 13.8371 15.0975C13.0537 15.8726 13.0125 17.1837 14.002 18.1815L16.9623 21.1088L19.9308 18.1815C20.9204 17.1837 20.8709 15.8726 20.0875 15.0975V15.0893Z" stroke="#F5EDFD" stroke-width="1.40181" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>

    case 'Venues':
    return  isFocused ? <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <Path d="M12.7113 18.4035C12.4926 18.4035 12.2829 18.3167 12.1282 18.162C11.9736 18.0074 11.8867 17.7976 11.8867 17.5789V14.2806C11.8867 14.1448 11.9202 14.0112 11.9842 13.8915C12.0482 13.7718 12.1408 13.6698 12.2537 13.5945L14.7274 11.9453C14.863 11.8549 15.0222 11.8066 15.1851 11.8066C15.348 11.8066 15.5072 11.8549 15.6428 11.9453L18.1165 13.5945C18.2294 13.6698 18.322 13.7718 18.386 13.8915C18.45 14.0112 18.4835 14.1448 18.4835 14.2806V17.5789C18.4835 17.7976 18.3966 18.0074 18.242 18.162C18.0873 18.3167 17.8776 18.4035 17.6589 18.4035H12.7113Z" fill="#D0A2F7"/>
    <Path d="M15.1857 8.50692C15.1857 6.75735 14.4907 5.07944 13.2536 3.8423C12.0164 2.60517 10.3385 1.91016 8.58895 1.91016C6.83938 1.91016 5.16147 2.60517 3.92433 3.8423C2.6872 5.07944 1.99219 6.75735 1.99219 8.50692C1.99219 12.6241 6.55962 16.912 8.09337 18.2363C8.23633 18.3435 8.41025 18.4014 8.58895 18.4012" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M15.1836 18.4015V15.9277" stroke="#0D0D0D" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M8.58707 10.9827C9.9533 10.9827 11.0609 9.87518 11.0609 8.50894C11.0609 7.14271 9.9533 6.03516 8.58707 6.03516C7.22083 6.03516 6.11328 7.14271 6.11328 8.50894C6.11328 9.87518 7.22083 10.9827 8.58707 10.9827Z" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>  : <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
 <Path d="M12.7113 18.4035C12.4926 18.4035 12.2829 18.3167 12.1282 18.162C11.9736 18.0074 11.8867 17.7976 11.8867 17.5789V14.2806C11.8867 14.1448 11.9202 14.0112 11.9842 13.8915C12.0482 13.7718 12.1408 13.6698 12.2537 13.5945L14.7274 11.9453C14.863 11.8549 15.0222 11.8066 15.1851 11.8066C15.348 11.8066 15.5072 11.8549 15.6428 11.9453L18.1165 13.5945C18.2294 13.6698 18.322 13.7718 18.386 13.8915C18.45 14.0112 18.4835 14.1448 18.4835 14.2806V17.5789C18.4835 17.7976 18.3966 18.0074 18.242 18.162C18.0873 18.3167 17.8776 18.4035 17.6589 18.4035H12.7113Z" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15.1857 8.50692C15.1857 6.75735 14.4907 5.07944 13.2536 3.8423C12.0164 2.60517 10.3385 1.91016 8.58895 1.91016C6.83938 1.91016 5.16147 2.60517 3.92433 3.8423C2.6872 5.07944 1.99219 6.75735 1.99219 8.50692C1.99219 12.6241 6.55962 16.912 8.09337 18.2363C8.23633 18.3435 8.41025 18.4014 8.58895 18.4012" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15.1836 18.4015V15.9277" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M8.58707 10.9827C9.9533 10.9827 11.0609 9.87518 11.0609 8.50894C11.0609 7.14271 9.9533 6.03516 8.58707 6.03516C7.22083 6.03516 6.11328 7.14271 6.11328 8.50894C6.11328 9.87518 7.22083 10.9827 8.58707 10.9827Z" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
           case 'Artists':
            return  isFocused ? <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
            <Path d="M14.8324 20.4035C14.6137 20.4035 14.404 20.3167 14.2493 20.162C14.0947 20.0074 14.0078 19.7976 14.0078 19.5789V16.2806C14.0078 16.1448 14.0413 16.0112 14.1053 15.8915C14.1693 15.7718 14.2619 15.6698 14.3748 15.5945L16.8485 13.9453C16.984 13.8549 17.1433 13.8066 17.3062 13.8066C17.4691 13.8066 17.6283 13.8549 17.7638 13.9453L20.2376 15.5945C20.3505 15.6698 20.4431 15.7718 20.5071 15.8915C20.5711 16.0112 20.6046 16.1448 20.6046 16.2806V19.5789C20.6046 19.7976 20.5177 20.0074 20.3631 20.162C20.2084 20.3167 19.9987 20.4035 19.78 20.4035H14.8324Z" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.3068 10.5069C17.3068 8.75735 16.6118 7.07944 15.3747 5.8423C14.1375 4.60517 12.4596 3.91016 10.71 3.91016C8.96047 3.91016 7.28256 4.60517 6.04543 5.8423C4.8083 7.07944 4.11328 8.75735 4.11328 10.5069C4.11328 14.6241 8.68072 18.912 10.2145 20.2363C10.3574 20.3435 10.5313 20.4014 10.71 20.4012" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.3047 20.4015V17.9277" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.7082 12.9827C12.0744 12.9827 13.1819 11.8752 13.1819 10.5089C13.1819 9.14271 12.0744 8.03516 10.7082 8.03516C9.34193 8.03516 8.23438 9.14271 8.23438 10.5089C8.23438 11.8752 9.34193 12.9827 10.7082 12.9827Z" stroke="#D0A2F7" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
             : <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
            <Path d="M14.8324 20.8567C14.6137 20.8567 14.404 20.7698 14.2493 20.6151C14.0947 20.4605 14.0078 20.2508 14.0078 20.0321V16.7337C14.0078 16.598 14.0413 16.4643 14.1053 16.3446C14.1693 16.225 14.2619 16.1229 14.3748 16.0476L16.8485 14.3984C16.984 14.308 17.1433 14.2598 17.3062 14.2598C17.4691 14.2598 17.6283 14.308 17.7638 14.3984L20.2376 16.0476C20.3505 16.1229 20.4431 16.225 20.5071 16.3446C20.5711 16.4643 20.6046 16.598 20.6046 16.7337V20.0321C20.6046 20.2508 20.5177 20.4605 20.3631 20.6151C20.2084 20.7698 19.9987 20.8567 19.78 20.8567H14.8324Z" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.3068 10.96C17.3068 9.21048 16.6118 7.53256 15.3747 6.29543C14.1375 5.0583 12.4596 4.36328 10.71 4.36328C8.96047 4.36328 7.28256 5.0583 6.04543 6.29543C4.8083 7.53256 4.11328 9.21048 4.11328 10.96C4.11328 15.0773 8.68072 19.3651 10.2145 20.6894C10.3574 20.7967 10.5313 20.8545 10.71 20.8544" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17.3047 20.8546V18.3809" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.7082 13.4359C12.0744 13.4359 13.1819 12.3283 13.1819 10.9621C13.1819 9.59583 12.0744 8.48828 10.7082 8.48828C9.34193 8.48828 8.23438 9.59583 8.23438 10.9621C8.23438 12.3283 9.34193 13.4359 10.7082 13.4359Z" stroke="#F5EDFD" stroke-width="1.07832" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
             

            case 'Profile':
            return  isFocused ? <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Path d="M12.2428 4.55273C13.3126 4.55273 14.3385 4.97769 15.095 5.73413C15.8514 6.49056 16.2764 7.5165 16.2764 8.58626C16.2764 9.65602 15.8514 10.682 15.095 11.4384C14.3385 12.1948 13.3126 12.6198 12.2428 12.6198C11.1731 12.6198 10.1471 12.1948 9.3907 11.4384C8.63426 10.682 8.20931 9.65602 8.20931 8.58626C8.20931 7.5165 8.63426 6.49056 9.3907 5.73413C10.1471 4.97769 11.1731 4.55273 12.2428 4.55273ZM12.2428 14.6365C16.6999 14.6365 20.3099 16.4415 20.3099 18.6701V20.6868H4.17578V18.6701C4.17578 16.4415 7.78579 14.6365 12.2428 14.6365Z" fill="#D0A2F7"/>
            </Svg>
             : <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
<Path d="M12.2428 4.6038C13.1789 4.6038 14.0766 4.97564 14.7384 5.63752C15.4003 6.2994 15.7722 7.1971 15.7722 8.13313C15.7722 9.06917 15.4003 9.96687 14.7384 10.6288C14.0766 11.2906 13.1789 11.6625 12.2428 11.6625C11.3068 11.6625 10.4091 11.2906 9.74721 10.6288C9.08534 9.96687 8.7135 9.06917 8.7135 8.13313C8.7135 7.1971 9.08534 6.2994 9.74721 5.63752C10.4091 4.97564 11.3068 4.6038 12.2428 4.6038ZM12.2428 14.6876C14.4101 14.6876 16.3464 15.1275 17.7223 15.8154C19.1281 16.5184 19.8057 17.3964 19.8057 18.2169V19.7295H4.67997V18.2169C4.67997 17.3964 5.35754 16.5184 6.76339 15.8154C8.13922 15.1275 10.0755 14.6876 12.2428 14.6876Z" stroke="#F5EDFD" stroke-width="1.00838"/>
</Svg>
       
      }
      return  null;
  }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
                {getIcons(route.name)}
              <Text style={{ color: isFocused ? '#9B51E0' : 'gray', fontSize: 12 }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    },
    tabBarContainer: {
      flexDirection: 'row',
      height: 58,
      backgroundColor: '#000',
      borderTopWidth:2,
      borderColor:'#474747',
      elevation: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: -2 },
      shadowRadius: 10,
    },
    tabItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default TabBar;