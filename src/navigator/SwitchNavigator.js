import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMidleWare from 'redux-saga';

import Login from '../screens/Login';
import TabNav from './TabNavigator';
import reducers from '../modules/reducers';
import Sagas from '../modules/Sagas';
import NavigateService from '../NavigateService';
import loginsaga from '../modules/Sagas/LoginSaga';

const StackNav = createStackNavigator({
  TAB: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
});

const switchNav = createSwitchNavigator({
  LOGIN_SC: {
    screen: Login,
  },

  STACK: {
    screen: StackNav,
  },
});

const AppContainer = createAppContainer(switchNav);

const sagaMiddleWare = createSagaMidleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

const App = () => {
  const getRef = (ref) => {
    NavigateService.setNavigator(NavigateService.navigatorName.LoginNavigate, ref);
  };
  return (
    <Provider store={store}>
      <AppContainer ref={getRef} />
    </Provider>
  );
};

sagaMiddleWare.run(loginsaga);

export default App;
