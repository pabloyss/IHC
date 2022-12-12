import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  // State to hold the message that the user enters
  const [message, setMessage] = useState('');

  // State to track whether the second activity is currently being shown
  const [showSecondActivity, setShowSecondActivity] = useState(false);

  // Function to handle the button press and show the second activity
  const handlePress = () => {
    setShowSecondActivity(true);
  };

  // Function to handle returning to the first activity
  const handleBackPress = () => {
    setShowSecondActivity(false);
  };

  return (
    <View>
      {!showSecondActivity && (
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Atividade 2</Text>
          <Text>Enter a message:</Text>
          <TextInput
            value={message}
            onChangeText={text => setMessage(text)}
          />
          <Button title="Send" onPress={handlePress} />
        </View>
      )}
      {showSecondActivity && (
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Atividade 2</Text>
          <Text>{message}</Text>
          <Button title="Back" onPress={handleBackPress} />
        </View>
      )}
    </View>
  );
};

export default App;
