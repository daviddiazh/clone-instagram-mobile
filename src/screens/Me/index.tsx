import React from 'react';
import {Image, Text, View} from 'react-native';
import {users} from '../../api';

export const Me = () => {
  const me = users[0];
  return (
    <View>
      <Text>{JSON.stringify(me, null, 4)}</Text>
      <Image source={me.profileImage} style={{width: 100, height: 100}} />
    </View>
  );
};
