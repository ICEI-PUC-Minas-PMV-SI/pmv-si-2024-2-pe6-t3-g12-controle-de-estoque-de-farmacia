import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import UsuarioScreen from './src/screens/UsuarioScreen';
import LoteScreen from './src/screens/Lote/LoteScreen';
import NewLoteScreen from './src/screens/Lote/NewLoteScreen';
import UpdateLoteScreen from './src/screens/Lote/UpdateLoteScreen';
import FornecedorScreen from './src/screens/Fornecedor/FornecedorScreen';
import NewFornecedorScreen from './src/screens/Fornecedor/NewFornecedorScreen';
import UpdateFornecedorScreen from './src/screens/Fornecedor/UpdateFornecedorScreen';
import CadastroScreen from './src/screens/CadastroScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuario">
        <Stack.Screen name="Login" component={UsuarioScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fornecedor" component={FornecedorScreen} />
        <Stack.Screen name='Cadastrar Fornecedor' component={NewFornecedorScreen}/>
        <Stack.Screen name='Editar Fornecedor' component={UpdateFornecedorScreen}/>
        <Stack.Screen name="Usuario" component={UsuarioScreen} />
        <Stack.Screen name="Lote" component={LoteScreen} />
        <Stack.Screen name="Cadastrar Lote" component={NewLoteScreen} />
        <Stack.Screen name="Editar Lote" component={UpdateLoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
