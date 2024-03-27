import { StatusBar } from 'expo-status-bar';
import { Firebase } from 'firebase/app';
//import { Firebase } from '../../firebase';
import { useEffect, useState } from 'react';
import { StyleSheet,ImageBackground, Text, View, TouchableOpacity,FlatList } from 'react-native';
import {MaterialCommityIcons} from '@expo/vector-icons';
//import { FlatList } from 'react-native-gesture-handler';

export default function Home({navigation}) {

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
    <ImageBackground source={require('../../assets/fundo2.jpg')} style={styles.image}> 
   
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Diario</Text>
      
      <FlatList
      data={diario}
      renderItem={({item})=>{
      return(
<View style={styles.estiloDiario}>
<TouchableOpacity onPress={()=>navigation.navigate("AlterarDiario",{
  id: item.id,
  titulo: item.titulo,
  data: item.data,
  texto: item.texto,
  diario: item.diario,
  local: item.local
} )}>
  
  <View style={styles.Items}>
  <Text style={styles.Titulo}>Titulo:</Text> <Text style={styles.Titulo}>{item.titulo}</Text>
  <Text style={styles.txt}>Data:</Text> <Text style={styles.datatxt}>{item.data}</Text>
  <Text style={styles.txt}>Texto:</Text> <Text style={styles.txt}>{item.texto}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{deleteDiario(item.id)}}>
  <MaterialCommityIcons name="delete-empty" size={70} color="red"/>
</TouchableOpacity>
</View>


      );
      }}
      />

<TouchableOpacity style={styles.estilobutao} onPress={()=> navigation.navigate('?')}>
<MaterialCommityIcons name="plus-circle-outline" size={70} color="red"/>
</TouchableOpacity>
      
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
