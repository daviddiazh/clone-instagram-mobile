import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    margin: scale(SPACING[4]),
    padding: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: scale(SPACING[4]),
  },
  dmContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: scale(SPACING[10]),
    position: 'relative',
  },
  dmContainerText: {
    position: 'absolute',
    bottom: -scale(-13),
    right: -scale(2),
    backgroundColor: COLORS.error.default,
    paddingVertical: scale(SPACING[2]),
    paddingHorizontal: scale(SPACING[4]),
    borderRadius: scale(6),
  },
  dmText: {
    fontSize: scale(10),
    color: COLORS.light,
    fontWeight: '600',
  },
  feedHistoriesContainer: {
    marginTop: scale(10),
    flexDirection: 'row',
    gap: scale(SPACING[8]),
  },
  usernameText: {
    fontSize: scale(SPACING[10] + 1),
    textAlign: 'center',
    paddingTop: scale(SPACING[4] + 2),
  },
});
