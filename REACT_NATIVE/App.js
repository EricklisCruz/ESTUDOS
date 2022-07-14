import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import  Header from './components/Header';
import Body from './components/Body';

export default class App extends React.Component {
  
  /*Header = () => {
    return(
      <Text>Home | Sobre | Contanto | Desenvolvedor</Text>
    );
  }

  Body = () => {
    return(
      <Text>Conteúdo do meu app.</Text>
    );
  }

  Footer = () => {
    return(
      <Text>Rodapé do meu app</Text>
    )
  }*/
  
  render(){
    return (
      <View style={{marginTop:20}}>
          <Header></Header>
          <Body></Body>
      </View>
    );
  }
  
}

const Botao = () =>{
  return(
    <Button title="Clique"></Button>
  )
}
