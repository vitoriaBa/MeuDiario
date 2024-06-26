import React from 'react';
import { Firebase } from '../firebase';
import { useState } from 'react';
import { StyleSheet,TextInput,ImageBackground,Alert, Text, View, TouchableOpacity } from 'react-native';



export default function AlterarDiario({navigation,route}) {
   
    const id = route.params.id;

   const [titulo , setTitulo] = useState(route.params.titulo);
   const [texto , setTexto] = useState(route.params.texto);
   const [data, setData] = useState(route.params.data);
   const [local, setLocal] = useState(route.params.local);

function alterarDiario(id,titulo,texto,data,local){
  Firebase.collection("diario").doc(id).update({
        titulo: titulo,
        data: data,
        texto: texto,
        diario: diario,
        local: local
    });//nao coloquei diario ??
    Alert.alert("Aviso", "Diario Alterado com sucesso. :) ")
    navigation.navigate("Home")
}

return(
<View style={styles.container}>
 <View>
                                               
    <Text style={styles.Titulo}>Alterar dados do Diario</Text>
    <TextInput 
    style={styles.input} placeholder='Digite seu Titulo'
    onChangeText={setTitulo} value={titulo}/>


<TextInput 
     style={styles.input} placeholder='Digite a Data'
    onChangeText={setData} value={data}/>

<TextInput 
     style={styles.input} placeholder='Digite seu Texto do dia :)'
    onChangeText={setTexto} value={texto}/>

<TextInput 
     style={styles.input} placeholder='Digite seu Local'
    onChangeText={setLocal} value={local}/>
     
 </View>
 <TouchableOpacity
 style={styles.bntenviar}
 onPress={() => {
    alterarDiario(id,titulo,texto,data,local);
 }}>
<Text> Enviar</Text>
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
