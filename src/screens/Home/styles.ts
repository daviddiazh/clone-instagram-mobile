import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SPACING} from '../../theme';

export const styles = StyleSheet.create({
  separator: {
    borderWidth: scale(0.5),
    width: '100%',
    height: scale(0.5),
    margin: 0,
    borderTopColor: '#D2D4D5',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  userInfoContainer: {
    flexDirection: 'row',
    gap: scale(SPACING[10]),
    alignItems: 'center',
    paddingVertical: scale(SPACING[4] + 2),
    paddingLeft: scale(SPACING[8]),
  },
  picture: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
});
