import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';

const CadastroScreen = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const criarUsuario = () => {
    axios.post('http://100.28.74.101:8080/api/Usuarios', {
      nomeUsuario: nomeUsuario,
      senha: senha
    })
    .then(response => {
      Alert.alert('Usuário criado com sucesso!');
      navigation.navigate('Login');
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Erro ao criar usuário', 'Tente novamente.');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../img/logo1.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.enterSection}>
        <Text style={styles.title}>Criar Conta</Text>

        <TextInput
          mode="outlined"
          label="Nome"
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
          outlineColor='#583FFF'
          outlineStyle={styles.inputOutline}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          outlineColor='#583FFF'
          outlineStyle={styles.inputOutline}
          style={styles.input}
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={criarUsuario}
          contentStyle={{ padding: 8 }}
        >
          CRIAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    width: 393,
    height: 207,
    backgroundColor: '#E2E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 292,
    height: 126,
    marginTop: 76,
  },
  enterSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 207,
  },
  title: {
    fontFamily: 'Comfortaa',
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 40.14,
    letterSpacing: -0.015,
    textAlign: 'left',
    color: '#583FFF',
    marginBottom: 16,
  },
  input: {
    width: 309,
    height: 37,
    marginBottom: 16,
    alignSelf: 'center',
  },
  inputOutline: {
    borderWidth: 2,
    borderRadius: 15,
  },
  button: {
    width: 309,
    height: 37,
    backgroundColor: '#583FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: 15,
  },
});

export default CadastroScreen;