import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';

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
    Image
} from 'react-native';
const loginMethods = [

]
class SignUp extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        loginMethods: [
            {
                id: 1,
                title: 'Continue with facebook',
                borderColor: '#1777F0',
                onClick: this.handleFacebookLogin,
                icon: ImgAssets.facebook,
            },
            {
                id: 2,
                title: 'Continue with Apple',
                borderColor: '#7C7C7C',
                onClick: this.handleAppleLogin,
                icon: ImgAssets.apple,
            },
            {
                id: 3,
                title: 'Continue with Instagram',
                borderColor: '#E007E8',
                onClick: this.handleInstagramLogin,
                icon: ImgAssets.instagram,
            },
            {
                id: 4,
                title: 'Continue with Google',
                borderColor: '#55A059',
                onClick: this.handleGoogleLogin,
                icon: ImgAssets.google,
            },
            {
                id: 5,
                title: 'Continue with email',
                borderColor: '#B79B0B',
                onClick: this.handleEmailLogin,
                icon: ImgAssets.email,
            },
        ]
    }
    handleFacebookLogin( parentReferance ) {
        alert( "Facebook Login" )
    }
    handleAppleLogin( parentReferance ) {
        alert( "Apple Login" )
    }
    handleInstagramLogin( parentReferance ) {
        alert( "Instagram Login" )
    }
    handleGoogleLogin( parentReferance ) {
        alert( "Google Login" )
    }
    handleEmailLogin( parentReferance ) {
        parentReferance.props.navigation.navigate( "SignUpWithEmail1" )
    }

    render() {
        return (
            <View style={[{ backgroundColor: this.props.theme.primaryBackgroundColor }, styles.container]}>
                <CustomComponents.AppLogo size={24} first={strings.SOCIAL} second={strings.STREAM} style={{ marginBottom: '55%' }} />
                <View style={[{ backgroundColor: this.props.theme.color2 }, styles.lognMethodsContainer]}>
                    <View style={[styles.handle, { backgroundColor: this.props.theme.color1 }]} />
                    <CustomComponents.CustomText value={strings.SIGNUP_WITH} style={{ fontSize: 18, marginBottom: 19 }} />
                    {this.state.loginMethods.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                onPress={() => each.onClick( this )}
                                key={each.id}
                                style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: each.borderColor }]}>
                                <Image source={each.icon} style={styles.buttonIcon} />
                                <CustomComponents.CustomText value={each.title} style={styles.buttonText} />
                            </TouchableOpacity>
                        )
                    } )}

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
export default connect( mapStatetoProps, mapDispatchToProps )( SignUp );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    lognMethodsContainer: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 12
    },
    buttonIcon: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        marginRight: 6
    },
    handle: {
        height: 1,
        width: 29,
        marginTop: 10,
        marginBottom: 40
    }
} )