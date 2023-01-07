import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

const videoList = [
    {
        id: 1,
        link: 'https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-720x560-c-default.jpg'
    },
    {
        id: 2,
        link: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1'
    },
    {
        id: 3,
        link: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1'
    },
    {
        id: 4,
        link: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1'
    },
    {
        id: 5,
        link: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1'
    },
    {
        id: 6,
        link: 'https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-720x560-c-default.jpg'
    },
    {
        id: 7,
        link: 'https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?width=1198&trim=1,1&bg-color=000&pad=1,1'
    },
    {
        id: 8,
        link: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif'
    },
    {
        id: 9,
        link: 'https://biteable.com/content/uploads/2017/07/Video-Thumbnails-sml-720x560-c-default.jpg'
    },
]

class AddPostVideoSelection extends Component {
    constructor( props ) {
        super( props );
    }
    state = {

    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }


    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>

                <View style={styles.contentContainer}>
                    <CustomComponents.CustomText value="New Post" />
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: windowWidth,
                        justifyContent: 'space-around',
                        marginTop: 25
                    }}>
                        {videoList.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("PostVideo")
                                    }}
                                    key={each.id} style={styles.videoContainer}>
                                    <Image source={{ uri: each.link }} style={styles.video} />
                                </TouchableOpacity>
                            )
                        } )}
                    </View>
                </View>
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
export default connect( mapStatetoProps, mapDispatchToProps )( AddPostVideoSelection );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '88%',
        alignItems: 'center',
        marginTop: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10
    },
    video: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.3,
        borderRadius: 12
    },
    videoContainer: {
        marginVertical: 12
    }
} )