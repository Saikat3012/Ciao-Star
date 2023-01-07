import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import CustomComponents from '../CustomComponents';
import { light, dark } from '../theme';


const Home = ( { navigation } ) => {
    const dispatch = useDispatch();
    const updateTheme = ( newTheme ) => dispatch( changeTheme( newTheme ) )
    const themes = useSelector( state => state.appReducer.theme )



    const leftHeaderChield = () => (
        <View>
            <Text>Left</Text>
        </View>
    )
    const rightHeaderChield = () => (
        <View>
            <Text>right</Text>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themes.primaryBackgroundColor }}>
            <Text style={{ color: themes.primaryTextColor }}>Settings</Text>
            <TouchableOpacity onPress={() => { updateTheme( themes.type === 'dark' ? light : dark ) }}>
                <Text style={{ color: themes.primaryTextColor }}>changeTheme</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate( "Settings" ) }}>
                <Text style={{ color: themes.primaryTextColor }}>Navigate</Text>
            </TouchableOpacity>
            <CustomComponents.CustomText primary value="Testing" style={{ fontSize: 50 }} />
            <CustomComponents.CustomHeader
                leftChield={leftHeaderChield}
                rightChield={rightHeaderChield}
                primary title="Testing"
                textStyle={{ fontSize: 24 }}
            />
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

export default connect( mapStatetoProps, mapDispatchToProps )( Home );