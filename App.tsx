import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './Screens/LogInScreen';
import OtpVerifyScreen from './Screens/OtpVerifyScreen';
import EnterDetailScreen from './Screens/EnterDetailScreen';
import HomeScreen from './Screens/HomeScreen';
import NotificationScreen from './Screens/NotificationScreen';
import SelectCity from './Screens/SelectCity';
import SearchScreen from './Screens/SearchScreen';
import Profile from './Screens/Profile';
import SupportScreen from './Screens/SupportScreen';
import MyProfile from './Screens/MyProfile';
import MyTickets from './Screens/MyTickets';
import TicketDetailsScreen from './Screens/TicketDetailsScreen';
import ReservationScreen from './Screens/ReservationScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from './provider/TabBar';
import EventScreen from './Screens/EventScreen';
import VenueScreen from './Screens/VenueScreen';
import ArtistScreen from './Screens/ArtistScreen';
import ArtistDetailScreen from './Screens/ArtistDetailScreen';
import SingleEventDetail from './Screens/SingleEventDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VenueDetailScreen from './Screens/VenueDetailScreen';
import TermsAndConditionScreen from './Screens/TermsAndConditionScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Screens = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor="#212121" />
    <SafeAreaView style={{ flex: 0, backgroundColor: "#1231A6" }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Home", headerShown: false }}
        />
        <Tab.Screen
          name="Events"
          component={EventScreen}
          options={{ tabBarLabel: "Events", headerShown: false }}
        />
        <Tab.Screen
          name="Venues"
          component={VenueScreen}
          options={{ tabBarLabel: "Venues", headerShown: false }}
        />
        <Tab.Screen
          name="Artists"
          component={ArtistScreen}
          options={{ tabBarLabel: "Artists", headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: "Profile", headerShown: false }}
        />
       
      </Tab.Navigator>
    </SafeAreaView>
  </React.Fragment>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#212121" />
        
        <Stack.Navigator initialRouteName="homescreen">
          <Stack.Screen
            name="Loginscreen"
            component={LogInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="otpverifyscreen"
            component={OtpVerifyScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="enterdetailscreen"
            component={EnterDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="artistdetailscreen"
            component={ArtistDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="singleeventdetail"
            component={SingleEventDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="venudetailscreen"
            component={VenueDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tearms & Conditions"
            component={TermsAndConditionScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Select City" component={SelectCity}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Support & Contact Us" component={SupportScreen}/>
        <Stack.Screen name="My Profile" component={MyProfile}/>
        <Stack.Screen name="My Tickets" component={MyTickets}/>
        <Stack.Screen name="Tickets Details" component={TicketDetailsScreen}/>
        <Stack.Screen name="Reservation" component={ReservationScreen}/>
        
          <Stack.Screen name="homescreen" component={Screens}   options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}