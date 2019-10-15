import { createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/tab/tab1/Home';
import Screen1 from '../screens/tab/tab2/Screen1';
import Screen2 from '../screens/tab/tab3/Screen2';
import StackHome from './StackInTab';


const TabNav = createBottomTabNavigator({
  TAB_HOME: {
    screen: StackHome,
    navigationOptions: {
      title: 'Home',
    },
  },

  SCREEN1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen1',
    },
  },

  Screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen2',
    },
  },
}, {
  tabBarOptions: {
    showIcon: false,
    tabStyle: {
      justifyContent: 'center',
    }
  }
});

export default TabNav;
