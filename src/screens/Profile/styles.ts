import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(SPACING[8]),
    marginTop: scale(SPACING[8]),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usernameTextHeader: {
    fontWeight: '700',
    paddingVertical: 0,
    fontSize: scale(SPACING[12] + 3),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoChildrenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(SPACING[12] + 4),
    width: '75%',
  },
  valueUserInfo: {
    textAlign: 'center',
    fontSize: scale(SPACING[12] + 0.5),
    fontWeight: '600',
    color: COLORS.dark,
  },
  labelUserInfo: {
    textAlign: 'center',
    fontSize: scale(SPACING[10]),
    color: COLORS.dark,
  },
  usernameText: {
    fontWeight: '600',
    fontSize: scale(SPACING[12] + 2),
    paddingTop: scale(SPACING[8]),
    paddingBottom: scale(SPACING[2]),
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: scale(SPACING[12]),
    paddingTop: scale(0),
    paddingBottom: scale(0),
    color: COLORS.darkText,
  },
  buttonsContainer: {
    width: '100%',
    paddingVertical: scale(SPACING[12]),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(SPACING[4]),
  },
  bigButton: {
    width: '45%',
    backgroundColor: '#efefef',
    paddingVertical: scale(SPACING[2] + 2),
    borderRadius: scale(SPACING[4]),
  },
  smallButton: {
    width: '6.5%',
    backgroundColor: '#efefef',
    paddingVertical: scale(SPACING[2] + 4.5),
    borderRadius: scale(SPACING[4]),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: scale(SPACING[12] + 1),
    color: COLORS.dark,
    fontWeight: '600',
    textAlign: 'center',
  },
  containerIconsPosts: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: scale(SPACING[12] + 2),
    paddingBottom: scale(SPACING[4]),
  },
  containerIconPosts: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // -> Me Screen <-
  withoutPostsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: '35%',
  },
  withoutPostLabel: {
    fontSize: scale(SPACING[12] + 3),
    color: COLORS.dark,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: scale(SPACING[8]),
  },
});
