import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

class StartLiveStream extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleYes( ref ) {
        this.setState( { onFocus: 'yes' } )
        ref.props.navigation.navigate( "OpenCameraForLiveStream" )
    }
    handleNo( ref ) {
        this.setState( { onFocus: 'no' } )
        ref.props.navigation.goBack()
    }


    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>

                <View style={styles.contentContainer}>
                    <CustomComponents.CustomText value={'Do you want to start live streamnig ?'} style={{ fontSize: 14 }} />
                    <TouchableOpacity
                        onPress={() => this.handleYes( this )}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'yes' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'Yes'} style={{ fontSize: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleNo( this )}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'no' && { borderColor: this.props.theme.color4 }
                        ]}>
                        <CustomComponents.CustomText value={'No'} style={{ fontSize: 16 }} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( StartLiveStream );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    contentContainer: {
        width: '88%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'center',
        marginTop: 13,
        borderWidth: 1
    }
} )