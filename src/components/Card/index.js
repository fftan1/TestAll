import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
// Components


// Stylesheets
import styles from './styles';

// Variables


export default class Card extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text>Card</Text>
      </View>
    );
  }
}
