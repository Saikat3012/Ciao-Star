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

class TermsOfService extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        termsOfService: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).
You acknowledge and agree that the Talent User has sole discretion to determine how to fulfill your request and the content of the Video created, and may not follow your request exactly. We reserve the right to reject any request in our sole discretion. The Talent User has up to seven days (at our sole discretion) to fulfill or decline your request. Once your request is fulfilled, your payment method will be charged the amount specified on the Talent User’s booking page on our Site at the time you submitted the request.
CAMEO Videos are licensed, not sold. You are buying the right (or license) to use it, not the actual CAMEO Video itself.
Subject to your payment in full, the Talent User hereby grants to you the following limited rights to use the CAMEO Video (other than a Business CAMEO Video) solely for your own personal, non-commercial, and non-promotional purposes, subject to these Terms: a non-exclusive, royalty-free, fully paid, worldwide, sublicensable, revocable license to use, reproduce, distribute, and publicly display that CAMEO Video, in any and all media (for example, on social media platforms), whether now known or hereafter invented or devised.
You may not sell, resell, commercialize, or encumber your rights in any Cameo Offering, including creating a non-fungible token (“NFT”) from any Cameo Offering except as agreed by Cameo in writing. You may sublicense your rights in a CAMEO Video only to the extent necessary for you to use the CAMEO Video as permitted under these Terms (for example, sharing it (if it is not a Business CAMEO Video) with friends on a social media platform or sending it to a Recipient for personal, non-commercial, and non-promotional purposes as set `
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.TERMS_OF_SERVICE}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <CustomComponents.CustomText value={this.state.termsOfService} style={{ fontSize: 14 }} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( TermsOfService );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        marginTop: 18,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        paddingVertical: 12,
        justifyContent: 'space-between',
        marginTop: 13
    }
} )