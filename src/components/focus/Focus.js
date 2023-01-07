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

const catList = [
    {
        id: 1,
        title: 'Actor',
    },
    {
        id: 2,
        title: 'Atheletes',
    },
    {
        id: 3,
        title: 'Comedians',
    },
    {
        id: 4,
        title: 'Singer',
    },
]


const Focus = ( { navigation } ) => {
    const dispatch = useDispatch();
    const updateTheme = ( newTheme ) => dispatch( changeTheme( newTheme ) )
    const theme = useSelector( state => state.appReducer.theme )

    const [searchText, setSearchText] = useState( '' );
    const [catagorySelected, setCatagorySelected] = useState( "" );
    const [catagoryList, setCatagoryList] = useState( catList )


    const handleProfileClick = () => {
        alert( "Clicked on profile" )
    }

    const handleNotificationClick = () => {
        alert( "Clicked on Notification" )
    }

    const handleSettingsClick = () => {
        alert( "Clicked on Settings" )
    }
    const handleChangeSearchText = ( text ) => {
        setSearchText( text )
    }
    const handleSearchClick = () => {
        alert( "Clicked on Serach" )
    }
    const handleCatagorySelect = ( cat ) => {
        setCatagorySelected( cat.title )
    }




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
            <View style={styles.searchBarContainer}>
                <CustomComponents.CustomInput
                    value={searchText}
                    onChangeText={handleChangeSearchText}
                    placeholder={'Search'}
                    container={styles.searchInputContainer}
                />
                <TouchableOpacity onPress={() => handleSearchClick()}>
                    <Image source={ImgAssets.searchGray} />
                </TouchableOpacity>
            </View>


            <ScrollView
                horizontal={true}
                style={styles.categoryContainer}
            >
                {
                    catagoryList.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleCatagorySelect( each )}
                                key={each.id}
                                style={styles.categoryTextContainer}>
                                <CustomComponents.CustomText value={each.title} />
                            </TouchableOpacity>
                        )
                    } )
                }
            </ScrollView>

            <ImageBackground
                source={ImgAssets.banner1}
                style={styles.headBannerContainer}
            >
                <CustomComponents.CustomText
                    value={texts.BANNER_HEADING}
                    style={styles.headBanneerText}
                />
            </ImageBackground>


            <View style={styles.featureContainer}>
                <CustomComponents.CustomText
                    value={texts.TV}
                    style={styles.headBanneerText}
                />
                <View style={styles.featureInnerContainer}>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.select1Dark : ImgAssets.select1Dark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.tick2Dark : ImgAssets.tick2Dark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.playbackDark : ImgAssets.playbackDark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                </View>
            </View>

            <ImageBackground
                source={ImgAssets.gradient1}
                style={styles.detailsContainer}
                imageStyle={styles.detailsContainerImg}
            >
                <View style={styles.detailHeadContainer}>
                    <CustomComponents.CustomText
                        value={texts.WHAT_YOU_WILL_GET}
                        style={styles.headBanneerText}
                    />
                </View>
                <View style={styles.detailWrapper}>
                    <View style={styles.detailPointer} />
                    <CustomComponents.CustomText
                        value={texts.DETAILS1}
                        style={styles.detailsText}
                    />
                </View>
                <View style={styles.detailWrapper}>
                    <View style={styles.detailPointer} />
                    <CustomComponents.CustomText
                        value={texts.DETAILS2}
                        style={styles.detailsText}
                    />
                </View>
                <View style={styles.detailWrapper}>
                    <View style={styles.detailPointer} />
                    <CustomComponents.CustomText
                        value={texts.DETAILS3}
                        style={styles.detailsText}
                    />
                </View>
            </ImageBackground>
            <CustomComponents.CustomText
                style={[styles.headBanneerText, { alignSelf: 'center' }]}
                value={texts.CHANNELS}
            />
            <View style={styles.channelsContainer}>
                <View style={styles.channelsContent}>
                    <Image source={theme.type == 'dark' ? ImgAssets.tvDark : ImgAssets.tvDark} style={styles.channelIcon} />
                    <CustomComponents.CustomText
                        value={texts.TV}
                        style={styles.headBanneerText}
                    />
                </View>
                <View style={styles.channelsContent}>
                    <Image source={theme.type == 'dark' ? ImgAssets.tvDark : ImgAssets.tvDark} style={styles.channelIcon} />
                    <CustomComponents.CustomText
                        value={texts.TV}
                        style={styles.headBanneerText}
                    />
                </View>
            </View>

            <View style={styles.titleContainer1}>
                <CustomComponents.CustomText
                    style={{ fontSize: 20 }}
                    value={texts.PERSONALISED}
                />
                <CustomComponents.CustomText
                    secondary
                    style={{ fontSize: 20 }}
                    value={` ${ texts.VIDEO_MESSAGES }`}
                />
            </View>




            <View style={styles.featureContainer}>
                <View style={styles.featureInnerContainer}>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.select1Dark : ImgAssets.select1Dark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.chatDark : ImgAssets.chatDark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                    <View style={styles.features}>
                        <Image source={theme.type == 'dark' ? ImgAssets.giftDark : ImgAssets.giftDark} style={styles.featureIcon} />
                        <CustomComponents.CustomText value={texts.SELECT} style={styles.featuresText} />
                    </View>
                </View>
            </View>


            <View style={styles.titleContainer2}>
                <CustomComponents.CustomText
                    secondary
                    style={{ fontSize: 20 }}
                    value={texts.SUITABLE}
                />
                <CustomComponents.CustomText
                    style={{ fontSize: 20 }}
                    value={` ${ texts.FOR_EVERY_MOMENT }`}
                />
            </View>
            <Image
                style={styles.suitableBanner}
                source={ImgAssets.banner3} />

            <CustomComponents.CustomText
                style={{ fontSize: 20, alignSelf: 'center' }}
                value={texts.TITLE_3}
            />

            <Image
                style={styles.bottomBanner}
                source={ImgAssets.banner2} />



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
export default connect( mapStatetoProps, mapDispatchToProps )( Focus );

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