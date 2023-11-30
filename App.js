import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('./src/img/WIN_20230926_20_02_32_Pro.jpg')}
       
      />
      <Text>Lucas William da Silva Fernandes!</Text>
      <Pressable
        onPress={() => navigation.navigate('Cardapio')}
        style={{
          backgroundColor: 'orange',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Experiência profissional</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Sugestoes')}
        style={{ backgroundColor: 'orange', padding: 10 }}>
        <Text>Experiência Acadêmica</Text>
      </Pressable>
    </View>
  );
}

function Cardapio() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Experiência profissional na empresa accenture.
        projetos feitos em Java, JavaScript, Node, nodeJs!</Text>
    </View>
  );
}

function Sugestoes() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cursando o 3 Periodo de Analise e Desenvolvimento de sistemas na Faculdade Senac Pernambuco</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Sugestoes" component={Sugestoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
