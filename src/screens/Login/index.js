import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Crypto from 'crypto-js';
// Components
import { AUTH_LOGIN } from '../../modules/actions/Types';

// Stylesheets
import styles from './styles';

// Variables


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.refPassword = React.createRef();
  }

  // renderField = ({ keyboardType, meta: { touched, error }, input: { onChange, ...restInput } }) => {
  //   return (
  //     <View>
  //       <TextInput
  //         keyboardType={keyboardType}
  //         onChangeText={onChange} {...restInput}
  //       />
  //       {touched && (
  //         (error) && <Text style={{ color: 'red' }}>{error}</Text>
  //       )}
  //     </View>
  //   );
  // }

  onLogin = () => {
    const { username, password } = this.state;
    const { login } = this.props;
    const usernameStandard = username.toLowerCase();
    const passwordStandard = Crypto.MD5(password).toString();
    login(usernameStandard, passwordStandard);
  }

  render = () => {
    const { username, password } = this.state;
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.containerLogo}>
              <Text style={styles.textLogo}>Logo</Text>
            </View>
            <View style={styles.containerForm}>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                placeholderTextColor="#dddddd"
                onChangeText={text => this.setState({ username: text })}
                value={username}
                onSubmitEditing={() => this.refPassword.current.focus()}
              />
              <TextInput
                ref={this.refPassword}
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#dddddd"
                onChangeText={text => this.setState({ password: text })}
                value={password}
                onSubmitEditing={this.onLogin}
              />
              <TouchableOpacity style={styles.btnLogin} onPress={this.onLogin}>
                <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    dispatch({ type: AUTH_LOGIN, username, password });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
