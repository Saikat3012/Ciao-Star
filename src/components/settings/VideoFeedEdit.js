import React, { Component } from 'react';

import CustomComponents from '../../CustomComponents';

import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomSearchBox from '../../commonComponents/CustomSearchBox';




const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;
const screenHeight = Dimensions.get( 'screen' ).height;


class VodeoFeedEdit extends Component {
    constructor( props ) {
        super( props );
        console.log( props.route.params )
        this.state = {
            subscribed: this.props.userType === 'VIP',
            pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
        }
    }

    handleSubscribe() {
        this.setState( { subscribed: !this.state.subscribed } )
    }
    handleEdit() {
        this.props.navigation.navigate("VideoEdit")
    }

    render() {
        return (
            <ImageBackground
                source={{ uri: this.state.pic }}
                imageStyle={{
                    resizeMode: 'contain'
                }}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: this.props.theme.primaryBackgroundColor
                }}>
                <View style={{
                    position: 'absolute',
                    bottom: windowHeight * 0.15
                }}>
                    <TouchableOpacity
                        onPress={()=>this.handleEdit()}
                        style={styles.buttonConatiner}>
                        <CustomComponents.CustomText value="EDIT" style={{ fontSize: 18 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleEdit()}
                        style={styles.buttonConatiner}>
                        <CustomComponents.CustomText value="CANCEL" style={{ fontSize: 18 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleEdit()}
                        style={styles.buttonConatiner}>
                        <CustomComponents.CustomText value="DELETE" style={{ fontSize: 18 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
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
export default connect( mapStatetoProps, mapDispatchToProps )( VodeoFeedEdit );


const styles = StyleSheet.create( {
    buttonConatiner: {
        backgroundColor: '#748',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 8,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
} )