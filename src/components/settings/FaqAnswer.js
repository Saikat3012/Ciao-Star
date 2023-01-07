import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/action'
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
    Image,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get( 'window' ).width;
const windowHeight = Dimensions.get( 'window' ).height;

class FaqAnswer extends Component {
    constructor( props ) {
        super( props );
        console.log( props.route.params.question )
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    playVideo( ref ) {
        alert( "Play Video" )
    }
    handleNextClick() {
        alert( "Next" )
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={this.props.route.params.quary ? '' : strings.FAQ}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <CustomComponents.CustomText value={this.props.route.params.question} style={{ fontSize: 14, textAlign: 'center', fontWeight: 'bold' }} />
                    <CustomComponents.CustomText value={this.props.route.params.answer} style={{ fontSize: 14, marginTop: 32 }} />


                    {this.props?.route?.params?.video == '' && <TouchableOpacity
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 }]}
                        onPress={() => this.playVideo( this )}
                    >
                        <CustomComponents.CustomText value={strings.WATCH_VIDEO} style={{ fontSize: 12 }} />
                        <AntDesign name="right" size={12} color={this.props.theme.color8} />
                    </TouchableOpacity>}

                    {/* {this.props.route?.params?.video && <TouchableOpacity
                        onPress={() => this.playVideo( this )}
                        style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 }]}>
                    </TouchableOpacity>} */}
                    {this.props.route.params.quary && <TouchableOpacity
                        onPress={() => this.handleNextClick()}
                        style={[styles.nextButtonContainer, { backgroundColor: this.props.theme.color3, borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.NEXT} style={styles.buttonText} />
                    </TouchableOpacity>}
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
export default connect( mapStatetoProps, mapDispatchToProps )( FaqAnswer );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        width: '85%',
        alignItems: 'center',
        marginTop: 18,
        alignSelf: 'center',
        minHeight: windowHeight * 0.9
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 18,
        paddingLeft: '20%',
        borderRadius: 5,
        paddingVertical: 50,
        justifyContent: 'space-around',
        marginTop: 54,
    },
    nextButtonContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40
    },
} )