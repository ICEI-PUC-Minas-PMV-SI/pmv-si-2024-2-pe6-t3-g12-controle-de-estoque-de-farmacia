import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';

const UsuarioScreen = ({ navigation }) => {
  const [usuarioLogin, setUsuarioLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');

  const autenticarUsuario = () => {
    axios.post('http://100.28.74.101:8080/api/Usuarios/Autenticar', {
      nomeUsuario: usuarioLogin,
      senha: senhaLogin
    })
    .then(response => {
      Alert.alert('Autenticação bem-sucedida!', 'Token recebido.');
      navigation.navigate('Home');
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Erro na autenticação', 'Verifique suas credenciais.');
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
        <Text style={styles.title}>Entrar</Text>

        <TextInput
          mode="outlined"
          label="Nome do usuário"
          value={usuarioLogin}
          onChangeText={setUsuarioLogin}
          outlineColor='#583FFF'
          outlineStyle={styles.inputOutline}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          value={senhaLogin}
          onChangeText={setSenhaLogin}
          secureTextEntry
          outlineColor='#583FFF'
          outlineStyle={styles.inputOutline}
          style={styles.input}
        />

        <View style={styles.forgotPasswordSection}>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.forgotPasswordLink}>Esqueci a Senha</Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          style={styles.button}
          onPress={autenticarUsuario}
          contentStyle={{ padding: 8 }}
        >
          ENTRAR
        </Button>

        <View style={styles.createAccountSection}>
          <Text style={styles.createAccountText}>Não tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.createAccountLink}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
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
  forgotPasswordSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  forgotPassword: {
    fontFamily: 'Comfortaa',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.15,
    letterSpacing: -0.015,
    textAlign: 'left',
    color: '#00000080',
  },
  forgotPasswordLink: {
    fontFamily: 'Comfortaa',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.15,
    letterSpacing: -0.015,
    textAlign: 'left',
    color: '#583FFF',
    marginLeft: 8,
    textDecorationLine: 'underline',
    textShadowColor: '#00000040',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
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
  createAccountSection: {
    alignItems: 'center',
    marginTop: 16,
  },
  createAccountText: {
    fontFamily: 'Comfortaa',
    fontSize: 11,
    fontWeight: '400',
    color: '#00000080',
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  createAccountLink: {
    fontFamily: 'Comfortaa',
    fontSize: 11,
    fontWeight: '400',
    color: '#583FFF',
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});

export default UsuarioScreen;