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
import AntDesign from 'react-native-vector-icons/AntDesign'

import strings from './strings';
import AppLogo from './AppLogo'
import ImgAssets from '../ImgAssets';


const CustomHeader = ( props ) => {
    const dispatch = useDispatch();
    const themes = useSelector( state => state.appReducer.theme )
    if ( props.normal ) {
        return (
            <View style={styles.normalHeaderContainer}>
                <View style={styles.normalSideButtonContaier}>
                    {props.backButtonPress && <TouchableOpacity onPress={() => props.backButtonPress( props.parrentRef )}>
                        <AntDesign name="left" size={12} color={themes.primaryTextColor}/>
                        {/* <Image source={ImgAssets.tick2Dark} style={{ height: 10, width: 10 }} /> */}
                    </TouchableOpacity>}
                </View>
                <View style={{ flex: 4 }}>
                    <AppLogo size={20} first={strings.SOCIAL} second={strings.STREAM} />
                </View>
                <View style={styles.normalSideButtonContaier}>
                    {props.rightButtonPress && <TouchableOpacity>
                    </TouchableOpacity>}
                </View>

            </View>
        )
    }

    if ( props.title ) {
        return (
            <View style={styles.normalHeaderContainer}>
                <View style={styles.normalSideButtonContaier}>
                    {props.backButtonPress && <TouchableOpacity onPress={() => props.backButtonPress( props.parrentRef )}>
                        <AntDesign name="left" size={12} color={themes.primaryTextColor}/>
                        {/* <Image source={ImgAssets.leftArrow} style={{ height: 10, width: 10 }} /> */}
                    </TouchableOpacity>}
                </View>
                <View style={{ flex: 4 }}>
                    <AppLogo size={20} first={props.firstValue} second={props.secondValue} />
                </View>
                <View style={styles.normalSideButtonContaier}>
                    {props.rightButtonPress && <TouchableOpacity>
                    </TouchableOpacity>}
                </View>

            </View>
        )
    }
    if ( props.normalWithButtons ) {
        return (
            <View style={[styles.container, { backgroundColor: themes.primaryBackgroundColor }]}>
                <View style={styles.leftChieldContainer}>
                    {props.leftChield && <props.leftChield />}
                </View>
                <View style={{ flex: 4 }}>
                    <AppLogo size={20} first={strings.SOCIAL} second={strings.STREAM} />
                </View>
                <View style={styles.rightChieldContainer}>
                    {props.rightChield && <props.rightChield />}
                </View>
            </View>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: themes.primaryBackgroundColor }]}>
            <View style={styles.leftChieldContainer}>
                {props.leftChield && <props.leftChield />}
            </View>
            <View style={styles.titleContainer}>
                <Image source={ImgAssets.appLogo}/>
            </View>
            <View style={styles.rightChieldContainer}>
                {props.rightChield && <props.rightChield />}
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

export default connect( mapStatetoProps, mapDispatchToProps )( CustomHeader );

const styles = StyleSheet.create( {
    container: {
        width: "100%",
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 10,
        alignItems: 'center'
    },
    leftChieldContainer: {
        flex: 3,
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 5,
        justifyContent: 'center',
    },
    rightChieldContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    normalHeaderContainer: {
        width: '100%',
        paddingVertical: 9,
        flexDirection: 'row'
    },
    normalSideButtonContaier: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
} )