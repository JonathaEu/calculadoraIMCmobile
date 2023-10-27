import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{
          position: 'absolute',
          top: 200,
          fontWeight: 'bold',
        }}>Dados para cálculo do índice de massa corporal
        </Text>

        <StatusBar style="auto" />
      </View>

      {/*Legendas para campos inputs*/}
      <View style={textStyles.container} >
        <Text>Altura</Text>
        <Text>Peso</Text>
      </View>

      {/*campos inputs*/}
      <View >
        <TextInput style={inputsStyles.container}>
          AAAAAAAAAAA</TextInput>
        <TextInput style={inputsStyles.container}>
          BBBBBBBBB</TextInput>
      </View>

    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 400,
    height: 200,
    marginLeft: 40,
    color: 'black'
  },
});
const inputsStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'relative',
    // top: 00,
    bottom: 440,
    flex: 1,
    height: 200,
    marginLeft: 40,
    fontFamily: 'Roboto',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 200
  },
});
