/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../theme';
import {Icon} from '../components/Icon';
import {Home} from '../screens/Home';

const NavigationTab = createBottomTabNavigator();

const IconTabBar: React.FC<any> = ({focused, iconName}) => (
  <View>
    <Icon name={iconName} size={scale(SPACING[20] + 2)} color={COLORS.dark} />
  </View>
);

export const BottomTabNavigation: React.FC = () => {
  return (
    <NavigationTab.Navigator
      id="BottomTabNavigation"
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.navigatorContainerStyles,
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLabelStyles,
        tabBarActiveTintColor: COLORS.primary.default,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarItemStyle: {borderTopWidth: 0},
      }}
      sceneContainerStyle={{backgroundColor: COLORS.light}}>
      <NavigationTab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: (tabBarProps: any) => (
            <IconTabBar {...tabBarProps} iconName="home-05" />
          ),
        }}
        component={Home}
      />
      <NavigationTab.Screen
        name="Search"
        options={{
          tabBarLabel: '',
          tabBarIcon: (tabBarProps: any) => (
            <IconTabBar {...tabBarProps} iconName="search-02" />
          ),
        }}
        component={() => <></>}
      />
      <NavigationTab.Screen
        name="More"
        options={{
          tabBarLabel: '',
          tabBarIcon: (tabBarProps: any) => (
            <IconTabBar {...tabBarProps} iconName="plus-03" />
          ),
        }}
        component={() => <></>}
      />
      <NavigationTab.Screen
        name="Reels"
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/reels.png')}
              style={{width: 22, height: 22}}
            />
          ),
        }}
        component={() => <></>}
      />
      <NavigationTab.Screen
        name="Profile"
        options={{
          tabBarLabel: '',
          tabBarIcon: (tabBarProps: any) => (
            <IconTabBar {...tabBarProps} iconName="user-circle" />
          ),
        }}
        component={() => <></>}
      />
    </NavigationTab.Navigator>
  );
};

export const styles = StyleSheet.create({
  navigatorContainerStyles: {
    paddingTop: scale(SPACING[4] + 2),
    // marginVertical: Platform.OS === 'ios' ? scale(SPACING['16']) : 0,
    marginTop: 0,
    // marginBottom: Platform.OS === 'ios' ? scale(SPACING['10']) : 0,
  },
  tabBarLabelStyles: {
    fontSize: scale(SPACING[12]),
    lineHeight: scale(SPACING[16]),
    // fontFamily: FONT_FAMILY.regular,
  },
});
