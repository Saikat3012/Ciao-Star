import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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

class AddPodcast extends Component {
    constructor( props ) {
        super( props );
    }
    state = {

    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }


    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>

                <View style={styles.contentContainer}>
                    <CustomComponents.CustomText value="Add podacst functionalities (Find out) " />
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
export default connect( mapStatetoProps, mapDispatchToProps )( AddPodcast );

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
        justifyContent: 'center'
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
    featuresContainer: {
        position: 'absolute',
        top: windowHeight * 0.35,
        left: 25
    },
    eachFeaturesContainer: {
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'center',
    },
    eachFeatuesText: {
        fontSize: 10,
        marginLeft: 6
    }
} )