import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';

export default function Home() {
  return (
    <ImageBackground source={require('../assets/fundo2.jpg')} style={styles.image}> 
   
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Diario</Text>
      
      <Text style={styles.txt}>Data :11/03/24</Text>
      
      <Text style={styles.txt}>Palavra do dia: Codar</Text>

      <Text style={styles.txt}>Hoje é um novo dia que se inicia com muita codação....eu amo....codar...codo o dia todo sem parar</Text>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

  },
  txt:{
    marginTop:10,
    fontSize:20,
    fontWeight:'300',
   color:'#FFF6E0',
  },
  titulo:{
    fontWeight:'100',
    marginLeft:50,
    marginRight:50,
    margin:10,
    fontSize:40,
    color:'#FFF6E0',
  },
});
