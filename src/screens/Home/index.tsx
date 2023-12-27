/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Image, View, Text, FlatList, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HeaderAndStories} from '../../components/modules/HeaderAndStories';
import {feed, users} from '../../api';
import {SPACING} from '../../theme';
import { styles } from './styles';

export const Home = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <HeaderAndStories />

      <FlatList
        horizontal={false}
        keyExtractor={(_, index) => `feed_${index}`}
        data={feed}
        showsHorizontalScrollIndicator={false}
        renderItem={({item: post, index}) => (
          <View key={`${post.id}-${index}`}>
            <View style={styles.separator} />
            <View style={styles.userInfoContainer}>
              <Image
                source={
                  users.find(user => user.id === post.userId)?.profileImage
                }
                style={styles.picture}
              />
              <Text style={{}}>
                {users.find(user => user.id === post.userId)?.username}
              </Text>
            </View>

            <Image source={post.picture} style={{width: '100%'}} />
          </View>
        )}
        style={{marginTop: 10}}
        ItemSeparatorComponent={() => (
          <View style={{width: scale(SPACING[8])}} />
        )}
      />
    </ScrollView>
  );
};
