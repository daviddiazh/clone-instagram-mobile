/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HeaderAndStories} from '../../components/modules/HeaderAndStories';
import {feed, users} from '../../api';
import {SPACING} from '../../theme';
import {styles} from './styles';
import {Icon} from '../../components/Icon';

export const Home = () => {
  const [likes, setLikes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [lastPress, setLastPress] = useState<any>(null);

  const changeLike = (index: number) => {
    setLikes((prevLikes: boolean[]) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !prevLikes[index];
      return newLikes;
    });
  };

  const doublePress = (id: number) => {
    var delta = new Date().getTime() - lastPress;

    const newLikes = [...likes];

    if (delta < 250 && !newLikes[id]) {
      changeLike(id);
    }

    setLastPress(new Date().getTime());
  };

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
            <View
              style={{
                ...styles.userInfoContainer,
                paddingHorizontal: scale(SPACING[8]),
              }}>
              <View
                style={{
                  ...styles.userInfoContainer,
                  gap: scale(SPACING[10]),
                  paddingVertical: scale(SPACING[4] + 2),
                }}>
                <Image
                  source={
                    users.find(user => user.id === post.userId)?.profileImage
                  }
                  style={styles.picture}
                />
                <Text
                  style={{
                    ...styles.likesText,
                    paddingVertical: 0,
                    fontSize: scale(SPACING[12]),
                  }}>
                  {users.find(user => user.id === post.userId)?.username}
                </Text>
              </View>
              <Icon name="dots-02" size={15} />
            </View>

            <TouchableOpacity
              onPress={() => doublePress(index)}
              activeOpacity={1}>
              <Image
                source={post.picture}
                style={{width: '100%', height: scale(400)}}
                resizeMethod="resize"
              />
            </TouchableOpacity>

            <View style={{margin: scale(SPACING[10])}}>
              <View style={styles.interactionsFatherContainer}>
                <View style={styles.interactionsContainer}>
                  {likes[index] ? (
                    <Text onPress={() => changeLike(post.id)}>Liked</Text>
                  ) : (
                    <TouchableOpacity onPress={() => changeLike(post.id)}>
                      <View>
                        <Image
                          source={require('../../assets/icons/like.png')}
                          style={{width: 19, height: 16}}
                        />
                      </View>
                    </TouchableOpacity>
                  )}
                  <Image
                    source={require('../../assets/icons/comment.png')}
                    style={{width: 19, height: 18}}
                  />
                  <Image
                    source={require('../../assets/icons/share.png')}
                    style={{width: 19, height: 16}}
                  />
                </View>
                <View>
                  <Image
                    source={require('../../assets/icons/save.png')}
                    style={{width: 19, height: 19}}
                  />
                </View>
              </View>

              <Text style={styles.likesText}>{post.likes}</Text>
              <Text style={{...styles.likesText, paddingVertical: 0}}>
                {users.find(user => user.id === post.userId)?.username}{' '}
                <Text style={{fontWeight: '400'}}>{post.description}</Text>
              </Text>

              <Text
                style={
                  styles.commentsText
                }>{`Ver los ${post.comments} comentarios`}</Text>

              <View style={styles.commentsBoxContainer}>
                <Image
                  source={users[0].profileImage}
                  style={styles.profilePictureSmall}
                />
                <Text
                  style={{
                    ...styles.commentsText,
                    fontSize: scale(SPACING[10] + 1.5),
                  }}>
                  Agrega un comentario...
                </Text>
              </View>

              <Text
                style={{
                  ...styles.commentsText,
                  fontSize: scale(SPACING[10] + 1),
                }}>
                {post.ago}
              </Text>
            </View>
          </View>
        )}
        style={{marginTop: 0}}
        ItemSeparatorComponent={() => (
          <View style={{width: scale(SPACING[8])}} />
        )}
      />
    </ScrollView>
  );
};
