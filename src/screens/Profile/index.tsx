import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Icon} from '../../components/Icon';
import {feed} from '../../api';
import {renderStoryMapper} from '../../utils/feedStoriesMapper';
import {styles} from './styles';
import {scale} from 'react-native-size-matters';
import {SPACING} from '../../theme';
import {useNavigation} from '@react-navigation/native';

export const Profile = ({route}: any) => {
  const {userInfo} = route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <View>
            <Icon name="chevron-left" />
          </View>
        </TouchableOpacity>
        <Text style={styles.usernameTextHeader}>{userInfo.username}</Text>
        <Icon name="dots-02" />
      </View>

      <View style={styles.userInfoContainer}>
        <View style={{width: 90, marginTop: scale(SPACING[12])}}>
          {renderStoryMapper(userInfo)}
        </View>

        <View style={styles.userInfoChildrenContainer}>
          <View>
            <Text style={styles.valueUserInfo}>
              {feed.filter(feed => feed.userId === userInfo.id).length}
            </Text>
            <Text style={styles.labelUserInfo}>Publicaciones</Text>
          </View>
          <View>
            <Text style={styles.valueUserInfo}>{userInfo.followers}</Text>
            <Text style={styles.labelUserInfo}>Seguidores</Text>
          </View>
          <View>
            <Text style={styles.valueUserInfo}>{userInfo.following}</Text>
            <Text style={styles.labelUserInfo}>Seguidos</Text>
          </View>
        </View>
      </View>

      <Text style={styles.usernameText}>{userInfo.username}</Text>
      <Text style={styles.descriptionText}>{userInfo.description}</Text>

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

      {/* <Text>{JSON.stringify(userInfo, null, 4)}</Text> */}
    </View>
  );
};
