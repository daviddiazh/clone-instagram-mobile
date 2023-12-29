/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from './BottomTab';
import {Profile} from '../screens/Profile';
import {Login} from '../screens/Login';

const NavigationStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationStack.Navigator
      id="Navigation"
      initialRouteName="Login"
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
      <NavigationStack.Screen name="Login" component={Login} />
      <NavigationStack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <NavigationStack.Screen name="Profile" component={Profile} />
    </NavigationStack.Navigator>
  );
};
