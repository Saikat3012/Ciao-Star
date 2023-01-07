import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
class SignUpWithEmailVIP extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        vipCode: ''
    }

    handleSignUpClick() {
        this.props.navigation.navigate( "SignUpWithEmail1", { profileType: 'VIP' } )
    }
    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>


                <CustomComponents.AppLogo size={27} first={strings.SOCIAL} second={strings.STREAM} style={{ marginBottom: 65 }} />
                <CustomComponents.CustomText value={strings.PERSONAL_VIP_CODE} style={styles.heading} />
                <CustomComponents.CustomInput
                    dflt
                    value={this.state.vipCode}
                    placeholder={strings.VIP_CODE}
                    onChangeText={( text ) => this.setState( { vipCode: text } )}
                    container={{ marginTop: 15 }} />




                <View style={styles.bottomContainer}>
                    <View style={{
                        flexDirection: 'row',
                        width: "90%",
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                        <CustomComponents.CustomText
                            value="By signing up, you agree to Social stream’s"
                            style={{
                                color: this.props.theme.primaryTextColor,
                                fontSize: 10,
                            }} />
                        <CustomComponents.CustomText
                            value=" terms of service"
                            style={{
                                color: this.props.theme.color4,
                                fontSize: 10,
                            }} />
                        <CustomComponents.CustomText
                            value=", including"
                            style={{
                                color: this.props.theme.primaryTextColor,
                                fontSize: 10,
                            }} />
                        <CustomComponents.CustomText
                            value=" additional terms"
                            style={{
                                color: this.props.theme.color4,
                                fontSize: 10,
                            }} />
                        <CustomComponents.CustomText
                            value=", and"
                            style={{
                                color: this.props.theme.primaryTextColor,
                                fontSize: 10,
                            }} />
                        <CustomComponents.CustomText
                            value=" privacy policy."
                            style={{
                                color: this.props.theme.color4,
                                fontSize: 10,
                            }} />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.handleSignUpClick()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.SIGNUP} style={styles.buttonText} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( SignUpWithEmailVIP );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '80%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
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
        fontSize: 10
    },
    buttonIcon: {
        height: 8,
        width: 8,
        resizeMode: 'contain',
        marginRight: 6
    },
    handle: {
        height: 1,
        width: 29,
        marginTop: 10,
        marginBottom: 40
    },
    profilePicContainer: {
        height: 75,
        width: 75,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 21,
        marginBottom: 6
    },
    profilePic: {
        height: 75,
        width: 75,
        resizeMode: 'contain'
    },
    emailOffersContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: 23,
        marginBottom: 29
    },
    bottomContainer: {
        width: '100%',
        marginTop: 50
    },
    heading: {
        fontSize: 12,
        alignSelf: 'flex-start',
        marginLeft: '8%'
    }
} )