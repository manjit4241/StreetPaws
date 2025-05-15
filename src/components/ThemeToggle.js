import React from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const ThemeToggle = () => {
  const { isDark, setScheme, colors } = useTheme();

  const toggleTheme = () => {
    setScheme(isDark ? 'light' : 'dark');
  };

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.container,
        {
          backgroundColor: isDark ? colors.secondary : colors.primary,
        },
      ]}
      activeOpacity={0.8}
    >
      <Animated.View
        style={[
          styles.switchHandle,
          {
            backgroundColor: colors.background,
            transform: [
              {
                translateX: isDark ? 22 : 0,
              },
            ],
          },
        ]}
      >
        {/* Dog face elements */}
        <View
          style={[
            styles.ear,
            styles.leftEar,
            { backgroundColor: isDark ? colors.primary : colors.secondary },
          ]}
        />
        <View
          style={[
            styles.ear,
            styles.rightEar,
            { backgroundColor: isDark ? colors.primary : colors.secondary },
          ]}
        />
        <View style={styles.faceContainer}>
          <View
            style={[
              styles.eye,
              styles.leftEye,
              { backgroundColor: isDark ? colors.primary : colors.secondary },
            ]}
          />
          <View
            style={[
              styles.eye,
              styles.rightEye,
              { backgroundColor: isDark ? colors.primary : colors.secondary },
            ]}
          />
          <View
            style={[
              styles.nose,
              { backgroundColor: isDark ? colors.primary : colors.secondary },
            ]}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 2,
    paddingVertical: 2,
    justifyContent: 'center',
  },
  switchHandle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: 'relative',
  },
  ear: {
    width: 8,
    height: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: -4,
  },
  leftEar: {
    left: 2,
    transform: [{ rotate: '-20deg' }],
  },
  rightEar: {
    right: 2,
    transform: [{ rotate: '20deg' }],
  },
  faceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: 4,
    height: 4,
    borderRadius: 2,
    position: 'absolute',
    top: 6,
  },
  leftEye: {
    left: 6,
  },
  rightEye: {
    right: 6,
  },
  nose: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 5,
  },
});

export default ThemeToggle;