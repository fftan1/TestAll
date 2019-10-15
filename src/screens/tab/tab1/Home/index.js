import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// Components


// Stylesheets
import styles from './styles';

// Variables


class Home extends React.Component {

  render = () => {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginInUser: state.LoginReducer.loginInUser,
});

export default connect(mapStateToProps, null)(Home);
