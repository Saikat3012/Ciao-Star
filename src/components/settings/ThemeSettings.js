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
    Image,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

class ThemeSettings extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        isDarkMode: true
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    switchTheme( selectedTheme ) {
        this.props.changeTheme( selectedTheme )
        if ( selectedTheme.type == "dark" ) {
            this.setState( { isDarkMode: true } )
        } else {
            this.setState( { isDarkMode: false } )
        }
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.THEME}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <View style={[styles.buttonContainer, { backgroundColor: this.props.theme.color4 }]}>
                        <View style={[styles.modeContainer, {
                            backgroundColor: this.props.theme.primaryBackgroundColor,
                            paddingRight: 20
                        }]}>
                            <TouchableOpacity
                                onPress={() => this.switchTheme( dark )}
                            >
                                <CustomComponents.CustomText
                                    value={strings.DARK}
                                    style={[{ fontSize: 25 },
                                    !this.state.isDarkMode && { color: this.props.theme.color7 }]}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.modeContainer, {
                            backgroundColor: this.props.theme.primaryBackgroundColor,
                            paddingLeft: 20
                        }]}>
                            <TouchableOpacity
                                onPress={() => this.switchTheme( light )}
                            >
                                <CustomComponents.CustomText
                                    value={strings.LIGHT}
                                    style={[{ fontSize: 25 },
                                    this.state.isDarkMode && { color: this.props.theme.color9 }]}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
                <Image source={ImgAssets.notification} style={styles.icon} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( ThemeSettings );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'center',
        height: windowHeight * 0.9,
    },
    icon: {
        height: 112,
        width: 112,
        position: 'absolute',
        top: windowHeight * 0.46,
        alignSelf: 'center'
    },
    buttonContainer: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modeContainer: {
        width: '49.7%',
        justifyContent: 'center',
        alignItems: 'center',
    }
} )