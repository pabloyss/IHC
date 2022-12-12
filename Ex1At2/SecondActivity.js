import React from 'react';
import { View, Text } from 'react-native';

function SecondActivity({ route }) {
  const { message } = route.params;
  return (
    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Atividade 2</Text>
        <Text>Mensagem: {message}</Text>
      </View>
    </View>
  );
}

export default SecondActivity;
