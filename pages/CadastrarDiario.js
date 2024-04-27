import React from 'react';
import { useState } from 'react';
import { StyleSheet,TextInput, Text, View, TouchableOpacity,Alert} from 'react-native';
 import { Firebase } from '../firebase';


export default function CadasroDiario({navigation}) {
   
   const [titulo , setTitulo] = useState(null);
   const [texto , setTexto] = useState(null);
   const [data, setData] = useState(null);
   const [local, setLocal] = useState(null);

function addDiario(){
  Firebase.collection("diario").add({
        titulo: titulo,
        data: data,
        texto: texto,
        local: local
    });
    setTitulo({titulo:''})
    setTexto({texto:''})
    setData({data:''})
    setLocal({local:''})

    Alert.alert("Cadastro", "Diario cadastrado com sucesso :)")
    navigation.navigate("Home")
}

return(
<View style={styles.container}>
 <View>
                                               
 <Text style={estilo.titulo}> Registre no Seu Diário</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite o Título" onChangeText={setTitulo} value={titulo}/>
      <TextInput style={estilo.input} placeholder="Digite o lindo dia" onChangeText={setTexto} value={texto}/>
      <TextInput style={estilo.input} placeholder="Digite a data" onChangeText={setData} value={data}/>
      <TextInput style={estilo.input} placeholder="Digite o seu local agora" onChangeText={setLocal} value={local}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addDiario();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
    </View>
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
