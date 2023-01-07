import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import CustomComponents from '../CustomComponents';
import CustomText from './CustomText';
import CustomInput from './CustomInput';

const avatar = 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'



const CustomSearchBox = ( props ) => {
    const dispatch = useDispatch();
    const theme = useSelector( state => state.appReducer.theme )
    const [onFocus, setOnFocus] = useState( false )
    return (
        <View style={{
            minHeight: 160,
            width: '100%',
            backgroundColor: theme.color3,
            borderRadius: 8,
            position: 'absolute',
            top: 45,
            paddingVertical: 5,
            paddingHorizontal: '3%'
        }}>
            <CustomInput
                value={props.searchValue}
                onChangeText={() => { }}
                placeholder={'Search'}
                container={[styles.searchInputContainer, { backgroundColor: theme.color2 }]}
            />
            <View style={styles.searchResultContainer}>
                <Image source={{ uri: avatar }} style={styles.userAvatar} />
                <CustomText value="Seacrh Result 1" style={styles.searchResultText} />
            </View>
            <View style={styles.searchResultContainer}>
                <Image source={{ uri: avatar }} style={styles.userAvatar} />
                <CustomText value="Seacrh Result 2" style={styles.searchResultText} />
            </View>
            <View style={styles.searchResultContainer}>
                <Image source={{ uri: avatar }} style={styles.userAvatar} />
                <CustomText value="Seacrh Result 3" style={styles.searchResultText} />
            </View>
            <View style={styles.searchResultContainer}>
                <Image source={{ uri: avatar }} style={styles.userAvatar} />
                <CustomText value="Seacrh Result 4" style={styles.searchResultText} />
            </View>

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

export default connect( mapStatetoProps, mapDispatchToProps )( CustomSearchBox );


const styles = StyleSheet.create( {
    searchInputContainer: {
        borderRadius: 8,
        paddingHorizontal: 5,
        height: 40,
        paddingLeft: 20
    },
    searchResultText: {
        textAlign: 'left',
        marginTop: 6,
        borderBottomWidth: 1,
        paddingBottom: 2
    },
    userAvatar: {
        height: 24,
        width: 24,
        borderRadius: 24,
        marginRight: 12
    },
    searchResultContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
} )
