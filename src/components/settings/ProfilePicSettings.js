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

class NameAndDescription extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        profilePic: '',
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleOpenCamera() {
        this.setState( { onFocus: 'OpenCamera' } )
        alert( "Open Camera" )
    }
    handleUploadPic() {
        this.setState( { onFocus: 'UploadImage' } )
        alert( "Upload Pic" )
    }
    handleUpdateClick() {
        alert( "Update Profile Pic" )
    }


    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.PROFILE_SETTINGS}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
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


                    <TouchableOpacity
                        onPress={() => this.handleOpenCamera()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'OpenCamera' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={strings.OPEN_CAMERA} style={{ fontSize: 12 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleUploadPic()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'UploadImage' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={strings.UPLOAD_IMAGE} style={{ fontSize: 12 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            onPress={() => this.handleUpdateClick()}
                            style={[styles.UpdateButtonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                            <CustomComponents.CustomText value={strings.UPDATE} style={styles.buttonText} />
                        </TouchableOpacity>
                    </View>

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
export default connect( mapStatetoProps, mapDispatchToProps )( NameAndDescription );

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
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'space-between',
        marginTop: 13,
        borderWidth: 1
    },
    bottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 40,
    },
    UpdateButtonContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    profilePicContainer: {
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 21,
        marginBottom: 6
    },
} )