import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// // import Avatar from './assets/avatar.jpg';
// import Foto from './assets/esteban.jpg';


export default function sobre() {

  return (
    <ScrollView>
      
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1,
    marginTop: 0,
    justifyContent:'flex-start', 
    alignItems:'center',
    backgroundColor: '#FF8EF5'
  },
  bio:{
    fontSize: 18,
    margin: 30
  },
  avatar:{
    width:200,
    height:200,
    borderWidth: 1,
    borderTopColor: "#000",
    marginTop:50
    /// borderBottomColor:"#ff0",   
  },
  nome:{
    fontSize: 20,
  },
  pg:{
    width:120,
    height:120,
    borderWidth: 1,
    borderTopColor: "#000",
    /// borderBottomColor:"#ff0",
  },
  View:{
    flexDirection:'row'
  },
vDentro:{
  alignItems:'center',
  margin:5
},
nomee:{
  marginTop:25,
  fontSize: 20
},
}); 

