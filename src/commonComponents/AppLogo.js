import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import strings from './strings';



const AppLogo = ( props ) => {
    const dispatch = useDispatch();
    const themes = useSelector( state => state.appReducer.theme )
    return (
        <View style={[styles.container, props.style]}>
            <Text style={[{
                color: themes.primaryTextColor,
                fontSize: props.size
            }]}>{props.first}</Text>
            <Text style={[{
                color: themes.color4,
                fontSize: props.size
            }]}>{props.second}</Text>
        </View>

    );
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

export default connect( mapStatetoProps, mapDispatchToProps )( AppLogo );

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
} )