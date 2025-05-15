import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import MainGridItem from '../components/MainGridItem';
import ThemeToggle from '../components/ThemeToggle';
import LoadingAnimation from '../components/LoadingAnimation';

const MainScreen = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const [loading, setLoading] = useState(false);

  // Navigation helper with loading animation
  const navigateWithLoading = (screenName) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(screenName);
    }, 1500); // Show loading for 1.5 seconds
  };

  // Grid options data
  const options = [
    {
      id: '1',
      title: 'Injured Dogs',
      image: require('../../assets/images/injured.jpg'),
      screen: 'Injured',
    },
    {
      id: '2',
      title: 'Dog Rescue',
      image: require('../../assets/images/rescue.jpg'),
      screen: 'Rescue',
    },
    {
      id: '3',
      title: 'Danger Case',
      image: require('../../assets/images/danger.jpg'),
      screen: 'Danger',
    },
  ];

  // Render grid item
  const renderItem = ({ item }) => (
    <MainGridItem
      title={item.title}
      image={item.image}
      onPress={() => navigateWithLoading(item.screen)}
    />
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colors.statusBar} backgroundColor={colors.background} />
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.primary }]}>Street Paws</Text>
        <ThemeToggle />
      </View>

      <Text style={[styles.subTitle, { color: colors.text }]}>
        Help our furry friends on the streets
      </Text>

      {loading ? (
        <View style={styles.loadingContainer}>
          <LoadingAnimation />
          <Text style={[styles.loadingText, { color: colors.text }]}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.gridContainer}
        />
      )}

      <View style={[styles.footer, { backgroundColor: colors.card }]}>
        <Text style={[styles.footerText, { color: colors.text }]}>
          Thank you for helping street dogs!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  gridContainer: {
    flex:1,
    margin:7,
    padding: 8,
    gap:20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  footerText: {
    fontSize: 14,
  },
});

export default MainScreen;