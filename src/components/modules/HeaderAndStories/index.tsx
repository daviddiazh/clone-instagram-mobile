import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {users} from '../../../api';
import {Icon} from '../../Icon';
import {renderStoryMapper} from '../../../utils/feedStoriesMapper';
import {SPACING} from '../../../theme';
import {styles} from './styles';

export const HeaderAndStories = () => {
  const InstagramLogoLetters = '../../../assets/images/Instagram_logo.png';
  const dmIcon = '../../../assets/icons/dm.png';

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require(InstagramLogoLetters)}
              style={{width: 150, height: 50}}
            />
            <Icon name="chevron-down" size={18} />
          </View>

          <View style={{...styles.logoContainer, gap: scale(10)}}>
            <Icon name="heart-04" />
            <View>
              <View style={styles.dmContainer}>
                <Image
                  source={require(dmIcon)}
                  style={{width: 32, height: 32}}
                />
                <View style={styles.dmContainerText}>
                  <Text style={styles.dmText}>13</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        horizontal
        keyExtractor={(_, index) => `story_${index}`}
        data={users}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={`${item.id}-${index}`}>
            {renderStoryMapper(item)}
            <Text style={styles.usernameText}>
              {item.id === 0 ? 'Tu historia' : item.username}
            </Text>
          </View>
        )}
        style={styles.feedHistoriesContainer}
        ItemSeparatorComponent={() => (
          <View style={{width: scale(SPACING[8])}} />
        )}
      />
    </>
  );
};
