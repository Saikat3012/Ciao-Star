import React, { Component } from 'react';

import CustomComponents from '../../CustomComponents';

import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'




class ShowContentCatagoryWise extends Component {
    constructor( props ) {
        super( props );
        console.log( props.route.params.title )
        this.state = {
            filterOpen: false,
            filterOption: ''
        }
    }

    handleLeftClick() {
        this.props.navigation.navigate( "AccountSettings" )
    }
    handleFilterChoose( option ) {
        if ( this.state.filterOption === option ) {
            this.setState( { filterOption: '' } )
        } else {
            this.setState( { filterOption: option } )
        }
    }
    handleRightClick() {
        this.setState( { filterOpen: !this.state.filterOpen } )
    }

    leftHeaderChield = () => (
        <TouchableOpacity onPress={() => this.handleLeftClick()}>

            <IoniconsIcon name="menu" size={25} color={this.props.theme.color7} />

        </TouchableOpacity>
    );
    rightHeaderChield = () => (
        <View style={styles.rightHeaderChieldContainer}>
            <TouchableOpacity
                onPress={() => this.handleRightClick()}
                style={{ marginRight: 19 }}>
                {/* <Image source={ImgAssets.filter } /> */}
                <IoniconsIcon name="filter" size={25} color={this.props.theme.color7} />
            </TouchableOpacity>

        </View>
    );

    render() {
        return (
            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{
                    backgroundColor: this.props.theme.primaryBackgroundColor,
                }}
            >
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>


                    <CustomComponents.CustomHeader
                        leftChield={this.leftHeaderChield}
                        rightChield={this.rightHeaderChield}
                        normalWithButtons
                        textStyle={{ fontSize: 24 }}
                    />
                    <CustomComponents.CustomText
                        style={{
                            fontSize: 18,
                            marginBottom: 10,
                            marginTop: 25
                        }}
                        value={this.props?.route?.params?.title} />
                    <View
                        style={{
                            width: '90%',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        {this.props.route.params.list?.map( ( each ) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate( "VideoFeed", each ) }}
                                    key={each.id}
                                    style={[styles.postContainer, { backgroundColor: this.props?.theme.color3 }]}>
                                    <Image source={{ uri: each.pic }} style={styles.postPic} />
                                    <View style={{ marginVertical: 4 }}>
                                        <CustomComponents.CustomText value={each.title} style={{ fontSize: 8 }} />
                                        <CustomComponents.CustomText value={each.time} style={{ fontSize: 6, color: this.props?.theme.color7 }} />
                                    </View>
                                </TouchableOpacity>
                            )
                        } )}

                    </View>
                </View>
                {this.state.filterOpen && <View style={{
                    minHeight: 80,
                    width: '100%',
                    backgroundColor: this.props.theme.color3,
                    borderRadius: 8,
                    position: 'absolute',
                    top: 45,
                    paddingVertical: 5,
                    paddingHorizontal: '3%'
                }}>
                    <View style={{ marginHorizontal: 20, marginVertical: 8 }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            onPress={() => this.handleFilterChoose( 'sort' )}>
                            <CustomComponents.CustomText value="Sort by" />
                            <AntDesign name="down" size={16} color={this.props.theme.primaryTextColor} />
                        </TouchableOpacity>
                        {this.state.filterOption === 'sort' && <View>
                            <CustomComponents.CustomText value="Filter 1" style={styles.searchResultText} />
                            <CustomComponents.CustomText value="Filter 2" style={styles.searchResultText} />
                        </View>}
                    </View>
                    <View style={{ marginHorizontal: 20, marginVertical: 8 }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            onPress={() => this.handleFilterChoose( 'price' )}>
                            <CustomComponents.CustomText value="Price" />
                            <AntDesign name="down" size={16} color={this.props.theme.primaryTextColor} />
                        </TouchableOpacity>
                        {this.state.filterOption === 'price' && <View>
                            <CustomComponents.CustomText value="Filter 1" style={styles.searchResultText} />
                            <CustomComponents.CustomText value="Filter 2" style={styles.searchResultText} />
                        </View>}
                    </View>
                    <TouchableOpacity
                        onPress={() => this.handleRightClick()}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '90%',
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: this.props.theme.color4,
                            alignSelf: 'center',
                            marginBottom: 15
                        }}>
                        <CustomComponents.CustomText value="Filter" />
                    </TouchableOpacity>
                </View>}
            </ScrollView>
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
export default connect( mapStatetoProps, mapDispatchToProps )( ShowContentCatagoryWise );


const styles = StyleSheet.create( {
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
    },
    searchResultText: {
        marginLeft: 15,
        marginTop: 12
    }
} )