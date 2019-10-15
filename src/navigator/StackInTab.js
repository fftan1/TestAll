import { createStackNavigator } from 'react-navigation';
import Home from '../screens/tab/tab1/Home';


const StackHome = createStackNavigator({
  HOME_SC: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
});

export default StackHome;
