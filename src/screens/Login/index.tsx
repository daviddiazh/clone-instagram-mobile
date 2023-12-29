/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '../../components/Icon';
import {users} from '../../api';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {scale} from 'react-native-size-matters';
import {SPACING} from '../../theme';

export const Login = () => {
  const me = users[0];

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#F8F2FA', '#EDF2FC', '#EDFCF2']}
      style={styles.gradientContainer}
      start={{x: 0, y: 0}} // Punto de inicio del gradiente
      end={{x: 1, y: 0}} // Punto de fin del gradiente
      useAngle
      angle={105}>
      <View style={{flex: 1}}>
        <View style={styles.settings}>
          <Icon name="settings-01" size={18} />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.webp')}
            style={{width: 50, height: 50}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: scale(SPACING[12]),
          }}>
          <View style={styles.pictureContainer}>
            <Image source={me.profileImage} style={styles.picture} />
          </View>
        </View>
        <Text style={styles.usernameText}>{me.username}</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('BottomTabNavigation', {screen: 'Home'});
          }}
          style={styles.blueButton}>
          <View>
            <Text style={styles.textBlueButton}>Iniciar sesión</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.lightButton}>
          <View>
            <Text style={styles.textLightButton}>
              Iniciar sesión en otra cuenta
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.lightBlueButton}>
        <View>
          <Text style={styles.textLightBlueButton}>Crear cuenta nueva</Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: scale(SPACING[12]),
        }}>
        <Image
          source={require('../../assets/images/meta-logo.png')}
          style={{width: 55, height: 10}}
        />
      </View>
    </LinearGradient>
  );
};
