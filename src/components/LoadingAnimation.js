import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const LoadingAnimation = () => {
  const { colors } = useTheme();
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Bounce animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [rotateAnim, bounceAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const translateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.paw,
          {
            backgroundColor: colors.primary,
            transform: [{ rotate }, { translateY }],
          },
        ]}
      >
        {/* Main paw pad */}
        <View style={[styles.mainPad, { backgroundColor: colors.background }]} />
        
        {/* Toe pads */}
        <View
          style={[
            styles.toePad,
            { left: 3, top: 0, backgroundColor: colors.background },
          ]}
        />
        <View
          style={[
            styles.toePad,
            { left: 15, top: 0, backgroundColor: colors.background },
          ]}
        />
        <View
          style={[
            styles.toePad,
            { left: 27, top: 0, backgroundColor: colors.background },
          ]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paw: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mainPad: {
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
    bottom: 2,
    left: 9,
  },
  toePad: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
});

export default LoadingAnimation;