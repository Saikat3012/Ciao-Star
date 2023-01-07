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
    Image
} from 'react-native';

class Subscriptions extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        bankDetails: [
            {
                id: 1,
                title: 'Jhon Smith',
            },
            {
                id: 2,
                title: 'Paul Kirk',
            },
            {
                id: 3,
                title: 'Maicol Derek',
            },
        ],
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleAccountSelect( ref, acc ) {
        ref.setState( { onFocus: acc.id } )
        alert( JSON.stringify( acc ) )
    }

    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.SUBSCRIPTION}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    {this.state.bankDetails.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                key={each.id}
                                onPress={() => this.handleAccountSelect( this, each )}
                                style={[styles.buttonContainer,
                                    { backgroundColor: this.props.theme.color3 },
                                    this.state.onFocus === each.id &&{borderColor:this.props.theme.color4}
                                ]}>
                                <CustomComponents.CustomText value={each.title} style={{ fontSize: 16 }} />
                                <AntDesign name="right" size={12} color={this.props.theme.color8} />
                            </TouchableOpacity>
                        )
                    } )}

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
export default connect( mapStatetoProps, mapDispatchToProps )( Subscriptions );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        marginTop: 18,
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'space-between',
        marginTop: 13,
        borderWidth: 1
    }
} )