import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const InjuredScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.primary }]}>Injured Dogs</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          This section will help you report and find assistance for injured street dogs.
        </Text>
        
        <View style={[styles.placeholderCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.placeholderText, { color: colors.text }]}>
            Coming soon in the next update!
          </Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Main Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const RescueScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.primary }]}>Dog Rescue</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          Connect with local dog rescue organizations and shelters to help street dogs.
        </Text>
        
        <View style={[styles.placeholderCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.placeholderText, { color: colors.text }]}>
            Coming soon in the next update!
          </Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Main Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const DangerScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.primary }]}>Danger Case</Text>
        <Text style={[styles.description, { color: colors.text }]}>
          Report urgent situations where street dogs are in immediate danger.
        </Text>
        
        <View style={[styles.placeholderCard, { backgroundColor: colors.card }]}>
          <Text style={[styles.placeholderText, { color: colors.text }]}>
            Coming soon in the next update!
          </Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back to Main Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  placeholderCard: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    minHeight: 200,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  placeholderText: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  backButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { InjuredScreen, RescueScreen, DangerScreen };