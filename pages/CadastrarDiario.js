
import { Firebase } from '../Firebase';
import { useEffect, useState } from 'react';
import { StyleSheet,TextInput,ImageBackground, Text, View, TouchableOpacity,FlatList, 
 } from 'react-native';



export default function CadasroDiario({navigation}) {
   
   const [titulo , setTitulo] = useState(null);
   const [texto , setTexto] = useState(null);
   const [data, setData] = useState(null);
   const [local, setLocal] = useState(null);

function addDiario(){
    Firebase.collection('diario').add({
        id: id,//talves tenha que tirar alguns
        titulo: titulo,
        data: data,
        texto: texto,
        local: local
    });//nao coloquei diario ??
    setTitulo({titulo:''})
    setTexto({texto:''})
    setData({data:''})
    setLocal({local:''})

    alert("Cadastro", "Diario cadastrado com sucesso :)")
    navigation.navigate("Home")
}

return(
<View style={styles.container}>
 <View>
                                               
    <Text style={styles.Titulo}> Cadastre Suas {'\n'} Titulo</Text>
    <TextInput 
    autoCapitalize='words' style={styles.input} placeholder='Digite seu Titulo'
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
  addDiario();
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
