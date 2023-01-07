import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCelib from '../components/home/HomeCelib';
import ItemScreen from '../components/ItemScreen/ItemScreenCelib';
import Home2 from '../components/home/Home2';
import Search from '../components/search/Search';
import Focus from '../components/focus/Focus';
import SVGIcon from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import { changeTheme } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import ProfileView from '../components/profileView/ProfileView';
import MyChannels from '../components/myChannels/MyChannels';

const centerIconSize = 50;

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const bottomNavHeight =
  Dimensions.get( 'screen' ).height - Dimensions.get( 'window' ).height;

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeCelib"
      screenOptions={( { route } ) => ( {
        headerShown: false,
      } )}>
      <Stack.Screen name="HomeCelib" component={HomeCelib} />
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  );
};


const CustomTabButton = ( { children, onPress } ) => (
  <View style={styles.centerBtn}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.centerBtnChild}>{children}</View>
    </TouchableOpacity>
  </View>
);

const HomeTabNavigator = () => {
  const dispatch = useDispatch();
  const themes = useSelector( state => state.appReducer.theme );
  return (
    <View
      style={{ height: Dimensions.get( 'window' ).height, position: 'relative' }}>
      <Tab.Navigator
        // initialRouteName="User"
        initialRouteName="Home"
        screenOptions={( { route } ) => ( {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#212F3D',
            borderTopWidth: 0,
            position: 'absolute',
            bottom: 5,
            left: 10,
            right: 10,
            borderRadius: 30,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#fff',
        } )}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ( { color, size } ) => (
              <SVGIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={{
            tabBarIcon: ( { color, size } ) => (
              <SVGIcon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Focus"
          component={Focus}
          listeners={( { navigation } ) => ( {
            tabPress: ( e ) => {
              e.preventDefault();
              navigation.navigate( "FocusCelibrity" ); 
            },
          } )}
          options={{
            tabBarIcon: ( { color } ) => (
              <SVGIcon name="disc" color={color} size={centerIconSize} />
            ),
            tabBarButton: props => <CustomTabButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Play"
          component={MyChannels}
          options={{
            tabBarIcon: ( { color, size } ) => (
              <SVGIcon name="play-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={ProfileView}
          options={{
            tabBarIcon: ( { color, size } ) => (
              <SVGIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const mapStatetoProps = state => {
  return {
    theme: state.appReducer.theme,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeTheme: theme => dispatch( changeTheme( theme ) ),
  };
};

export default connect( mapStatetoProps, mapDispatchToProps )( HomeTabNavigator );

const styles = StyleSheet.create( {
  centerBtn: {
    top: -( centerIconSize / 4 ),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212F3D',
    borderRadius: 30,
    width: centerIconSize + 10,
    height: centerIconSize + 10,
  },
  centerBtnChild: {
    width: centerIconSize + 10,
    height: centerIconSize + 10,
  },
} );
