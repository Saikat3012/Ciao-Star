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
    ImageBackground
} from 'react-native';

class AddBankDetails extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        selectedOption: 'CARD',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardHolderName: '',

        accountNumber: '',
        routingNumber: '',
        currency: '',
        accountHolderName: '',
        onFocus: ''
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }

    handleOptionClick( selectedOption ) {
        this.setState( { selectedOption: selectedOption } )
    }


    updateExpiryDate( text ) {
        if ( text.length > 5 ) return
        if ( text.length == 2 && text.length > this.state.expiryDate.length ) {
            text += '/'
        }
        this.setState( { expiryDate: text } )
    }
    updateCardNumber( text ) {
        if ( text.length > 19 ) return
        if ( text.length > this.state.cardNumber.length && text.length == 4 || text.length == 9 || text.length == 14 ) {
            text += ' '
        }
        this.setState( { cardNumber: text } )
    }
    updateCvv( text ) {
        if ( text.length > 3 ) return
        this.setState( { cvv: text } )
    }
    handleUpdate() {
        this.setState( { onFocus: 'Update' } )
        alert( "Update Done" )
    }
    handleDelete() {
        this.setState( { onFocus: 'Delete' } )
        alert( "Delete done" )
    }

    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.ADD_CARD}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>


                    <View style={styles.optionSelectionContainer}>
                        <TouchableOpacity
                            onPress={() => this.handleOptionClick( 'CARD' )}
                            style={[styles.optionSelectionButton,
                            this.state.selectedOption === 'CARD' ? {
                                borderColor: this.props.theme.color4
                            } : {
                                backgroundColor: this.props.theme.color3
                            }]}>
                            <CustomComponents.CustomText
                                value={strings.CARD}
                                style={[{
                                    fontSize: 16
                                }, this.state.selectedOption === 'CARD' && {
                                    color: this.props.theme.color4
                                }]} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.handleOptionClick( 'BANK' )}
                            style={[styles.optionSelectionButton,
                            this.state.selectedOption === 'BANK' ? {
                                borderColor: this.props.theme.color4
                            } : {
                                backgroundColor: this.props.theme.color3
                            }]}>
                            <CustomComponents.CustomText
                                value={strings.BANK_ACCOUNT}
                                style={[{
                                    fontSize: 16
                                }, this.state.selectedOption === 'CARD' && {
                                    color: this.props.theme.color4
                                }]} />
                        </TouchableOpacity>
                    </View>

                    <ImageBackground
                        source={ImgAssets.cardBackground}
                        style={styles.cardBackGroundContainer}
                        imageStyle={styles.cardBackGroundImgStyle}
                    >
                        <View style={styles.cardDetailsContainer}>
                            <CustomComponents.CustomText value={strings.CARD_NUMBER} style={{ fontSize: 20, color: this.props.theme.color8 }} />
                            <CustomComponents.CustomText value={strings.EXPIRY} style={{ fontSize: 20, color: this.props.theme.color8 }} />
                            <CustomComponents.CustomText value={strings.CARD_HOLDER} style={{ fontSize: 20, color: this.props.theme.color8 }} />
                        </View>
                    </ImageBackground>

                    {this.state.selectedOption === 'CARD' ?
                        <View style={{
                            width: '100%',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <CustomComponents.CustomInput
                                dflt
                                value={this.state.cardNumber}
                                placeholder={strings.CARD_NUMBER}
                                placeholderTextColor={this.props.theme.color9}
                                maxLength={19}
                                keyboardType='number-pad'
                                onChangeText={( text ) => this.updateCardNumber( text )}
                                container={styles.inputContainer} />
                            <View style={styles.smallInputBox}>
                                <CustomComponents.CustomInput
                                    dflt
                                    value={this.state.expiryDate}
                                    placeholder={strings.EXPIRY}
                                    maxLength={5}
                                    keyboardType='number-pad'
                                    placeholderTextColor={this.props.theme.color9}
                                    onChangeText={( text ) => this.updateExpiryDate( text )}
                                    container={styles.smallInputContainer} />
                                <CustomComponents.CustomInput
                                    dflt
                                    value={this.state.cvv}
                                    maxLength={3}
                                    keyboardType='number-pad'
                                    placeholder={strings.CVV}
                                    placeholderTextColor={this.props.theme.color9}
                                    onChangeText={( text ) => this.updateCvv( text )}
                                    container={styles.smallInputContainer} />
                            </View>

                            <CustomComponents.CustomInput
                                dflt
                                value={this.state.cardHolderName}
                                placeholder={strings.CARD_HOLDER}
                                placeholderTextColor={this.props.theme.color9}
                                onChangeText={( text ) => this.setState( { cardHolderName: text } )}
                                container={styles.inputContainer} />
                        </View> :
                        <View style={{
                            width: '100%',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <CustomComponents.CustomInput
                                dflt
                                value={this.state.accountNumber}
                                placeholder={strings.BANK_ACCOUNT_NUMBER}
                                placeholderTextColor={this.props.theme.color9}
                                keyboardType='number-pad'
                                onChangeText={( text ) => this.setState( { accountNumber: text } )}
                                container={styles.inputContainer} />
                            <View style={styles.smallInputBox}>
                                <CustomComponents.CustomInput
                                    dflt
                                    value={this.state.routingNumber}
                                    placeholder={strings.ROUNTING_NUMBER}
                                    keyboardType='number-pad'
                                    placeholderTextColor={this.props.theme.color9}
                                    onChangeText={( text ) => this.setState( { routingNumber: text } )}
                                    container={styles.smallInputContainer} />
                                <CustomComponents.CustomInput
                                    dflt
                                    value={this.state.currency}
                                    placeholder={strings.CURRENCY}
                                    placeholderTextColor={this.props.theme.color9}
                                    onChangeText={( text ) => this.setState( { currency: text } )}
                                    container={styles.smallInputContainer} />
                            </View>

                            <CustomComponents.CustomInput
                                dflt
                                value={this.state.accountHolderName}
                                placeholder={strings.ACCOUNT_HOLDER}
                                placeholderTextColor={this.props.theme.color9}
                                onChangeText={( text ) => this.setState( { accountHolderName: text } )}
                                container={styles.inputContainer} />
                        </View>}


                    <TouchableOpacity
                        onPress={() => this.handleUpdate()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3, marginTop: 80 },
                        this.state.onFocus === 'Update' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.UPDATE} style={{ fontSize: 14 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.handleDelete()}
                        style={[styles.buttonContainer,
                        { backgroundColor: this.props.theme.color3 },
                        this.state.onFocus === 'Delete' && { borderColor: this.props.theme.color4 }]}>
                        <CustomComponents.CustomText value={strings.DELETE} style={{ fontSize: 14 }} />
                    </TouchableOpacity>
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
export default connect( mapStatetoProps, mapDispatchToProps )( AddBankDetails );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        width: '88%',
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
        justifyContent: 'center',
        marginTop: 13,
        borderWidth: 1
    },
    optionSelectionContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionSelectionButton: {
        width: '45%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1
    },
    cardBackGroundContainer: {
        alignSelf: 'center',
        width: '100%',
        height: 190,
        marginTop: 21,
        marginBottom: 8
    },
    cardBackGroundImgStyle: {
        resizeMode: 'contain',
    },
    cardDetailsContainer: {
        height: '70%',
        justifyContent: 'space-between',
        marginLeft: 32,
        marginTop: 36
    },
    inputContainer: {
        marginTop: 21,
        width: '90%'
    },
    smallInputContainer: {
        marginTop: 21,
        width: '46%'
    },
    smallInputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',

    }
} )