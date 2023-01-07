import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
    FlatList
} from 'react-native';

import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';



import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const listOfStatus = [
    {
        id: 1,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        name: 'Josh Smith'
    },
    {
        id: 2,
        avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        name: 'Josh Smith'
    },
    {
        id: 3,
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        name: 'Josh Smith'
    },
    {
        id: 4,
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        name: 'Josh Smith'
    },
    {
        id: 5,
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        name: 'Josh Smith'
    },
]
const postList = [
    {
        id: 1,
        pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        title: 'Shooting Star',
        time: '12:30 Min'

    },
    {
        id: 2,
        pic: 'data:image/jpeg;base64,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',
        title: 'Shooting Star',
        time: '12:30 Min'
    },
    {
        id: 3,
        pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Shooting Star',
        time: '12:30 Min'
    },
    {
        id: 4,
        pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Shooting Star',
        time: '12:30 Min'
    },
    {
        id: 5,
        pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Shooting Star',
        time: '12:30 Min'
    },
]


class Home2 extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            searchText: '',
            catagorySelected: '',
            statusList: listOfStatus,
            catagoryList: catList,

            internationalPost: postList,
            topPicksPost: postList,
            actorsPost: postList

        }
    }
    // const dispatch = useDispatch();
    // const updateTheme = ( newTheme ) => dispatch( changeTheme( newTheme ) )
    // const theme = useSelector( state => state.appReducer.theme )

    // const[searchText, setSearchText] = useState( '' );
    // const[catagorySelected, setCatagorySelected] = useState( "" );
    // const[catagoryList, setCatagoryList] = useState( catList )

    // const[statusList, setStatusList] = useState( listOfStatus )
    // const[postList, setPostList] = useState( [] )


    handleProfileClick = () => {
        alert( "Clicked on profile" )
    }

    handleNotificationClick = () => {
        alert( "Clicked on Notification" )
    }

    handleSettingsClick = () => {
        this.props.navigation.navigate( "AccountSettings" )
    }
    handleChangeSearchText = ( text ) => {
        this.setState( { searchText: text } )
    }
    handleSearchClick = () => {
        alert( "Clicked on Serach" )
    }
    handleCatagorySelect = ( cat ) => {
        this.setState( { catagorySelected: cat.title } )

    }


    renderItem = ( { item } ) => (
        <View style={styles.eachStatusContainer}>
            <View style={styles.eachStatusInnerContainer}>
                <Image source={{ uri: item.avatar }} style={styles.statusUserAvatar} />
            </View>
            <CustomComponents.CustomText
                style={styles.statusUserName}
                value={item.name}
            />
        </View>
    );


    leftHeaderChield = () => (
        <TouchableOpacity onPress={() => this.handleProfileClick()}>
            <FontAwesome name="user-circle" color={this.props.theme.primaryTextColor} size={25} />
        </TouchableOpacity>
    )
    rightHeaderChield = () => (
        <View style={styles.rightHeaderChieldContainer}>
            <TouchableOpacity onPress={() => this.handleNotificationClick()} style={{ marginRight: 19 }}>
                {this.props.theme.type == 'dark' ?
                    <Image source={ImgAssets.notificationDark} style={[styles.icon, { width: 23 }]} /> :
                    <Image source={ImgAssets.notificationDark} style={[styles.icon, { width: 23 }]} />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.handleSettingsClick()}>
                {this.props.theme.type == 'dark' ?
                    <Image source={ImgAssets.settingsDark} style={styles.icon} /> :
                    <Image source={ImgAssets.settingsDark} style={styles.icon} />}
            </TouchableOpacity>
        </View>
    )

    renderPost = ( list, ref ) => {
        // console.log( "============ ref==========" )
        // console.log( ref.navigation )
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {list?.map( ( each ) => {
                    return (
                        <TouchableOpacity
                            onPress={() => ref.props.navigation.navigate( "ProfileViewUser" )}
                            key={each.id}
                            style={styles.postContainer}>
                            <Image source={{ uri: each.pic }} style={styles.postPic} />
                        </TouchableOpacity>
                    )
                } )}
            </ScrollView>
        )
    }
    render() {

        return (
            <ScrollView style={[{ backgroundColor: this.props.theme.primaryBackgroundColor }, styles.container]}>
                <CustomComponents.CustomHeader
                    leftChield={this.leftHeaderChield}
                    rightChield={this.rightHeaderChield}

                    primary
                    textStyle={{ fontSize: 24 }}
                />
                <View style={styles.searchBarContainer}>
                    <CustomComponents.CustomInput
                        value={this.state.searchText}
                        onChangeText={this.handleChangeSearchText}
                        placeholder={'Search'}
                        container={styles.searchInputContainer}
                    />
                    <TouchableOpacity onPress={() => this.handleSearchClick()}>
                        <Image source={ImgAssets.searchGray} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 16 }}>
                    <CustomComponents.CustomText
                        value={texts.TV}
                        style={[styles.headBanneerText, { marginTop: 12, marginBottom: 7 }]}
                    />
                    <FlatList
                        data={this.state.statusList}
                        horizontal={true}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>


                <ScrollView
                    horizontal={true}
                    style={styles.categoryContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        this.state.catagoryList?.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.handleCatagorySelect( each )}
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

                <View style={styles.headerContainer}>
                    <CustomComponents.CustomText value="Internationals" style={styles.headerText} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate( "ShowContentCatagoryWise", { list: this.state.internationalPost, title: 'Internationals' } )}>
                        <CustomComponents.CustomText
                            value="See all"
                            style={[styles.headerButtonText, { color: this.props.theme.color4 }]} />
                    </TouchableOpacity>
                </View>
                {this.renderPost( this.state.internationalPost, this )}
                <View style={styles.headerContainer}>
                    <CustomComponents.CustomText value="Top Picks" style={styles.headerText} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate( "ShowContentCatagoryWise", { list: this.state.internationalPost, title: 'Top Picks' } )}>
                        <CustomComponents.CustomText
                            value="See all"
                            style={[styles.headerButtonText, { color: this.props.theme.color4 }]} />
                    </TouchableOpacity>
                </View>
                {this.renderPost( this.state.topPicksPost, this )}
                <View style={styles.headerContainer}>
                    <CustomComponents.CustomText value="Actors" style={styles.headerText} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate( "ShowContentCatagoryWise", { list: this.state.internationalPost, title: 'Actors' } )}>
                        <CustomComponents.CustomText
                            value="See all"
                            style={[styles.headerButtonText, { color: this.props.theme.color4 }]} />
                    </TouchableOpacity>
                </View>
                {this.renderPost( this.state.actorsPost, this )}
                <View style={{ height: 75 }} />
            </ScrollView>
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
export default connect( mapStatetoProps, mapDispatchToProps )( Home2 );

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
        paddingRight: 15,
        marginTop: 10
    },
    headerContainer: {
        flexDirection: 'row',
        width: '95%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginLeft: '2.7%',
        marginTop: 20,
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchInputContainer: {
        width: '90%',
        backgroundColor: color.grey1,
        borderRadius: 25,
        paddingHorizontal: 5,
        height: 40,
        paddingLeft: 20
    },
    categoryContainer: {
        marginTop: 16,
        marginHorizontal: 12,
        marginBottom: 8
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
    statusContainer: {
        marginLeft: 28,
        marginRight: 46,
        marginTop: 4
    },
    featureInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusInnerContainer: {
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
    },
    eachStatusContainer: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eachStatusInnerContainer: {
        borderWidth: 3,
        borderColor: '#B79B0B',
        height: 75,
        width: 75,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusUserAvatar: {
        height: 60,
        width: 60,
        borderRadius: 60
    },
    statusUserName: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    postContainer: {
        height: 175,
        width: 140,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#B79B0B',
        marginHorizontal: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postPic: {
        height: 171,
        width: 136,
        borderRadius: 25,
    }
} )