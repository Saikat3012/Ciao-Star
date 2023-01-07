import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

class OpenCameraForLiveStream extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: '',
        profilePic: 'https://www.leadmeonline.com/wp-content/uploads/2018/04/user-placeholder-man-10-6-300x300.jpg',
        name: 'Kelvis Smith',
        liveCount: '350K'
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }

    handleDoItLater() {
        alert( "Do it later" )
    }
    handleUpdateClick() {
        this.props.navigation.navigate( "VideoFeedEdit" )
    }
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            padding: 3,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: this.props.theme.color4,
                            marginRight: 8
                        }}>
                            <Image source={{ uri: this.state.profilePic }} style={{
                                height: 36,
                                width: 36,
                                borderRadius: 5,
                            }} />
                        </View>
                        <CustomComponents.CustomText value={this.state.name} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CustomComponents.CustomText value={this.state.liveCount} />
                        <AntDesign name="eye" size={12} style={{ alignSelf: 'flex-end', marginBottom: 8, marginLeft: 4 }} />
                        <View style={{
                            backgroundColor: this.props.theme.color4,
                            borderRadius: 4,
                            paddingVertical: 5,
                            paddingHorizontal: 8,
                            marginLeft: 8
                        }}>
                            <CustomComponents.CustomText value='LIVE' style={{ fontSize: 12 }} />
                        </View>
                        <View style={{
                            backgroundColor: this.props.theme.color1,
                            borderRadius: 50,
                            padding: 4,
                            marginLeft: 12
                        }}>
                            <Entypo name="cross" color={this.props.theme.primaryTextColor} size={22} />
                        </View>
                    </View>


                </View>
                <View style={styles.contentContainer}>


                </View>
                <View style={styles.featuresContainer}>
                    <TouchableOpacity style={{}}>
                        <MaterialIcons name="flip-camera-android" size={30} color={this.props.theme.primaryTextColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 18 }}>
                        <Entypo name="emoji-flirt" size={30} color={this.props.theme.primaryTextColor} />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const mapStatetoProps = ( state ) => {
    return {
        theme: state.appReducer.theme
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        changeTheme: ( theme ) => dispatch( changeTheme( theme ) )
    }
}
export default connect( mapStatetoProps, mapDispatchToProps )( OpenCameraForLiveStream );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '88%',
        alignItems: 'center',
        marginTop: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'space-between',
        marginTop: 13,
        borderWidth: 1
    },
    optionContainer: {
        marginTop: 110,
        alignSelf: 'flex-start',
        marginLeft: 8
    },
    nextButtonContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40
    },
    featuresContainer: {
        position: 'absolute',
        top: windowHeight * 0.35,
        left: 25

    }
} )