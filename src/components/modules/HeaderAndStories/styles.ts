import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(SPACING[4]),
    marginVertical: scale(SPACING[2]),
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
    gap: scale(SPACING[2]),
  },
  dmContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: scale(SPACING[12]),
    position: 'relative',
  },
  dmContainerText: {
    position: 'absolute',
    bottom: -scale(-18),
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
    marginTop: scale(0),
    flexDirection: 'row',
    gap: scale(SPACING[8]),
    marginLeft: scale(SPACING[4]),
  },
  usernameText: {
    fontSize: scale(SPACING[10] + 1),
    textAlign: 'center',
    paddingTop: scale(SPACING[4] + 2),
  },
});
