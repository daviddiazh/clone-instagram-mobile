/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';

const NavigationStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationStack.Navigator
      id="Navigation"
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <NavigationStack.Screen name="Home" component={Home} />
    </NavigationStack.Navigator>
  );
};
