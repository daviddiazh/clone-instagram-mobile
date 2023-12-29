import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientRoundBorder = ({children}: any) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf']} // Cambia estos colores según tu gradiente
        style={styles.gradient}
        start={{x: 0, y: 0}} // Punto de inicio del gradiente
        end={{x: 1, y: 0}} // Punto de fin del gradiente
        useAngle>
        <View style={styles.innerContainer}>{children}</View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  gradient: {
    borderRadius: 100, // Ajusta este valor para cambiar la redondez del borde
    padding: 2,
    width: 80,
    height: 80,
  },
  innerContainer: {
    borderRadius: 100, // <-- Inner Border Radius
    flex: 1,
    padding: 3, // <-- Border Width
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
