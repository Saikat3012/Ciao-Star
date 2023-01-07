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
        name: '',
        description: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleNameDesc() {
        alert( "Name and desc" )
    }
    handleEmail() {
        alert( "Email" )
    }
    handleProfilePicClick() {
        alert( "Profile Picture" )
    }
    handleUpdateClick() {
        alert( "Update Done" )
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
                    <CustomComponents.CustomInput
                        dflt
                        value={this.state.name}
                        placeholder={strings.NAME}
                        onChangeText={( text ) => this.setState( { name: text } )}
                        container={{ marginTop: 17 }} />
                    <CustomComponents.CustomInput
                        dflt
                        multiline
                        numberOfLines={4}
                        style={{ marginTop: -20 }}
                        value={this.state.description}
                        placeholder={strings.DESCRIPTION}
                        onChangeText={( text ) => this.setState( { description: text } )}
                        container={{ marginTop: 17, flexWrap: 'wrap', height: 100 }} />

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            onPress={() => this.handleUpdateClick()}
                            style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
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
    bottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 40,
    },
    buttonContainer: {
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
} )