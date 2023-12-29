/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {feed, users} from '../../api';
import {styles} from '../Profile/styles';
import {Icon} from '../../components/Icon';
import {renderStoryMapper} from '../../utils/feedStoriesMapper';
import {SPACING} from '../../theme';

export const Me = () => {
  const me = users[0];
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: scale(SPACING[2]),
            }}>
            <Text style={styles.usernameTextHeader}>{me.username}</Text>
            <Icon name="chevron-down" size={15} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: scale(SPACING[12] + 3),
            }}>
            <Icon name="plus-03" size={18} />
            <Icon name="menu" size={18} />
          </View>
        </View>

        <View style={styles.userInfoContainer}>
          <View style={{width: 90, marginTop: scale(SPACING[12])}}>
            {renderStoryMapper(me)}
          </View>

          <View style={styles.userInfoChildrenContainer}>
            <View>
              <Text style={styles.valueUserInfo}>
                {feed.filter(feed => feed.userId === me.id).length}
              </Text>
              <Text style={styles.labelUserInfo}>Publicaciones</Text>
            </View>
            <View>
              <Text style={styles.valueUserInfo}>{me.followers}</Text>
              <Text style={styles.labelUserInfo}>Seguidores</Text>
            </View>
            <View>
              <Text style={styles.valueUserInfo}>{me.following}</Text>
              <Text style={styles.labelUserInfo}>Seguidos</Text>
            </View>
          </View>
        </View>

        <Text style={styles.usernameText}>{me.username}</Text>
        <Text style={styles.descriptionText}>{me.description}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.bigButton}>
            <View>
              <Text style={styles.textButton}>Siguiendo</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.bigButton}>
            <View>
              <Text style={styles.textButton}>Mensaje</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.smallButton}>
            <View>
              <Image
                source={require('../../assets/icons/follow-new-people.png')}
                style={{width: 12, height: 12}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerIconsPosts}>
        <View style={styles.containerIconPosts}>
          <Image
            source={require('../../assets/icons/posts.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <View style={styles.containerIconPosts}>
          <Image
            source={require('../../assets/icons/tags.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </View>

      <View style={{borderTopColor: '#D2D4D5', borderTopWidth: 0.5}} />

      {feed.filter(post => post.userId === me.id).length > 0 ? (
        <FlatList
          keyExtractor={(_, index) => `feed_${index}`}
          data={feed.filter(post => post.userId === me.id)}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          renderItem={({item, index}) => (
            <View key={index} style={{width: '33%', height: 140}}>
              <Image
                source={item.picture}
                style={{width: '100%', height: '100%'}}
                resizeMethod="resize"
              />
            </View>
          )}
          contentContainerStyle={{gap: scale(SPACING[2])}}
          columnWrapperStyle={{gap: scale(SPACING[2])}}
        />
      ) : (
        <View style={styles.withoutPostsContainer}>
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/icons/without-posts.png')}
                style={{width: 70, height: 70}}
              />
            </View>
            <Text style={styles.withoutPostLabel}>
              Aún no hay publicaciones
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};
