import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SPACING} from '../../theme';

export const styles = StyleSheet.create({
  separator: {
    borderWidth: scale(0.5),
    width: '100%',
    height: scale(1),
    marginTop: scale(SPACING[10]),
    borderTopColor: '#D2D4D5',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picture: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  interactionsFatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(SPACING[12] + 2),
  },
  likesText: {
    fontSize: scale(SPACING[10] + 1),
    fontWeight: '600',
    paddingVertical: scale(SPACING[8]),
  },
  commentsText: {
    fontSize: scale(SPACING[10] + 1),
    fontWeight: '400',
    color: '#666',
    paddingVertical: scale(SPACING[4] + 1),
  },
  commentsBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(SPACING[4] + 2),
    paddingVertical: scale(SPACING[4] + 2),
  },
  profilePictureSmall: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});
