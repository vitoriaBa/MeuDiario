import { StatusBar } from 'expo-status-bar';
import { Firebase } from 'firebase/app';
import { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import {MaterialCommityIcons} from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function Home() {

  const [diario,setDiario] = useState([]);

  function deleteDiario(id){
    Firebase.collection("diario").doc(id).delete();
    Alert.alert("A diario foi deletada");
  }

  useEffect(()=> {
    Firebase.collection("diario").onSnapshot((query)=> {
      const lista=[];
      query.forEach((doc)=> {
        lista.push({...doc.data(),id: doc.id});
      });
  setDiario(lista);
    });
  },[]);



  return (
  //  <ImageBackground source={require('../../assets/fundo2.jpg')} style={styles.image}> 
   
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Diario</Text>
      
      <FlatList
      data={diario}
      renderItem={({item})=>{
      
      }}
      ></FlatList>
      
      <Text style={styles.txt}>Palavra do dia: Codar</Text>

      <Text style={styles.txt}>Hoje é um novo dia que se inicia com muita codação....eu amo....codar...codo o dia todo sem parar</Text>
      <StatusBar style="auto" />
    </View>
  //  </ImageBackground>
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
