import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';



const CustomText = ( props ) => {
    const dispatch = useDispatch();
    const themes = useSelector( state => state.appReducer.theme )
    return (
        <Text
            numberOfLines={props.numberOfLines}
            style={[{
            color: themes.primaryTextColor,
        }, props.style, props.secondary && { color: themes.secondaryTextColor }
        ]}>{props.value}</Text>
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

export default connect( mapStatetoProps, mapDispatchToProps )( CustomText );