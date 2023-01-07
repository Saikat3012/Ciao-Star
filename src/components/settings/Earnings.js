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

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


class Earnings extends Component {
    constructor( props ) {
        super( props );
    }
    state = {
        termList: [
            {
                id: 1,
                title: 'Week',
                selected: true
            },
            {
                id: 2,
                title: 'Month',
                selected: false
            },
            {
                id: 3,
                title: 'Year',
                selected: false
            },
        ],

        earningList: [
            {
                id: 1,
                title: 'Total Profit',
                amount: '£3,500.00'
            },
            {
                id: 2,
                title: 'Donated to charity',
                amount: '£350.00'
            },
            {
                id: 3,
                title: 'Subscription cost',
                amount: '£2.50'
            },
        ],
        weekList: [
            {
                id: 1,
                title: 'Mo',
                selected: true,
            },
            {
                id: 2,
                title: 'To',
                selected: false,
            },
            {
                id: 3,
                title: 'We',
                selected: false,
            },
            {
                id: 4,
                title: 'Th',
                selected: false,
            },
            {
                id: 5,
                title: 'Fr',
                selected: false,
            },
            {
                id: 6,
                title: 'Sa',
                selected: false,
            },
            {
                id: 7,
                title: 'Su',
                selected: false,
            },
        ]
    }

    handleBackPress( ref ) {
        ref.props.navigation.goBack()
    }
    handleTermSelection( selectedItem, ref ) {
        var tempList = ref.state.termList;

        tempList.map( ( each ) => {
            if ( each.id == selectedItem.id ) each.selected = true
            else each.selected = false
        } )

        ref.setState( { termList: tempList } )
    }
    handleWeekSelection( selectedItem, ref ) {
        var tempList = ref.state.weekList;

        tempList.map( ( each ) => {
            if ( each.id == selectedItem.id ) each.selected = true
            else each.selected = false
        } )

        ref.setState( { weekList: tempList } )
    }


    render() {
        return (
            <ScrollView style={[styles.container, { backgroundColor: this.props.theme.primaryBackgroundColor }]}>
                <CustomComponents.CustomHeader
                    title
                    firstValue="Earnings"
                    backButtonPress={this.handleBackPress}
                    parrentRef={this} />

                <View style={styles.contentContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%'
                    }}>
                        {this.state.termList.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.handleTermSelection( each, this )}
                                    style={[{
                                        borderWidth: 1,
                                        paddingHorizontal: 15,
                                        paddingVertical: 8,
                                        borderRadius: 5
                                    }, each.selected && { borderColor: this.props.theme.color11 }]}
                                    key={each.id}
                                >
                                    <CustomComponents.CustomText value={each.title} />
                                </TouchableOpacity>
                            )
                        } )}
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <LineChart
                            data={{
                                // labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get( "window" ).width} // from react-native
                            height={220}
                            chartConfig={{
                                // backgroundColor: "#e26a00",
                                // backgroundGradientFrom: "#fb8c00",
                                // backgroundGradientTo: "#ffa726",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: ( opacity = 1 ) => `rgba(255, 255, 255, ${ opacity })`,
                                labelColor: ( opacity = 1 ) => `rgba(255, 255, 255, ${ opacity })`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: this.props.theme.color11
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '95%',
                        marginTop: 24
                    }}>
                        {this.state.weekList.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.handleWeekSelection( each, this )}
                                    style={[{
                                        paddingHorizontal: 15,
                                        paddingVertical: 4,
                                        borderRadius: 15
                                    }, each.selected && { backgroundColor: this.props.theme.color11 }]}
                                    key={each.id}
                                >
                                    <CustomComponents.CustomText value={each.title} />
                                </TouchableOpacity>
                            )
                        } )}
                    </View>






                    <View style={{ width: '90%', marginTop: 36 }}>
                        <CustomComponents.CustomText value="EARNINGS" style={{ fontSize: 16, fontWeight: 'bold' }} />
                        {this.state.earningList?.map( ( each ) => {
                            return (
                                <TouchableOpacity key={each.id} style={{
                                    flexDirection: 'row',
                                    backgroundColor: this.props.theme.color10,
                                    borderRadius: 5,
                                    marginVertical: 6,
                                    padding: 6,
                                    justifyContent: 'center'
                                }}>
                                    <View style={{
                                        padding: 5,
                                        borderRadius: 5,
                                        backgroundColor: this.props.theme.color1,
                                    }}>
                                        <Image source={ImgAssets.playHome} style={{ height: 24, width: 24, resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: "85%",
                                        marginLeft: "3%"
                                    }}>
                                        <CustomComponents.CustomText value={each.title} />
                                        <CustomComponents.CustomText value={each.amount} />
                                    </View>

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
export default connect( mapStatetoProps, mapDispatchToProps )( Earnings );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        width: '96%',
        alignItems: 'center',
        marginTop: 18,
        alignSelf: 'center',
    },
    bottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 40,
    },
    buttonContainer: {
        width: '90%',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        borderWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
} )