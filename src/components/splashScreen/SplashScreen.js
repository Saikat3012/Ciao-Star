import React, { Component } from 'react';
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/actions/action'
import CustomComponents from '../../CustomComponents';
import { light, dark, color } from '../../theme';
import ImgAssets from '../../ImgAssets';

import strings from '../../commonComponents/strings';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
class SplashScreen extends Component {
    constructor( props ) {
        super( props );
        setTimeout( () => props.navigation.replace( 'OpenApp' ), 1000 );
        setTimeout( () => this.setState( { logoVisable: false } ), 980 );
    }
    state = {
        logoVisable: true
    }

    render() {

        return (
            <View style={[{ backgroundColor: this.props.theme.primaryBackgroundColor }, styles.container]}>
                {this.state.logoVisable && <CustomComponents.AppLogo size={27} first={strings.SOCIAL} second={strings.STREAM} />}
            </View>
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
export default connect( mapStatetoProps, mapDispatchToProps )( SplashScreen );

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
} )