import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const drills = [
  { id: 1, title: 'M224A1 – Mount Mortar' },
  { id: 2, title: 'M224A1 – Small Deflection' },
  { id: 3, title: 'M252A1 – Refer Alignment' },
  { id: 4, title: '120mm – Large Deflection' },
  { id: 5, title: 'M224A1 – Reciprocal Lay' },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Mortar Drill Trainer</Text>
      {drills.map((drill) => (
        <Button
          key={drill.id}
          title={drill.title}
          onPress={() => navigation.navigate('Drill', { drill })}
        />
      ))}
    </ScrollView>
  );
}