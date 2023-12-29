import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS, SPACING} from '../../theme';

export const styles = StyleSheet.create({
  gradientContainer: {
    padding: scale(SPACING[8]),
    margin: 0,
    width: '100%',
    height: '100%',
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: scale(SPACING[8]),
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: scale(SPACING[20] + 4),
  },
  pictureContainer: {
    width: 142,
    height: 142,
    borderRadius: 100,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#D2D4D5',
    borderWidth: 0.5,
  },
  picture: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  usernameText: {
    textAlign: 'center',
    fontSize: scale(SPACING[12] + 3),
    fontWeight: '700',
    paddingVertical: scale(SPACING[20] + 4),
  },
  blueButton: {
    backgroundColor: '#0064E0',
    paddingVertical: scale(SPACING[8]),
    marginBottom: scale(SPACING[10]),
    borderRadius: 50,
  },
  textBlueButton: {
    color: COLORS.light,
    textAlign: 'center',
    fontSize: scale(SPACING[12] + 2),
    fontWeight: '600',
  },
  lightButton: {
    paddingVertical: scale(SPACING[8]),
    borderRadius: 50,
    borderColor: '#cecece',
    borderWidth: 1,
  },
  textLightButton: {
    color: COLORS.darkText,
    textAlign: 'center',
    fontSize: scale(SPACING[12] + 2),
    fontWeight: '600',
  },
  lightBlueButton: {
    paddingVertical: scale(SPACING[8]),
    borderRadius: 50,
    borderColor: '#0064E0',
    borderWidth: 1,
  },
  textLightBlueButton: {
    color: '#0064E0',
    textAlign: 'center',
    fontSize: scale(SPACING[12] + 2),
    fontWeight: '600',
  },
});
