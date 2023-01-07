import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
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
const PASSCODE = [1, 2, 3, 4, 5]
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0]


const userSettings = [
    {
        id: 1,
        title: 'Profile',
        icon: ImgAssets.profile,
        navigationName: 'ProfileSetting'
    },
    {
        id: 2,
        title: 'Bank details',
        icon: ImgAssets.bankDetails,
        navigationName: 'BankDetailsSettings'
    },
    {
        id: 3,
        title: 'Subscripitons',
        icon: ImgAssets.subscripitons,
        navigationName: 'Subscriptions'
    },
    {
        id: 4,
        title: 'Security & privacy',
        icon: ImgAssets.securityPrivacy,
        navigationName: 'SecurityPrivacy'
    },
    {
        id: 5,
        title: 'Notifications',
        icon: ImgAssets.notification,
        navigationName: 'NotificationSettings'
    },
    {
        id: 9,
        title: 'FAQ',
        icon: ImgAssets.theme,
        navigationName: 'FaqQuestions'
    },
    {
        id: 6,
        title: 'Terms of service',
        icon: ImgAssets.termsOfService,
        navigationName: 'TermsOfService'
    },
    {
        id: 7,
        title: 'Theme',
        icon: ImgAssets.theme,
        navigationName: 'ThemeSettings'
    },
    {
        id: 8,
        title: 'Log Out',
        icon: ImgAssets.logOut,
        navigationName: 'log-out'
    },
]
const celibSettings = [
    {
        id: 1,
        title: 'Profile',
        icon: ImgAssets.profile,
        navigationName: 'ProfileSettingCelibrity'
    },
    {
        id: 2,
        title: 'Bank details',
        icon: ImgAssets.bankDetails,
        navigationName: 'BankDetailsSettings'
    },
    {
        id: 3,
        title: 'Earnings',
        icon: ImgAssets.subscripitons,
        navigationName: 'Earnings'
    },
    {
        id: 4,
        title: 'Security & privacy',
        icon: ImgAssets.securityPrivacy,
        navigationName: 'SecurityPrivacy'
    },
    {
        id: 5,
        title: 'Notifications',
        icon: ImgAssets.notification,
        navigationName: 'NotificationSettings'
    },
    {
        id: 9,
        title: 'FAQ',
        icon: ImgAssets.theme,
        navigationName: 'FaqQuestions'
    },
    {
        id: 6,
        title: 'Terms of service',
        icon: ImgAssets.termsOfService,
        navigationName: 'TermsOfService'
    },
    {
        id: 7,
        title: 'Change Password',
        icon: ImgAssets.changePassword,
        navigationName: 'ChangePassword'
    },
    {
        id: 8,
        title: 'Theme',
        icon: ImgAssets.theme,
        navigationName: 'ThemeSettings'
    },
    {
        id: 9,
        title: 'Log Out',
        icon: ImgAssets.logOut,
        navigationName: 'log-out'
    },
]

class AccountSetting extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        SETTINGS_OPTION: [
            {
                id: 1,
                title: 'Profile',
                icon: ImgAssets.profile,
                navigationName: this.props.userType == "VIP" ? 'ProfileSettingCelibrity' : 'ProfileSetting'
            },
            {
                id: 2,
                title: 'Bank details',
                icon: ImgAssets.bankDetails,
                navigationName: 'BankDetailsSettings'
            },
            {
                id: 3,
                title: this.props.userType == "VIP" ? 'Earnings' : 'Subscripitons',
                icon: ImgAssets.subscripitons,
                navigationName: this.props.userType == "VIP" ? 'Earnings' : 'Subscriptions'
            },
            {
                id: 4,
                title: 'Security & privacy',
                icon: ImgAssets.securityPrivacy,
                navigationName: 'SecurityPrivacy'
            },
            {
                id: 5,
                title: 'Notifications',
                icon: ImgAssets.notification,
                navigationName: 'NotificationSettings'
            },
            {
                id: 9,
                title: 'FAQ',
                icon: ImgAssets.theme,
                navigationName: 'FaqQuestions'
            },
            {
                id: 6,
                title: 'Terms of service',
                icon: ImgAssets.termsOfService,
                navigationName: 'TermsOfService'
            },
            {
                id: 7,
                title: 'Theme',
                icon: ImgAssets.theme,
                navigationName: 'ThemeSettings'
            },
            {
                id: 8,
                title: 'Log Out',
                icon: ImgAssets.logOut,
                navigationName: 'log-out'
            },
        ],
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleSettingsOptionClick( ref, option ) {
        this.setState( { onFocus: option.id } )
        if ( option.navigationName === 'NotificationSettings' ) {
            alert( "Notification Settings" )
            return
        }
        if ( option.navigationName === 'log-out' ) {
            alert( "Log Out" )
        } else {
            ref.props.navigation.navigate( option.navigationName )
        }
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.ACCOUNT_SETTINGS}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />
                <View style={styles.contentContainer}>


                    <View style={styles.digitsContainer}>
                        {this.state.SETTINGS_OPTION.map( ( each ) => {
                            return (
                                <View key={each.id}
                                    style={styles.digitBox}
                                >
                                    <TouchableOpacity
                                        onPress={() => this.handleSettingsOptionClick( this, each )}
                                        style={[styles.digitButton, {
                                            backgroundColor: this.props.theme.color3
                                        }, this.state.onFocus == each.id &&
                                        { borderColor: this.props.theme.color4 }]}
                                    >
                                        <Image source={each.icon} />
                                    </TouchableOpacity>
                                    <CustomComponents.CustomText
                                        value={each.title}
                                        style={{ fontSize: 10, marginTop: 19 }}
                                    />
                                </View>

                            )
                        } )}
                    </View>

                </View>
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
        setUserType: ( userType ) => dispatch( setUserType( userType ) )
    }
}
export default connect( mapStatetoProps, mapDispatchToProps )( AccountSetting );

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
        marginTop: 36
    },
    digitsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 34,
        width: '100%'
    },
    digitButton: {
        height: '60%',
        width: '85%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    digitBox: {
        width: '33%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    }
} )