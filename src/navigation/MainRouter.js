/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabNavigator from './HomeTabNavigator';
import SplashScreen from '../components/splashScreen/SplashScreen';
import OpenApp from '../components/loginSignup/OpenApp';
import OpenAppVIP from '../components/loginSignup/OpenAppVIP';
import LogIn from '../components/loginSignup/LogIn';
import SignUp from '../components/loginSignup/SignUp';
import OpenCamera from '../components/loginSignup/OpenCamera';
import UploadThumblinImage from '../components/loginSignup/UploadThumblinImage';
import SignUpWithEmail1 from '../components/loginSignup/SignUpWithEmail1';
import SignUpWithEmail2 from '../components/loginSignup/SignUpWithEmail2';
import SignUpWithEmailVIP from '../components/loginSignup/SignUpWithEmailVIP';
import UploadVideoIntro from '../components/loginSignup/UploadVideoIntro';
import SignUpWithEmail3 from '../components/loginSignup/SignUpWithEmail3';
import LogInWithEmail from '../components/loginSignup/LogInWithEmail';
import LogInPassCode from '../components/loginSignup/LogInPassCode';
import AccountSettings from '../components/settings/AccountSettings';
import ProfileSetting from '../components/settings/ProfileSetting';
import NameAndDescription from '../components/settings/NameAndDescription';
import EmailSetting from '../components/settings/EmailSetting';
import ProfilePicSettings from '../components/settings/ProfilePicSettings';
import CategorySelection from '../components/settings/CategorySelection';
import BankDetailsSettings from '../components/settings/BankDetailsSettings';
import AddBankDetails from '../components/settings/AddBankDetails';
import SelectAccount from '../components/settings/SelectAccount';
import Subscriptions from '../components/settings/Subscriptions';
import NotificationSettings from '../components/settings/NotificationSettings';
import ThemeSettings from '../components/settings/ThemeSettings';
import SecurityPrivacy from '../components/settings/SecurityPrivacy';
import TermsOfService from '../components/settings/TermsOfService';
import FaqQuestions from '../components/settings/FaqQuestions';
import FaqAnswer from '../components/settings/FaqAnswer';
import Home from '../components/home/NewHome';
import ProfileSettingCelibrity from '../components/settings/ProfileSettingCelibrity';
import HomeTabNavigatorUser from './HomeTabNavigatorUser';
import VideoFeed from '../components/videoFeed/VideoFeed';
import ShowContentCatagoryWise from '../components/showContentCatagoryWise/ShowContentCatagoryWise';
import Earnings from '../components/settings/Earnings';
import VideoIntroSettings from '../components/settings/VideoIntroSettings';
import OpenGalary from '../components/settings/OpenGalary';
import VideoFeedEdit from '../components/settings/VideoFeedEdit';
import VideoEdit from '../components/settings/VideoEdit';
import FocusCelibrity from '../components/celibrityFocus/FocusCelibrity';
import ProfileViewUser from '../components/profileView/ProfileViewUser';
import StartLiveStream from '../components/liveStream/StartLiveStream';
import OpenCameraForLiveStream from '../components/liveStream/OpenCameraForLiveStream';
import PostVideoFeed from '../components/videoFeed/PostVideoFeed';
import AddPodcast from '../components/profileView/AddPodcast';
import ChangePassword from '../components/settings/ChangePassword';
import AddPostVideoSelection from '../components/profileView/AddPostVideoSelection';
import PostVideo from '../components/videoFeed/PostVideo';
const Stack = createNativeStackNavigator();
const TempStack = () => {
    return (
        <Stack.Navigator
            // initialRouteName='HomeScreenUser'
            // initialRouteName="PostVideo"
            screenOptions={( { route } ) => ( {
                headerShown: false,
            } )}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="OpenApp" component={OpenApp} />
            <Stack.Screen name="OpenAppVIP" component={OpenAppVIP} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpWithEmail1" component={SignUpWithEmail1} />
            <Stack.Screen name="SignUpWithEmailVIP" component={SignUpWithEmailVIP} />
            <Stack.Screen name="SignUpWithEmail2" component={SignUpWithEmail2} />
            <Stack.Screen name="SignUpWithEmail3" component={SignUpWithEmail3} />
            <Stack.Screen name="LogInWithEmail" component={LogInWithEmail} />
            <Stack.Screen name="LogInPassCode" component={LogInPassCode} />

            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="HomeScreenUser" component={HomeTabNavigatorUser} />
            <Stack.Screen name="AccountSettings" component={AccountSettings} />
            <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
            <Stack.Screen name="NameAndDescription" component={NameAndDescription} />
            <Stack.Screen name="EmailSetting" component={EmailSetting} />
            <Stack.Screen name="ProfilePicSettings" component={ProfilePicSettings} />
            <Stack.Screen name="CategorySelection" component={CategorySelection} />
            <Stack.Screen
                name="BankDetailsSettings"
                component={BankDetailsSettings}
            />
            <Stack.Screen name="AddBankDetails" component={AddBankDetails} />
            <Stack.Screen name="SelectAccount" component={SelectAccount} />
            <Stack.Screen name="Subscriptions" component={Subscriptions} />
            <Stack.Screen
                name="NotificationSettings"
                component={NotificationSettings}
            />
            <Stack.Screen name="ProfileViewUser" component={ProfileViewUser} />
            <Stack.Screen name="ThemeSettings" component={ThemeSettings} />
            <Stack.Screen name="SecurityPrivacy" component={SecurityPrivacy} />
            <Stack.Screen name="TermsOfService" component={TermsOfService} />
            <Stack.Screen name="FaqQuestions" component={FaqQuestions} />
            <Stack.Screen name="FaqAnswer" component={FaqAnswer} />
            <Stack.Screen name="UploadVideoIntro" component={UploadVideoIntro} />
            <Stack.Screen name="OpenCamera" component={OpenCamera} />
            <Stack.Screen name="UploadThumblinImage" component={UploadThumblinImage} />
            <Stack.Screen name="ProfileSettingCelibrity" component={ProfileSettingCelibrity} />
            <Stack.Screen name="VideoFeed" component={VideoFeed} />
            <Stack.Screen name="ShowContentCatagoryWise" component={ShowContentCatagoryWise} />
            <Stack.Screen name="Earnings" component={Earnings} />
            <Stack.Screen name="VideoIntroSettings" component={VideoIntroSettings} />
            <Stack.Screen name="OpenGalary" component={OpenGalary} />
            <Stack.Screen name="OpenCameraForLiveStream" component={OpenCameraForLiveStream} />
            <Stack.Screen name="VideoFeedEdit" component={VideoFeedEdit} />
            <Stack.Screen name="VideoEdit" component={VideoEdit} />
            <Stack.Screen name="FocusCelibrity" component={FocusCelibrity} />
            <Stack.Screen name="ProfileViewUserTile" component={ProfileViewUser} />
            <Stack.Screen name="StartLiveStream" component={StartLiveStream} />
            <Stack.Screen name="PostVideoFeed" component={PostVideoFeed} />
            <Stack.Screen name="AddPodcast" component={AddPodcast} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="AddPostVideoSelection" component={AddPostVideoSelection} />
            <Stack.Screen name="PostVideo" component={PostVideo} />
        </Stack.Navigator>
    );
};
const MainRouter = () => {
    return (
        <NavigationContainer>
            <TempStack />
        </NavigationContainer>
    );
};

export default MainRouter;
