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

const PROFILE_SETTINGS_LIST = [
    {
        id: 1,
        title: 'Name and description',
        navigationName: 'NameAndDescription'
    },
    {
        id: 2,
        title: 'Email',
        navigationName: 'EmailSetting'
    },
    {
        id: 3,
        title: 'Categories',
        navigationName: 'CategorySelection'
    },
    {
        id: 4,
        title: 'Video ad',
        navigationName: 'VideoIntroSettings'
    },
    {
        id: 5,
        title: 'Profile picture',
        navigationName: 'ProfilePicSettings'
    },
    {
        id: 6,
        title: 'Thumbnail profile',
        navigationName: 'UploadThumblinImage'
    },
    {
        id: 7,
        title: 'Price settings',
        navigationName: 'NameAndDescription'
    },
]

class ProfileSetting extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: '',

    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleListClick( ref, each ) {
        ref.setState( { onFocus: each.id } )
        ref.props.navigation.navigate(each.navigationName)
    }

    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.PROFILE_SETTINGS}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    {PROFILE_SETTINGS_LIST.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                key={each.id}
                                onPress={() => this.handleListClick(this,each)}
                                style={[styles.buttonContainer,
                                { backgroundColor: this.props.theme.color3 },
                                this.state.onFocus === each.id && { borderColor: this.props.theme.color4 }
                                ]}>
                                <CustomComponents.CustomText value={each.title} style={{ fontSize: 16 }} />
                                <AntDesign name="right" size={12} color={this.props.theme.color8} />
                            </TouchableOpacity>
                        )
                    })}
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
export default connect( mapStatetoProps, mapDispatchToProps )( ProfileSetting );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '88%',
        alignItems: 'center',
        marginTop: 18,
        alignSelf:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '95%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'space-between',
        marginTop: 13,
        borderWidth: 1
    }
} )