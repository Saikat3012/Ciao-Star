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

class UploadVideoIntro extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: '',
        quary: {
            id: 1,
            question: 'What is this used for ?',
            answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
            quary: true
        }
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleUploadVideoIntro() {
        this.setState( { onFocus: 'VideoIntro' } )
        this.props.navigation.navigate( "OpenCamera" )
    }
    handleDoItLater() {
        alert( "Do it later" )
    }
    handleQuary() {
        this.props.navigation.navigate( "FaqAnswer", this.state.quary )
    }
    handleNextClick() {
        // alert( "Next" )
        // this.props.navigation.navigate( 'HomeScreen', { profileType: 'VIP' } );
        this.props.navigation.navigate( "UploadThumblinImage" )
    }
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={''}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <TouchableOpacity
                        onPress={() => this.handleUploadVideoIntro()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'VideoIntro' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.UPLOAD_VIDEO_INTRO} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <View style={styles.optionContainer}>
                        <TouchableOpacity onPress={() => this.handleDoItLater()}>
                            <CustomComponents.CustomText value={strings.DO_IT_LATER} style={{ fontSize: 10 }} />
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => this.handleQuary()}>
                            <CustomComponents.CustomText value={this.state.quary.question} style={{
                                fontSize: 12,
                                color: this.props.theme.color8,
                                marginTop: 34
                            }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => this.handleNextClick()}
                        style={[styles.nextButtonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.NEXT} style={styles.buttonText} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( UploadVideoIntro );

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
        marginTop: 22,
        alignSelf: 'flex-start',
        marginLeft:8
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
} )