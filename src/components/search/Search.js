import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';



import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import texts from './texts';




const Search = ( { navigation } ) => {
    const dispatch = useDispatch();
    const updateTheme = ( newTheme ) => dispatch( changeTheme( newTheme ) )
    const theme = useSelector( state => state.appReducer.theme )

    // const [searchText, setSearchText] = useState( '' );
    // const [catagorySelected, setCatagorySelected] = useState( "" );
    // const [catagoryList, setCatagoryList] = useState( catList )


    // const handleProfileClick = () => {
    //     alert( "Clicked on profile" )
    // }

    // const handleNotificationClick = () => {
    //     alert( "Clicked on Notification" )
    // }

    // const handleSettingsClick = () => {
    //     alert( "Clicked on Settings" )
    // }
    // const handleChangeSearchText = ( text ) => {
    //     setSearchText( text )
    // }
    // const handleSearchClick = () => {
    //     alert( "Clicked on Serach" )
    // }
    // const handleCatagorySelect = ( cat ) => {
    //     setCatagorySelected( cat.title )
    // }




    const leftHeaderChield = () => (
        <TouchableOpacity onPress={() => handleProfileClick()}>
            {theme.type == 'dark' ?
                <Image source={ImgAssets.profileDark} style={styles.icon} /> :
                <Image source={ImgAssets.profileDark} style={styles.icon} />}
        </TouchableOpacity>
    )
    const rightHeaderChield = () => (
        <View style={styles.rightHeaderChieldContainer}>
            <TouchableOpacity onPress={() => handleNotificationClick()} style={{ marginRight: 19 }}>
                {theme.type == 'dark' ?
                    <Image source={ImgAssets.notificationDark} style={[styles.icon, { width: 23 }]} /> :
                    <Image source={ImgAssets.notificationDark} style={[styles.icon, { width: 23 }]} />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSettingsClick()}>
                {theme.type == 'dark' ?
                    <Image source={ImgAssets.settingsDark} style={styles.icon} /> :
                    <Image source={ImgAssets.settingsDark} style={styles.icon} />}
            </TouchableOpacity>
        </View>
    )
    return (
        <ScrollView style={[{ backgroundColor: theme.primaryBackgroundColor }, styles.container]}>
            <CustomComponents.CustomHeader
                leftChield={leftHeaderChield}
                rightChield={rightHeaderChield}
                primary title=""
                textStyle={{ fontSize: 24 }}
            />




        </ScrollView>
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
export default connect( mapStatetoProps, mapDispatchToProps )( Search );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    rightHeaderChieldContainer: {
        flexDirection: 'row'
    },
    icon: {
        width: 27,
        height: 31.06
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 15
    },
    searchInputContainer: {
        width: '85%',
        backgroundColor: color.grey1,
        borderRadius: 25,
        paddingHorizontal: 5
    },
    categoryContainer: {
        marginTop: 9,
        marginHorizontal: 12,
    },
    categoryTextContainer: {
        backgroundColor: color.grey1,
        borderRadius: 25,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginHorizontal: 6
    },
    headBannerContainer: {
        width: '100%',
        height: 215,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headBanneerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    featureContainer: {
        marginLeft: 28,
        marginRight: 46,
        marginTop: 4
    },
    featureInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    features: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    featuresText: {
        fontSize: 20,
        marginTop: 7.54
    },
    detailsContainer: {
        height: 175,
        width: '100%',
        marginLeft3: 13,
        marginRight: 20,
        borderRadius: 15,
        marginTop: 33,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 11
    },
    detailsContainerImg: {
        resizeMode: 'contain',
    },
    detailHeadContainer: {
        paddingHorizontal: 11,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: color.white,
        borderRadius: 15
    },
    detailsText: {
        fontSize: 17,
        marginLeft: 10
    },
    detailPointer: {
        height: 5,
        width: 5,
        backgroundColor: color.white,
        borderRadius: 5
    },
    detailWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 11
    },
    channelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginBottom: 14
    },
    channelsContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: 190,
        borderWidth: 2,
        borderColor: color.white,
        borderRadius: 22,
        marginTop: 11
    },
    channelIcon: {
        marginBottom: 26
    },
    titleContainer1: {
        flexDirection: 'row',
        marginLeft: 24,
        marginBottom: 28
    },
    titleContainer2: {
        flexDirection: 'row',
        marginLeft: 24,
        marginTop: 29
    },
    suitableBanner: {
        width: "95%",
        alignSelf: 'center',
        marginBottom: 12,
        height: 65
    },
    bottomBanner: {
        width: "95%",
        alignSelf: 'center',
        marginTop: 20
    }
} )