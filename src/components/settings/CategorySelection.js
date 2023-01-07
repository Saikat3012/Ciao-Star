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
const PASSCODE = [1, 2, 3, 4, 5]
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0]

const SETTINGS_OPTION = [
    {
        id: 1,
        title: 'Music',
        icon: ImgAssets.profile,
        selected: false
    },
    {
        id: 2,
        title: 'Sport',
        icon: ImgAssets.bankDetails,
        selected: false
    },
    {
        id: 3,
        title: 'Reality TV',
        icon: ImgAssets.subscripitons,
        selected: false
    },
    {
        id: 4,
        title: 'Comedy',
        icon: ImgAssets.securityPrivacy,
        selected: false
    },
    {
        id: 5,
        title: 'Actor',
        icon: ImgAssets.notification,
        selected: false
    },
    {
        id: 6,
        title: 'Creators',
        icon: ImgAssets.termsOfService,
        selected: false
    },
]
class CategorySelection extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        catagoryList: SETTINGS_OPTION
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleSettingsOptionClick( ref, cat ) {
        let tempList = ref.state.catagoryList
        tempList.map( ( each ) => {
            if ( each.id == cat.id ) {
                each.selected = !each.selected
            }
        } )
        ref.setState( { catagoryList: tempList } )
    }
    handleUpdateClick() {
        this.props.navigation.navigate( "UploadVideoIntro", { profileType: 'VIP' } )
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.SELECT_YOUR_CATEGORY}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />
                <View style={styles.contentContainer}>


                    <View style={styles.digitsContainer}>
                        {this.state.catagoryList.map( ( each ) => {
                            return (
                                <View key={each.id}
                                    style={styles.digitBox}
                                >
                                    <TouchableOpacity
                                        onPress={() => this.handleSettingsOptionClick( this, each )}
                                        style={[styles.digitButton, {
                                            backgroundColor: this.props.theme.color3
                                        }, each.selected && { borderColor: this.props.theme.color4 }
                                        ]}
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

                    <View style={styles.bottomContainer}>
                        <CustomComponents.CustomText
                            value={strings.SELECT_ALL_THAT_APPLY} style={{
                                color: this.props.theme.color8,
                                width: '90%',
                                alignSelf: 'center'
                            }} />
                        <TouchableOpacity
                            onPress={() => this.handleUpdateClick()}
                            style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                            <CustomComponents.CustomText value={this.props?.route?.params?.profileType == 'VIP' ? strings.NEXT : strings.UPDATE} style={styles.buttonText} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( CategorySelection );

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
        width: '100%',
    },
    digitButton: {
        height: '60%',
        width: '85%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    digitBox: {
        width: '33.33%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
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