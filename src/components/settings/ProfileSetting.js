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
    handleNameDesc() {
        this.setState( { onFocus: 'Name' } )
        this.props.navigation.navigate( "NameAndDescription" )
    }
    handleEmail() {
        this.setState( { onFocus: 'Email' } )
        this.props.navigation.navigate( "EmailSetting" )
    }
    handleProfilePicClick() {
        this.setState( { onFocus: 'ProfilePic' } )
        this.props.navigation.navigate( "ProfilePicSettings" )
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
                    <TouchableOpacity
                        onPress={() => this.handleNameDesc()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'Name' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'User Name'} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleEmail()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'Email' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={strings.EMAIL} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleProfilePicClick()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'ProfilePic' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={strings.PROFILE_PRICTURE} style={{ fontSize: 16 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
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
    }
} )