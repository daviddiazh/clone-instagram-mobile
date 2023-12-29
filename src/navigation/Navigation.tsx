/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from './BottomTab';
import {Profile} from '../screens/Profile';

const NavigationStack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationStack.Navigator
      id="Navigation"
      initialRouteName="BottomTabNavigation"
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
      <NavigationStack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <NavigationStack.Screen name="Profile" component={Profile} />
    </NavigationStack.Navigator>
  );
};
