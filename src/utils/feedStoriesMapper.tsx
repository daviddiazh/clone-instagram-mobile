/* eslint-disable react/react-in-jsx-scope */
import {Image, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../theme';
import {styles} from '../components/modules/HeaderAndStories/styles';
import {Icon} from '../components/Icon';
import {GradientRoundBorder} from '../components/GradientRoundBorder';

/* eslint-disable react-native/no-inline-styles */
export const renderStoryMapper = (item: any) => {
  if (item.closeFriends) {
    return (
      <View
        style={{
          borderRadius: 100,
          padding: 2,
          width: 90,
          height: 90,
          backgroundColor: COLORS.success.default,
        }}>
        <View
          style={{
            borderRadius: 100,
            flex: 1,
            padding: 3,
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
          borderRadius: 100,
          padding: 2,
          width: 90,
          height: 90,
          backgroundColor: '#cecece',
        }}>
        <View
          style={{
            borderRadius: 100,
            flex: 1,
            padding: 3,
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
          style={{width: 86, height: 86, borderRadius: 100}}
        />
        <View
          style={{
            ...styles.dmContainerText,
            backgroundColor: '#fff',
            paddingVertical: scale(SPACING[2] + 1),
            paddingHorizontal: scale(SPACING[2] + 1),
            borderRadius: scale(100),
          }}>
          <View
            style={{
              backgroundColor: '#0095F6',
              borderRadius: scale(100),
            }}>
            <Icon name="plus" color={COLORS.light} size={15} />
          </View>
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
