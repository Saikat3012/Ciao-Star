import React, { Component } from 'react';

import CustomComponents from '../../CustomComponents';

import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';
import VideoPlayer from 'react-native-video-player';

import strings from '../../commonComponents/strings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Video from 'react-native-video';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;
const screenHeight = Dimensions.get( 'screen' ).height;
class PostVideo extends Component {
    constructor( props ) {
        super( props );
        console.log( props.route.params )
        this.state = {
            subscribed: this.props.userType === 'VIP',
            // pic:'https://upload.wikimedia.org/wikipedia/commons/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif'
            pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
        }
    }

    handleSubscribe() {
        this.setState( { subscribed: !this.state.subscribed } )
    }
    handleNextClick() {
        this.props.navigation.navigate( "User" );
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.props.theme.primaryBackgroundColor
            }}>
                <Video source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   // Can be a URL or a local file.
                    ref={( ref ) => {
                        this.player = ref
                    }}
                    resizeMode={'stretch'}
                    onBuffer={this.onBuffer}
                    onError={this.videoError}
                    style={styles.backgroundVideo} />
                {/* <VideoPlayer
                    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    videoWidth={windowWidth}
                    videoHeight={windowHeight}
                    
                    thumbnail={{ uri: 'https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                /> */}

                {/* <Image source={ImgAssets.playbackDark} style={{
                    height: 90,
                    width: 90,
                    resizeMode: 'contain',
                    marginBottom: 25
                }} /> */}
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    height: windowHeight * 0.20,
                    backgroundColor: this.props.theme.primaryTextColor,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    bottom: 0,
                    alignItems: 'center',
                    paddingTop: 20,
                }}>
                    <CustomComponents.CustomText value="Add descriptive title" style={{
                        color: this.props.theme.secondaryTextColor,
                        fontSize: 18,
                        fontWeight: 'bold'
                    }} />
                    <View style={{
                        width: '90%',
                        height: 2,
                        backgroundColor: this.props.theme.color7,
                        marginTop: 8
                    }} />
                    <View style={{
                        width: '90%',
                        height: 2,
                        backgroundColor: this.props.theme.color7,
                        marginTop: 30
                    }} />
                    <TouchableOpacity
                        onPress={() => this.handleNextClick()}
                        style={{
                            backgroundColor: '#748',
                            paddingHorizontal: 30,
                            paddingVertical: 8,
                            alignSelf: 'flex-end',
                            marginRight: '5%',
                            marginTop: 12,
                            borderRadius: 8
                        }}>
                        <CustomComponents.CustomText value={strings.NEXT} />
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const mapStatetoProps = ( state ) => {
    return {
        theme: state.appReducer.theme,
        userType: state.appReducer.userType
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        changeTheme: ( theme ) => dispatch( changeTheme( theme ) ),
        setUserType: ( userType ) => dispatch( setUserType( userType ) )
    }
}
export default connect( mapStatetoProps, mapDispatchToProps )( PostVideo );

const styles = StyleSheet.create( {
    backgroundVideo: {
        position: 'absolute',
        width: windowWidth,
        height: windowHeight * 0.85,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
} );