import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import strings from '../../commonComponents/strings';
import moment from 'moment';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    Dimensions,
    FlatList
} from 'react-native';

const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;


const podcastList = [
    {
        id: 1,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
    {
        id: 2,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
    {
        id: 3,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
    {
        id: 4,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
    {
        id: 5,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
    {
        id: 6,
        title: 'So You want to a youtuber?',
        description: "The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. The characters are spread out evenly so that the reader's attention is focused on the layout of the text instead of its content.",
        date: new Date(),
        duration: '1 hr, 3 min',
        pic: 'https://st.depositphotos.com/1008768/4671/i/450/depositphotos_46718315-stock-photo-podcast.jpg'
    },
]

const chipItems = [
    {
        value: '52',
        chipLabel: 'Video',
        selected: true,
        id: 1
    },
    {
        value: '??1.20',
        chipLabel: 'Subscription',
        selected: false,
        id: 2
    },
    {
        value: '1.3 M',
        chipLabel: 'Viewers',
        selected: false,
        id: 3
    }
]
const podcastTypeList = [
    {
        id: 1,
        title: 'Comedy'
    },
    {
        id: 2,
        title: 'Education'
    },
]


const contentSections = [
    {
        id: 1,
        title: 'STORY',
        selected: true,
    },
    {
        id: 2,
        title: 'POST',
        selected: false,
    },
    {
        id: 3,
        title: 'PODCAST',
        selected: false,
    },
    {
        id: 4,
        title: 'LIVE',
        selected: false,
    }
]
const postList = [
    {
        id: 1,
        pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        title: 'Singing in Public',
        time: '12:30 Min'
    },
    {
        id: 2,
        pic: 'data:image/jpeg;base64,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',
        title: 'Pranking my mum',
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
        pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        title: 'Singing in Public',
        time: '12:30 Min'
    },
    {
        id: 5,
        pic: 'data:image/jpeg;base64,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',
        title: 'Pranking my mum',
        time: '12:30 Min'
    },
    {
        id: 6,
        pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Shooting Star',
        time: '12:30 Min'
    },
    {
        id: 7,
        pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
        title: 'Singing in Public',
        time: '12:30 Min'
    },
    {
        id: 8,
        pic: 'data:image/jpeg;base64,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',
        title: 'Pranking my mum',
        time: '12:30 Min'
    },
    {
        id: 9,
        pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Shooting Star',
        time: '12:30 Min'
    },

]
const userDetails = {
    coverPic: 'https://i0.wp.com/statusbro.in/wp-content/uploads/2018/08/Fb-Cover-photos.jpg?resize=768%2C284&ssl=1',
    profilePic: 'https://www.leadmeonline.com/wp-content/uploads/2018/04/user-placeholder-man-10-6-300x300.jpg',
    userName: 'KLEVIS SMITH',
    userTitle: 'Football Player  |  AC Milan'
}

class ProfileView extends Component {
    constructor( props ) {
        super( props );
        console.log( this.flatListRef )
    }
    state = {
        onFocus: '',
        userDetails: userDetails,
        chipItems: chipItems,
        contentSections: contentSections,
        postList: postList,
        podcastList: podcastList
    }
    handleAddCoverPic() {
        alert( "Add Cover Pic" )
    }
    handleAddProfilePic() {
        alert( "Add Profile Pic" )
    }
    handleSelectCatagory( selectedItem ) {
        var tempList = this.state.chipItems;
        tempList.map( ( each ) => {
            // console.log( each )
            if ( each.id == selectedItem.id ) {
                each.selected = true
            } else {
                each.selected = false
            }
        } )
        // console.log( tempList )
        this.setState( { chipItems: tempList } )

    }
    handleContentSelction( selectedItem, clickEvent ) {
        var tempList = this.state.contentSections;
        tempList.map( ( each ) => {
            // console.log( each )
            if ( each.id == selectedItem.id ) {
                each.selected = true
            } else {
                each.selected = false
            }
        } )
        // console.log( tempList )
        this.setState( { contentSections: tempList } )
        // console.log( "************* index : " + selectedItem.id - 1 )
        if ( clickEvent ) {
            this.flatListRef.scrollToIndex( { animated: true, index: this.state.contentSections.indexOf( selectedItem ) } );
        }
    }
    handleAddPodcast() {
        this.props.navigation.navigate( "AddPodcast" )
    }

    // renderPost = ( { item, ref } ) => (
    //     <TouchableOpacity key={item.id} style={[styles.postContainer, { backgroundColor: ref?.props?.theme.color3 }]}>
    //         <Image source={{ uri: item.pic }} style={styles.postPic} />
    //         <CustomComponents.CustomText value={item.title} />
    //         <CustomComponents.CustomText value={item.time} />
    //     </TouchableOpacity>
    // );

    renderContent( selectedContent, ref ) {
        if ( selectedContent.title === 'LIVE' ) {
            return (
                <View style={{ width: windowWidth, alignItems: 'center' }}>
                    <View style={{ marginTop: 25, alignItems: 'center' }}>
                        <CustomComponents.CustomText value="Stream Live" style={{ fontSize: 10, marginBottom: 15 }} />
                        <TouchableOpacity
                            onPress={() => { ref.props.navigation.navigate( "StartLiveStream" ) }}
                            style={{
                                borderColor: ref.props.theme.color4,
                                borderWidth: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 30,
                                backgroundColor: ref.props.theme.color2
                            }}>
                            <Image source={ImgAssets.live} style={{ height: 102, width: 74, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }
        // console.log( ref )
        if ( selectedContent.title === 'PODCAST' ) {
            return (
                <View style={{ width: windowWidth, alignItems: 'center', alignItems: 'center' }}>
                    <View style={{
                        width: windowWidth * 0.92,
                        flexDirection: 'row',
                        backgroundColor: this.props.theme.color12,
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 4,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <CustomComponents.CustomText value="All Episods" />
                        <TouchableOpacity style={{
                            backgroundColor: this.props.theme.color8,
                            paddingHorizontal: 16,
                            paddingVertical: 6,
                            borderRadius: 8

                        }}>
                            <CustomComponents.CustomText value="Sort" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: windowWidth * 0.94,
                        flexWrap: 'wrap',
                        marginTop: 12
                    }}>
                        {podcastTypeList.map( ( each ) => {
                            return (
                                <TouchableOpacity style={[itemStyles.podcastType,
                                { backgroundColor: this.props.theme.color6 }]}>
                                    <CustomComponents.CustomText value={each.title} />
                                </TouchableOpacity>
                            )
                        } )}
                    </View>

                    <TouchableOpacity
                        onPress={() => this.handleAddPodcast()}
                        style={{
                            flexDirection: 'row',
                            width: windowWidth * 0.9,
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            paddingVertical: 8,
                            borderRadius: 8,
                            backgroundColor: this.props.theme.color12,
                            marginTop: 4
                        }}>
                        <CustomComponents.CustomText value="Add podcast" />
                        <AntDesign name="plus" color={this.props.theme.color4} size={24} />
                    </TouchableOpacity>



                    <FlatList
                        data={this.state.podcastList}
                        keyExtractor={each => each.id}
                        renderItem={( ( { item } ) => {
                            return (
                                <View style={[itemStyles.podcastItemContainer, { borderTopColor: this.props.theme.color10 }]}>
                                    <View style={itemStyles.podcastHeaderContainer}>
                                        <Image source={{ uri: item.pic }} style={itemStyles.podcastPic} />
                                        <CustomComponents.CustomText value={item.title} style={itemStyles.podcastTitle} />
                                    </View>
                                    <CustomComponents.CustomText
                                        style={[{ color: this.props.theme.color7 }, itemStyles.podcastDescription]}
                                        numberOfLines={2}
                                        value={item.description} />
                                    <CustomComponents.CustomText
                                        style={[{ color: this.props.theme.color7, marginTop: 4 }, itemStyles.podcastDescription]}
                                        value={`${ moment( item.date ).format( "DD MMM YYYY" ) } . ${ item.duration }`} />

                                    <View style={itemStyles.podcastFunctionsContainer}>
                                        <View style={itemStyles.podcastFunctionsLeftContainer}>
                                            <TouchableOpacity>
                                                <Ionicons name="add-circle-outline" size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Ionicons name="ios-arrow-down-circle-outline" size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <AntDesign name="upload" size={22} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Entypo name="dots-three-horizontal" size={22} />
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity>
                                            <AntDesign name="play" size={28} />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            )
                        } )}
                    />

                </View>
            )
        }
        return (
            <View style={{ width: windowWidth, alignItems: 'center' }}>
                <View style={{ flexWrap: 'wrap', width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity
                        onPress={() => ref.props.navigation.navigate( selectedContent.title === 'STORY' ? "PostVideoFeed" : "AddPostVideoSelection" )}
                        style={[styles.postContainer, {
                            backgroundColor: ref?.props?.theme.color3,
                            borderWidth: 2,
                            borderColor: ref.props.theme.color4
                        }]}>
                        <Text style={{
                            fontSize: windowHeight * 0.04,
                            color: '#fff'
                        }}>+</Text>
                    </TouchableOpacity>
                    {this.state.postList.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { ref.props.navigation.navigate( "VideoFeed", each ) }}
                                key={each.id}
                                style={[styles.postContainer, { backgroundColor: ref?.props?.theme.color3 }]}>
                                <Image source={{ uri: each.pic }} style={styles.postPic} />
                                <View style={{ marginVertical: 4 }}>
                                    <CustomComponents.CustomText value={each.title} style={{ fontSize: 8 }} />
                                    <CustomComponents.CustomText value={each.time} style={{ fontSize: 6, color: ref?.props?.theme.color7 }} />
                                </View>
                            </TouchableOpacity>
                        )
                    } )}
                </View>
            </View>
        )
    }


    render() {
        return (
            <ScrollView
                style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <View style={styles.contentContainer}>
                    <ImageBackground
                        source={{ uri: this.state.userDetails.coverPic }}
                        imageStyle={styles.coverImage}
                        style={styles.coverPicContainer}>
                        <TouchableOpacity onPress={() => this.handleAddCoverPic()}>
                            <Text style={{
                                fontSize: windowHeight * 0.1,
                                color: '#fff'
                            }}>+</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                    <View style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        borderColor: this.props.theme.color4,
                        marginTop: -40
                    }}>
                        <ImageBackground
                            source={{ uri: this.state.userDetails.profilePic }}
                            style={styles.profilePicContainer}
                            imageStyle={styles.profilePic}
                        >
                            <TouchableOpacity onPress={() => this.handleAddProfilePic()}>
                                <Text style={{
                                    fontSize: 36,
                                    color: '#fff',
                                }}>+</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <CustomComponents.CustomText value={this.state.userDetails.userName}
                        style={{
                            marginTop: 18,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }} />
                    <CustomComponents.CustomText value={this.state.userDetails.userTitle}
                        style={{
                            marginTop: 5,
                            fontSize: 15,
                        }} />


                    <TouchableOpacity style={[styles.subscribeButton,
                    { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.SUBSCRIBED}
                            style={{
                                marginTop: 5,
                                fontSize: 15,
                            }} />
                        <AntDesign name="check" size={25} color={this.props.theme.color4} style={{ marginLeft: '22%' }} />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginBottom: 10,
                            marginTop: 18
                        }}>
                        {this.state.chipItems?.map( ( each ) => {
                            return (
                                <View key={each.id} style={{ marginHorizontal: 2 }}>
                                    <View style={[chipStyles.container]}>
                                        <View style={chipStyles.chipIcon}>
                                            <CustomComponents.CustomText style={{ fontSize: 10, marginLeft: 8 }} value={each.value} />
                                        </View>
                                        <CustomComponents.CustomText style={{ fontSize: 10, marginLeft: 8 }} value={each.chipLabel} />
                                    </View>
                                </View>
                            )
                        } )}

                    </View>
                    <View style={styles.contentSectionsContainer}>
                        {this.state.contentSections?.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.handleContentSelction( each, true )}
                                    key={each.id} style={[each.selected && {
                                        backgroundColor: this.props.theme.color4,
                                    }, styles.contentSectionsButton]}>
                                    <CustomComponents.CustomText value={each.title} style={{ fontSize: 10 }} />
                                </TouchableOpacity>
                            )
                        } )}
                    </View>
                    {/* {this.state.contentSections.map( ( each ) => {
                        if ( each.selected ) {
                            return (
                                this.renderContent( each, this )
                            )
                        }
                    } )} */}
                    <SwiperFlatList
                        ref={ref => {
                            this.flatListRef = ref;
                        }}
                        index={0}
                        onChangeIndex={( { index } ) => index >= 0 && index < this.state.contentSections.length && this.handleContentSelction( this.state.contentSections[index], false )}
                        // onScroll={() => { console.log( this.flatListRef.onChangeIndex() ) }}
                        data={this.state.contentSections}
                        getCurrentIndex={( { each } ) => console.log( each )}
                        renderItem={( { item } ) => this.renderContent( item, this )}
                        keyExtractor={item => item.id}
                    />






                </View>
            </ScrollView>

        );
    }
}

const mapStatetoProps = ( state ) => {
    return {
        theme: state.appReducer.theme,
        userType: state.appReducer.userType
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        changeTheme: ( theme ) => dispatch( changeTheme( theme ) ),
        setUserType: ( userType ) => dispatch( setUserType( userType ) )
    }
}
export default connect( mapStatetoProps, mapDispatchToProps )( ProfileView );


const itemStyles = StyleSheet.create( {
    podcastItemContainer: {
        width: windowWidth * 0.92,
        borderTopWidth: 3,
        marginVertical: 8,
        paddingTop: 12
    },
    podcastHeaderContainer: {
        flexDirection: 'row'
    },
    podcastPic: {
        height: 60,
        width: 60,
        borderRadius: 5,
        marginRight: 15
    },
    podcastTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    podcastDescription: {
        marginTop: 8
    },
    podcastFunctionsLeftContainer: {
        flexDirection: 'row',
        width: windowWidth * 0.35,
        justifyContent: 'space-between'
    },
    podcastFunctionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18
    },
    podcastType: {
        marginHorizontal: 12,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20
    }
} )

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    coverPicContainer: {
        width: '100%',
        height: windowHeight * 0.2,
        borderBottomLeftRadius: 27,
        borderBottomRightRadius: 27,
        alignItems: 'center'
    },
    coverImage: {
        resizeMode: 'stretch',
        borderBottomLeftRadius: 27,
        borderBottomRightRadius: 27
    },
    profilePicContainer: {
        height: 60,
        width: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    profilePic: {
        borderRadius: 5,
        resizeMode: 'stretch'
    },
    subscribeButton: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '60%',
        justifyContent: 'flex-end',
        paddingHorizontal: 8,
        paddingBottom: 8,
        marginTop: 13,
        borderRadius: 5,
        alignItems: 'center',
    },
    contentSectionsContainer: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 18
    },
    contentSectionsButton: {
        paddingHorizontal: 12,
        paddingVertical: 3,
        borderRadius: 15
    },
    postContainer: {
        width: '24%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2
    },
    postPic: {
        height: 108,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }
} )

const chipStyles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#1F1F1F',
        borderRadius: 5,
    },
    chipIcon: {
        padding: 5,
        backgroundColor: '#343333',
        marginRight: 3,
        borderRadius: 5,
    },
} );