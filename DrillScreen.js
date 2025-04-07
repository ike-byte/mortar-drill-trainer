import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DrillScreen({ route }) {
  const { drill } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{drill.title}</Text>
      <Text style={styles.subtitle}>Timing and Execution Guide Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});