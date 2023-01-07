import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme,setUserType } from '../../redux/actions/action'
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
    ScrollView
} from 'react-native';
class OpenApp extends Component {
    constructor( props ) {
        super( props );
        console.log( props)
    }
    state = {
        onFocusButton: '',
    }


    handleLogInClck() {
        this.setState( { onFocusButton : 'LogIn'})
        this.props.navigation.navigate( "LogIn" );
    }
    handleSignUpClick() {
        this.setState( { onFocusButton: 'SignUp' } )
        this.props.navigation.navigate( "SignUp" );
    }
    handleProfileTypeClick() {
        this.setState( { onFocusButton: 'ProfileType' } )
        this.props.setUserType("VIP")
        this.props.navigation.navigate( "OpenAppVIP"  );
    }

    render() {
        // return (
        //     <Text>Open App</Text>
        // )
        return (
            <View style={[{ backgroundColor: this.props.theme.primaryBackgroundColor }, styles.container]}>
                <CustomComponents.AppLogo size={27} first={strings.SOCIAL} second={strings.STREAM} style={{ marginBottom: 65 }} />
                <TouchableOpacity
                    onPress={() => this.handleLogInClck()}
                    style={[styles.buttonContainer,
                    { backgroundColor: this.props.theme.color3 },
                    this.state.onFocusButton == 'LogIn' && { borderColor: this.props.theme.color4 }
                    ]}>
                    <CustomComponents.CustomText value={strings.LOGIN} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.handleSignUpClick()}
                    style={[styles.buttonContainer,
                    { backgroundColor: this.props.theme.color3 },
                    this.state.onFocusButton == 'SignUp' && { borderColor: this.props.theme.color4 }
                    ]}>
                    <CustomComponents.CustomText value={strings.SIGNUP} />
                </TouchableOpacity>
                <View style={styles.deviderContainer}>
                    <View style={[styles.devider, { backgroundColor: this.props.theme.color1 }]} />
                    <CustomComponents.CustomText value={strings.OR} style={{ color: this.props.theme.color1 }} />
                    <View style={[styles.devider, { backgroundColor: this.props.theme.color1 }]} />
                </View>
                <TouchableOpacity
                    onPress={() => this.handleProfileTypeClick()}
                    style={[styles.buttonContainer,
                    { backgroundColor: this.props.theme.color3 },
                        this.state.onFocusButton == 'ProfileType' && { borderColor: this.props.theme.color4 }
                    ]}>
                    <CustomComponents.CustomText value={strings.VIP_PROFILE} />
                </TouchableOpacity>
            </View>
        );
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
        setUserType: ( userType ) => dispatch( setUserType (userType))
    }
}
export default connect( mapStatetoProps, mapDispatchToProps )( OpenApp );
// export default OpenApp;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
        paddingVertical: 12,
        paddingLeft: 28,
        borderRadius: 5,
        marginVertical: 8,
        borderWidth: 1
    },
    deviderContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 71,
        marginBottom: 29
    },
    devider: {
        height: 1,
        width: '40%'
    },
} )