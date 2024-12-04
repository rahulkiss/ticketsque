import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './src/Screens/LogInScreen';
import OtpVerifyScreen from './src/Screens/OtpVerifyScreen';
import EnterDetailScreen from './src/Screens/EnterDetailScreen';
import HomeScreen from './src/Screens/HomeScreen';
import NotificationScreen from './src/Screens/NotificationScreen';
import SelectCity from './src/Screens/SelectCity';
import SearchScreen from './src/Screens/SearchScreen';
import Profile from './src/Screens/Profile';
import SupportScreen from './src/Screens/SupportScreen';
import MyProfile from './src/Screens/MyProfile';
import MyTickets from './src/Screens/MyTickets';
import TicketDetailsScreen from './src/Screens/TicketDetailsScreen';
import ReservationScreen from './src/Screens/ReservationScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from './src/provider/TabBar';
import EventScreen from './src/Screens/EventScreen';
import VenueScreen from './src/Screens/VenueScreen';
import ArtistScreen from './src/Screens/ArtistScreen';
import ArtistDetailScreen from './src/Screens/ArtistDetailScreen';
import SingleEventDetail from './src/Screens/SingleEventDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VenueDetailScreen from './src/Screens/VenueDetailScreen';
import TermsAndConditionScreen from './src/Screens/TermsAndConditionScreen';

import Booking from './src/Screens/BookingDetailScreen';
import EventBookingScreen from './src/Screens/EventBookingScreen';
import TicketChooseScreen from './src/Screens/TicketChooseScreen';
import EventPaymentScreen from './src/Screens/EventPaymentScreen';
import BookingConfirmed from './src/Screens/BookingConfirmed';
import PaymentPending from './src/Screens/PaymentPending';
import SomethingWentWrong from './src/Screens/SomethingWentWrong';
import SessionExpired from './src/Screens/SessionExpired';
import ReservationSuccess from './src/Screens/ReservationSuccess';

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
        <Stack.Navigator initialRouteName="Loginscreen" screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'black' },
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: { opacity: current.progress },
          }),
        }} >
          <Stack.Screen name="Loginscreen" component={LogInScreen} />
          <Stack.Screen name="otpverifyscreen" component={OtpVerifyScreen}/>
          <Stack.Screen name="enterdetailscreen" component={EnterDetailScreen}/>
          <Stack.Screen name="artistdetailscreen" component={ArtistDetailScreen}/>
          <Stack.Screen name="singleeventdetail" component={SingleEventDetail}/>
          <Stack.Screen name="venudetailscreen" component={VenueDetailScreen}/>
          <Stack.Screen name="Tearms & Conditions" component={TermsAndConditionScreen}/>
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="Select City" component={SelectCity} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Support & Contact Us" component={SupportScreen} />
          <Stack.Screen name="My Profile" component={MyProfile} />
          <Stack.Screen name="My Tickets" component={MyTickets} />
          <Stack.Screen name="Tickets Details" component={TicketDetailsScreen} />
          <Stack.Screen name="Reservation" component={ReservationScreen} />
          <Stack.Screen name="booking" component={Booking} />
          <Stack.Screen name='EventBooking' component={EventBookingScreen} />
          <Stack.Screen name='choose Ticket' component={TicketChooseScreen} />
          <Stack.Screen name='eventpayment' component={EventPaymentScreen} />
          <Stack.Screen name='bookingConfirmed' component={BookingConfirmed} />
          <Stack.Screen name='payment pending' component={PaymentPending} />
          <Stack.Screen name='went wrong' component={SomethingWentWrong} />
          <Stack.Screen name='session expired' component={SessionExpired} />
          <Stack.Screen name='reservationSuccess' component={ReservationSuccess} />


          <Stack.Screen name="homescreen" component={Screens} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}