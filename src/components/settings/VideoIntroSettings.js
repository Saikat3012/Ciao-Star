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

class VideoIntroSettings extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: '',
        
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleOpenCamera() {
        this.setState( { onFocus: 'OpenCamera' } )
        this.props.navigation.navigate("OpenGalary")
    }
    handleUploadVideo() {
        this.setState( { onFocus: 'UploadVideo' } )
        this.props.navigation.navigate( "OpenGalary" )
    }
    handleRequestVideoUpload() {
        this.setState( { onFocus: 'RequestVideoUpload' } )
        this.props.navigation.navigate( "OpenGalary" )
    }
    handleDoItLater() {
        alert( "Do it later" )
    }
    handleUpdateClick() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={'Video intro'}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <TouchableOpacity
                        onPress={() => this.handleOpenCamera()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'OpenCamera' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.OPEN_CAMERA} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleUploadVideo()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'UploadVideo' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={'Upload Video'} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleRequestVideoUpload()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'RequestVideoUpload' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={'Request Video Upload'} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => this.handleUpdateClick()}
                        style={[styles.nextButtonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.UPDATE} style={styles.buttonText} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( VideoIntroSettings );

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
} )