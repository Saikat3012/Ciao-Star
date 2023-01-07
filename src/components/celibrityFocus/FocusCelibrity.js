import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

class ProfileSetting extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleStory() {
        this.setState( { onFocus: 'story' } )
        alert("Story")
    }
    handlePost() {
        this.setState( { onFocus: 'post' } )
        alert( "Post" )
    }
    handleStreamLive() {
        this.setState( { onFocus: 'live' } )
        alert( "Live" )
    }
    leftChield() {
        return (
            <TouchableOpacity>
                <Ionicons name="filter-sharp" size={20} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    normalWithButtons
                    // backButtonPress={this.handleBackPress}
                    leftChield={this.leftChield}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <TouchableOpacity
                        onPress={() => this.handleStory()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'story' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'STORY'} style={{ fontSize: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handlePost()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'post' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'POST'} style={{ fontSize: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleStreamLive()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'live' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'STREAM LIVE'} style={{ fontSize: 16 }} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( ProfileSetting );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    contentContainer: {
        width: '88%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'center',
        marginTop: 13,
        borderWidth: 1
    }
} )