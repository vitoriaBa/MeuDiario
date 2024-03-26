import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import { useState,useEffect } from 'react';

import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import { Initializing } from '@firebase/app';
import Firebase from '../../firebase';


//const auth = Firebase.auth();

const auth = getAuth(Firebase);


//pao@gmail.com
//paopao
export default function Login({navigation}) {

  
const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const [user,setUser] = useState('');


function login(){

  // const app = initializeApp(Firebase);

  signInWithEmailAndPassword(auth,email,senha).catch(
    function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
    }
  );
}

useEffect(()=>{
  auth.onAuthStateChanged(function(user){
        setUser(user);
        if(Initializing) setInitializing(false);
     
    });
},[])



if(user){
    return navigation.navigate('Home');
}
else{
   // alert('xabu')
}

  return (
    <ImageBackground source={require('../assets/funto.jpg')} style={styles.image}> 
    <View style={styles.container}>

        
      <Text style={styles.titulo}>Bem Vindo ao seu Diario</Text>
  
      <Text style={styles.txt}>Login</Text>
      
      <TextInput
      style={styles.input}
      placeholder='digite seu email'
      onChangeText={(email)=>setEmail(email)}
      value={email}
      />
 
      <Text style={styles.txt}>Senha</Text>
      <TextInput
      style={styles.input}
      placeholder=' digite sua senha'
      onChangeText={(senha)=>setSenha(senha)}
      value={senha}
      />
<View style={styles.cbutao}>
      <TouchableOpacity style={styles.botao}
      onPress={()=>{
        login();
      }}>
        <Text style={styles.botaotexto}>Logar</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.botao}
      onPress={()=>{
        return navigation.navigate('Cadastrar');
      }}>
        <Text style={styles.botaotexto}>Cadastrar</Text>
      </TouchableOpacity>
     </View> 

      

      
      <StatusBar style="auto" />
    </View>
</ImageBackground>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding:0,
    margin:0,
   
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

  },
  input:{
    marginBottom:0,
    backgroundColor:'#FFF6E0',
    width:300,
    borderRadius:20,
    height:50,
    padding:10,
    color:'#000000',
  },
  txt:{
    marginTop:10,
    fontSize:20,
    fontWeight:'100',
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
  cbutao:{
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    width:300,
    marginTop:35,
    height:100,

  },
  botao:{
    width:250,
   // backgroundColor:'tras',
    height:40,
    marginTop:15,
    alignItems:'center',
    borderWidth:1,
   borderColor:'#FFF6E0',
    justifyContent:'center',
    borderRadius:10
    
  },
  botaotexto:{
    color: '#FFF6E0',
    fontSize:30,
    fontWeight:'100',
  }
});
