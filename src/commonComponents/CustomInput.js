import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { changeTheme } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const CustomInput = props => {
  const dispatch = useDispatch();
  const themes = useSelector( state => state.appReducer.theme );
  const [onFocus, setOnFocus] = useState( false );
  return (
    <View
      style={[
        { backgroundColor: themes.color3, height: 35 },
        props.dflt && styles.defaultContainer,
        props.container,
        onFocus && { borderColor: themes.color4 }
      ]}>
      <TextInput
        value={props.value}
        onChangeText={text => props.onChangeText( text )}
        onFocus={() => setOnFocus( true )}
        onBlur={() => setOnFocus( false )}
        secureTextEntry={props.password}
        placeholder={props.placeholder}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        placeholderTextColor={
          props.placeholderTextColor
            ? props.placeholderTextColor
            : themes.primaryTextColor
        }
        style={[
          props.dflt && { fontSize: 12 },
          {
            color: themes.primaryTextColor,
            width: '100%',
            ...props.style,
          },
          props.secondary && { color: themes.secondaryTextColor }
        ]}
      />
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    theme: state.appReducer.theme,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeTheme: theme => dispatch( changeTheme( theme ) ),
  };
};

export default connect( mapStatetoProps, mapDispatchToProps )( CustomInput );

const styles = StyleSheet.create( {
  defaultContainer: {
    width: '85%',
    borderRadius: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    height: 42
  },
} );
