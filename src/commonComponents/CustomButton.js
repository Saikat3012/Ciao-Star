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
    const [onFocus, setOnFocus] = useState( false )
    return (
        <TouchableOpacity
            style={[props.style, onFocus && {
                borderWidth: 1,
                borderColor: themes.color4
            }]}
            onFocus={() => setOnFocus( true )}
            onPress={() => props.onPress()}
            onBlur={() => setOnFocus( false )}
        >
            {props.children}
        </TouchableOpacity>
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