import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Tela1({ navigation }) {
  return (
   <View style={styles1.container}>
        <Image style={styles1.logo} source={require('./assets/logo.png')}/>

      <Text style={styles1.tittle}>
        marketspace
      </Text>

      <Text style={styles1.paragraph}>
        Seu espaço de compra e venda
      </Text>

        <Text style={styles1.label}>Acesse sua conta</Text>
        <TextInput
          style={styles1.input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles1.input}
          placeholder="Senha"
          secureTextEntry
        />

         <TouchableOpacity style={styles1.button}>
          <Text style={styles1.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles1.footer}>
        <Text style={styles1.label}>
          Ainda não tem acesso?
        </Text>
        <TouchableOpacity style={styles1.button2}
          onPress={() => navigation.navigate('Registrar')}
        >
          <Text style={styles1.buttonText2}>Criar uma conta</Text>
        </TouchableOpacity>

        </View>
    </View>


  );
}


function Tela2({ navigation }) {
  return (
    <View style={styles2.container}>
        <Image style={styles2.logo} source={require('./assets/logo.png')}/>

      <Text style={styles2.tittle}>
        Boas vindas!
      </Text>

      <Text style={styles2.paragraph}>
Crie sua conta e use o espaço para comprar{'\n'}itens variados e vender seu produtos
      </Text>

        <Image style={styles2.logo2} source={require('./assets/logo - cadastro.png')}/>

        <TextInput
          style={styles2.input}
          placeholder="Nome"
        />
        <TextInput
          style={styles2.input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles2.input}
          placeholder="Telefone"
        />
        <TextInput
          style={styles2.input}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput
          style={styles2.input}
          placeholder="Confirmar senha"
          secureTextEntry
        />
         <TouchableOpacity style={styles2.button}>
          <Text style={styles2.buttonText}>Criar</Text>
        </TouchableOpacity>
        <Text style={styles2.label}>
          Já tem uma conta?
        </Text>
        <TouchableOpacity style={styles2.button2}
        onPress={() => navigation.navigate('Entrar')}
        >
          <Text style={styles2.buttonText2}>Ir para o login</Text>
        </TouchableOpacity>

    </View>
  );
}




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entrar" component={Tela1} />
        <Stack.Screen name="Registrar" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles1 = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ececef',
    width: '100%',
    height: '100%',
},
  tittle: {
    marginTop: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
  color: '#656569',
  },
  logo: {
    width: 100,
    height: 80,
    marginTop: 50,
  },
  label: {
    marginTop: 100,
    color: '#656569',
  },
  input: {
    marginTop: 25,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 270, 
    color: '#868589',
  },
  button: {
    backgroundColor: '#6878c0',
    padding: 10,
    width: 270,
    marginTop: 30,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 50,

  },
  buttonText: {
    color: 'white'
  },

  button2: {
    backgroundColor: '#d8d9da',
    padding: 10,
    width: 270,
    marginTop: 20,
    textAlign: 'center', 
    borderRadius: 5,
  },
  buttonText2: {
    color: 'black'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 70,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ececef',
    width: '100%',
    height: '100%',
},
  tittle: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  paragraph: {
  color: '#656569',
  },
  logo: {
    width: 60,
    height: 40,
    marginTop: 50,
  },
  logo2: {
    width: 90,
    height: 81,
    marginTop: 50,
  },
  input: {
    marginTop: 25,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 270,
    color: '#868589', 
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    width: 270,
    marginTop: 30,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 50,
  },
  label: {
    marginTop: 20,
    color: '#868589',
  },
  buttonText: {
    color: 'white'
  },

  button2: {
    backgroundColor: '#d8d9da',
    padding: 10,
    width: 270,
    marginTop: 20,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText2: {
    color: 'black'
  },
});