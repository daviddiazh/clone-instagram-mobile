import React from 'react';
import {Image, View, Text, FlatList} from 'react-native';
import {scale} from 'react-native-size-matters';
import {styles} from './styles';
import {Icon} from '../../components/Icon';
import {feedHistories} from '../../api';
import {COLORS, SPACING} from '../../theme';
import {GradientRoundBorder} from '../../components/GradientRoundBorder';

export const Home = () => {
  const InstagramLogoLetters = '../../assets/images/Instagram_logo.png';
  const dmIcon = '../../assets/icons/dm.png';

  const renderStoryMapper = (item: any) => {
    if (item.closeFriends) {
      return (
        <View
          style={{
            borderRadius: 100, // Ajusta este valor para cambiar la redondez del borde
            padding: 2,
            width: 90,
            height: 90,
            backgroundColor: COLORS.success.default,
          }}>
          <View
            style={{
              borderRadius: 100, // <-- Inner Border Radius
              flex: 1,
              padding: 3, // <-- Border Width
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <Image
              source={item.profileImage}
              style={{width: 80, height: 80, borderRadius: 100}}
            />
          </View>
        </View>
      );
    } else if (item.seenHistories) {
      return (
        <View
          style={{
            borderRadius: 100, // Ajusta este valor para cambiar la redondez del borde
            padding: 2,
            width: 90,
            height: 90,
            backgroundColor: '#cecece',
          }}>
          <View
            style={{
              borderRadius: 100, // <-- Inner Border Radius
              flex: 1,
              padding: 3, // <-- Border Width
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <Image
              source={item.profileImage}
              style={{width: 80, height: 80, borderRadius: 100}}
            />
          </View>
        </View>
      );
    } else if (item.id === 0) {
      return (
        <View style={{...styles.dmContainer, marginVertical: scale(0)}}>
          <Image
            source={item.profileImage}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
          <View
            style={{
              ...styles.dmContainerText,
              backgroundColor: '#0095F6',
              paddingVertical: scale(SPACING[2] + 1),
              paddingHorizontal: scale(SPACING[2] + 1),
              borderRadius: scale(100),
            }}>
            <Icon name="plus" color={COLORS.light} size={15} />
          </View>
        </View>
      );
    }

    return (
      <GradientRoundBorder>
        <Image
          source={item.profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
      </GradientRoundBorder>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require(InstagramLogoLetters)}
            style={{width: 150, height: 50}}
          />
          <Icon name="chevron-down" size={18} />
        </View>

        <View style={{...styles.logoContainer, gap: scale(15)}}>
          <Icon name="heart-04" />
          <View>
            <View style={styles.dmContainer}>
              <Image source={require(dmIcon)} style={{width: 32, height: 32}} />
              <View style={styles.dmContainerText}>
                <Text style={styles.dmText}>13</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        horizontal
        keyExtractor={(_, index) => `feed_${index}`}
        data={feedHistories}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={`${item.id}-${index}`}>
            {renderStoryMapper(item)}
            <Text style={styles.usernameText}>
              {item.id === 0 ? 'Your story' : item.username}
            </Text>
          </View>
        )}
        style={styles.feedHistoriesContainer}
        ItemSeparatorComponent={() => (
          <View style={{width: scale(SPACING[8])}} />
        )}
      />
    </View>
  );
};
