import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const frase = 'O resultado é ';
  function soma() {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert(frase + resultado);
  }
  function dividir() {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert(frase + resultado);
  }
  function sub() {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert(frase + resultado);
  }
  function multi() {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert(frase + resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Soma de Valores</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número"
        placeholderTextColor="#fff"
        onChangeText={(num1) => setNum1(num1)}
      />
      <TextInput
        style={styles.input1}
        keyboardType="numeric"
        placeholder="Digite outro"
        placeholderTextColor="#fff"
        onChangeText={(num2) => setNum2(num2)}
      />
      <View
        style={{
          margin: 10,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
          alignSelf: 'stretch',
        }}>
        <TouchableOpacity style={styles.btn} onPress={soma}>
          <Text style={styles.titulobtn}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={sub}>
          <Text style={styles.titulobtn}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={dividir}>
          <Text style={styles.titulobtn}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={multi}>
          <Text style={styles.titulobtn}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#A7A3A3',
    borderRadius: 10,
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    fontSize: 30,
  },
  input1: {
    backgroundColor: '#A7A3A3',
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#36abff',
    margin: 5,
    borderRadius: 10,
    padding: 30,
  },
  titulobtn: {
    fontSize: 25,
    color: '#fff',
  },
});
