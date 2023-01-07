import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTheme, setUserType } from '../../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
} from 'react-native';
const PASSCODE = [1, 2, 3, 4, 5];
const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0];
class LogIn extends Component {
  constructor( props ) {
    super( props );
  }
  state = {
    passCode: [],
    disableButtons: false,
  };

  handleBackPress( ref ) {
    ref.props.navigation.goBack();
  }
  handleCancleClick( ref ) {
    ref.setState( { passCode: [], disableButtons: false } );
  }
  handleDigitClick( ref, digit ) {
    let tempPassCodeArray = ref.state.passCode;
    tempPassCodeArray.push( digit );
    ref.setState( { passCode: tempPassCodeArray } );
    if ( tempPassCodeArray.length == 5 ) {
      ref.setState( { disableButtons: true } );
      if ( ref.props.userType == 'VIP' ) {
        ref.props.navigation.reset( {
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        } );
        // ref.props.navigation.navigate( 'HomeScreen' );
      } else {
        ref.props.navigation.reset( {
          index: 0,
          routes: [{ name: 'HomeScreenUser' }],
        } );
        // ref.props.navigation.navigate( 'HomeScreenUser' );
      }
    }
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.theme.primaryBackgroundColor },
        ]}>
        <CustomComponents.CustomHeader
          normal
          backButtonPress={this.handleBackPress}
          parrentRef={this}
        />
        <View style={styles.contentContainer}>
          <CustomComponents.CustomText
            value={strings.ENTER_PASSCODE}
            style={{
              fontSize: 18,
            }}
          />
          <CustomComponents.CustomText
            value={strings.ENTER_PASSCODE_TITLE}
            style={{ fontSize: 12, color: this.props.theme.color7 }}
          />
          <View style={styles.passcodeDotContainer}>
            {PASSCODE.map( each => {
              if ( each <= this.state.passCode.length ) {
                return (
                  <View
                    key={each}
                    style={[
                      styles.enteredDot,
                      {
                        backgroundColor: this.props.theme.color3,
                        borderColor: this.props.theme.color4,
                      },
                      each == this.state.passCode.length && styles.currentDot,
                    ]}
                  />
                );
              } else {
                return (
                  <View
                    key={each}
                    style={[
                      styles.notEnteredDot,
                      {
                        backgroundColor: this.props.theme.color4,
                        borderColor: this.props.theme.primaryBackgroundColor,
                      },
                    ]}
                  />
                );
              }
            } )}
          </View>

          <View style={styles.digitsContainer}>
            {DIGITS.map( each => {
              if ( each == -1 )
                return (
                  <View key={each} style={styles.digitBox}>
                    <TouchableOpacity
                      style={[styles.digitButton]}
                      onPress={() => this.handleCancleClick( this )}>
                      <CustomComponents.CustomText
                        value={strings.CANCEL}
                        style={{ fontSize: 10 }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              return (
                <View key={each} style={styles.digitBox}>
                  <TouchableOpacity
                    disabled={this.state.disableButtons}
                    onPress={() => this.handleDigitClick( this, each )}
                    style={[
                      styles.digitButton,
                      {
                        backgroundColor: this.props.theme.color3,
                      },
                    ]}
                    key={each}>
                    <CustomComponents.CustomText
                      value={each}
                      style={{
                        fontSize: 30,
                        color: this.props.theme.color8,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            } )}
          </View>
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
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    width: '75%',
    alignItems: 'center',
    marginTop: 36,
  },
  enteredDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  notEnteredDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    borderWidth: 1,
    opacity: 0.5,
  },
  passcodeDotContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
    height: 25,
  },
  currentDot: {
    height: 17,
    width: 17,
    borderRadius: 17,
  },
  digitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 34,
  },
  digitButton: {
    height: 65,
    width: 65,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitBox: {
    width: '33%',
    height: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
} );
