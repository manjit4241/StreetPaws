// app/index.js
import React from 'react';
import { ThemeProvider } from '../src/theme/ThemeContext';
import AppNavigator from '../src/navigation/AppNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}