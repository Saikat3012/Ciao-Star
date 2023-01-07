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
class LogIn extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        profilePic: null,
        name: '',
        userName: '',
        email: '',
        emailOffers: false
    }
    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleProfilePicUpload() {
        alert( "Uplod rofile Pic" )
    }
    handleNextClick() {
        // if ( this.props?.route?.params?.profileType === 'VIP' ) {
        //     this.props.navigation.navigate( "CategorySelection", { profileType: 'VIP' } )
        // } else {
        //     this.props.navigation.navigate("SignUpWithEmail2")
        // }
        this.props.navigation.navigate( "SignUpWithEmail2" )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: this.props.theme.primaryBackgroundColor }}>
                <CustomComponents.CustomHeader
                    normal
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />
                <View style={[styles.container]}>
                    <View style={[styles.profilePicContainer, { backgroundColor: this.props.theme.secondaryBackgroundColor }]}>
                        {
                            this.state.profilePic ?
                                <Image source={{ uri: this.state.profilePic }} style={styles.profilePic} /> :
                                <TouchableOpacity onPress={() => this.handleProfilePicUpload()}>
                                    <CustomComponents.CustomText value="+" style={{ color: this.props.theme.primaryBackgroundColor, fontSize: 20 }} />
                                </TouchableOpacity>
                        }
                    </View>
                    <CustomComponents.CustomText value={strings.ADD_PROFILE_PIC} style={{ marginBottom: 12 }} />


                    <CustomComponents.CustomInput dflt placeholder={strings.FULL_NAME} onChangeText={( text ) => this.setState( { name: text } )} container={{ marginTop: 17 }} />
                    <CustomComponents.CustomInput dflt placeholder={strings.USERNAME} onChangeText={( text ) => this.setState( { userName: text } )} container={{ marginTop: 17 }} />
                    <CustomComponents.CustomInput dflt placeholder={strings.EMAIL} onChangeText={( text ) => this.setState( { email: text } )} container={{ marginTop: 17 }} />



                    <TouchableOpacity
                        onPress={() => this.setState( { emailOffers: !this.state.emailOffers})}
                        style={styles.emailOffersContainer}>
                        <CustomComponents.CustomText value={strings.EMAIL_OFFERS} style={{ color: this.state.emailOffers ? this.props.theme.color4 : this.props.theme.primaryTextColor, fontSize: 9, marginRight: 5 }} />
                        <AntDesign name="checkcircle" color={this.state.emailOffers ? this.props.theme.color4 : this.props.theme.primaryTextColor} />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.handleNextClick()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.NEXT} style={styles.buttonText} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

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
export default connect( mapStatetoProps, mapDispatchToProps )( LogIn );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
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
    }
} )