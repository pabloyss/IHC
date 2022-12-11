import { useState } from 'react';
import { Text, View, Button, TextInput} from 'react-native';

export default function App() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function somar() {
    setResultado(valor1 + valor2);
  }

  return (

    
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Atividade 1</Text>
      <TextInput
        placeholder="Valor 1"
        value={valor1}
        onChangeText={(text) => setValor1(Number(text))} />

      <TextInput
        placeholder="Valor 2"
        value={valor2}
        onChangeText={(text) => setValor2(Number(text))} />

      <Button title="Somar" onPress={somar} />

      <Text>Resultado:</Text>
      <Text>{resultado}</Text>
    </View>
    

  );
}
