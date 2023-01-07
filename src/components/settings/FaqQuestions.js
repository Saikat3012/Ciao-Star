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

class FaqQuestions extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        faqList: [
            {
                id: 1,
                question: 'How many videos do i need to do?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
            {
                id: 2,
                question: 'What is the right price for a video?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
            {
                id: 3,
                question: 'Do i get to choose the charity i will use?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
            {
                id: 4,
                question: 'What is the company name?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
            {
                id: 5,
                question: 'Hello this is a test the content needs to be....?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
            {
                id: 6,
                question: 'Is this a test for the application?',
                answer: `Through our Site, you may obtain personalized videos  Videos”) from celebrities, including athletes, actors, performers, artists, influencers, and others (each, a “Talent User”). You may submit a request to a Talent User for aVideo that is personalized for you or a third party that you identify as a recipient (“Recipient”).`,
                video : ''
            },
        ]
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    hadnleQuestionClick( ref, question ) {
        ref.props.navigation.navigate("FaqAnswer",question)
    }

    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue={strings.FAQ}
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    {this.state.faqList.map( ( each ) => {
                        return (
                            <TouchableOpacity
                                key={each.id}
                                onPress={() => this.hadnleQuestionClick(this,each)}
                                style={[styles.buttonContainer, { backgroundColor: this.props.theme.color3 }]}>
                                <CustomComponents.CustomText value={each.question} style={{ fontSize: 12 }} />
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
export default connect( mapStatetoProps, mapDispatchToProps )( FaqQuestions );

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
        width: '95%',
        alignItems: 'center',
        paddingHorizontal: 18,
        borderRadius: 5,
        height: 48,
        justifyContent: 'space-between',
        marginTop: 13
    }
} )