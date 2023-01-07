import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

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
    Image
} from 'react-native';
const loginMethods = [

]
class LogIn extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        selected: 'LEGAL',
        list: [
            {
                id: 'LEGAL',
                title: 'Legal center',
                desc: 'All the text will be provided'
            },
            {
                id: 'TERMS',
                title: 'Terms of service ',
                desc: 'All the text will be provided'
            },
            {
                id: 'PRIVACY',
                title: 'Privacy policy ',
                desc: 'All the text will be provided'
            },
            {
                id: 'COMMUNITY',
                title: 'Community guidelines ',
                desc: 'Hi'
            },
        ]
    }

    handleSignUpClick() {
        // alert( "Clicked on Next" )
        if ( this.props.userType === 'VIP' ) {
            this.props.navigation.navigate( "CategorySelection")
        } else {
            // this.props.navigation.navigate( 'HomeScreenUser' );
            // this.props.navigation.navigate( 'AccountSettings' );
            this.props.navigation.reset( {
                index: 0,
                routes: [{ name: 'AccountSettings' }],
            } );
        }
    }
    handleSelection( ref, id ) {
        ref.setState( { selected: id } )
    }
    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader normal backButtonPress={this.handleBackPress} parrentRef={this} />
                <View style={{
                    width: '100%',
                    height: 40,
                    marginTop: 36,
                }}>


                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={styles.topBar}>
                        {
                            this.state.list.map( ( each ) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this.handleSelection( this, each.id )}
                                        key={each.id}
                                        style={[styles.topTabButton, {
                                            borderColor: this.state.selected === each.id ?
                                                this.props.theme.color4
                                                : this.props.theme.color6
                                        }]}>
                                        <CustomComponents.CustomText
                                            value={each.title}
                                            style={{
                                                color: this.props.theme.color5,
                                                fontSize: 12
                                            }} />
                                    </TouchableOpacity>
                                )
                            } )
                        }
                    </ScrollView>
                </View>
                <View style={{ width: '90%' }}>
                    <ScrollView style={{ marginBottom: 200 }}>
                        {this.state.list.map( ( each ) => {
                            if ( each.id == this.state.selected ) {
                                return (
                                    <View key={each.id}>
                                        <CustomComponents.CustomText
                                            value={each.title}
                                            style={{
                                                fontSize: 15
                                            }} />
                                        <CustomComponents.CustomText
                                            value={each.desc}
                                            style={{
                                                fontSize: 12,
                                                marginTop: 32
                                            }} />
                                    </View>
                                )
                            }
                        } )}
                    </ScrollView>
                </View>



                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        onPress={() => this.handleSignUpClick()}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.SIGNUP} style={styles.buttonText} />
                    </TouchableOpacity>
                </View>
            </View>

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
export default connect( mapStatetoProps, mapDispatchToProps )( LogIn );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    buttonContainer: {
        width: '80%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 10
    },
    bottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 40
    },
    topBar: {
        flexDirection: 'row',
        height: 20,
    },
    topTabButton: {
        borderBottomWidth: 2,
        paddingHorizontal: 8,
        height: 25,
    }
} )