import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import perfil from './assets/perfil.png';



export default function inicio() {

  return (
    <View style={estilo.container}>
      <Image
        source={perfil}
        style={estilo.avatar}
      />
      <Text style={estilo.nome}>
        Ayrton senna
      </Text>
      <Text style={estilo.bio}>
        Atravez desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.
      </Text>

    </View>

    

  );
}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1, 
    justifyContent:'flex-start', 
    alignItems:'center'
  },
  avatar:{
    width:200,
    height:200,
    borderRadius:100,
    borderWidth: 5,
    margin: 30,
    borderTopColor: "#000",
  },

  letras:{
    fontSize:20
  },
  icons:{
    justifyContent: 'center'
  },
  bio:{
    textAlign:'center',
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    color: "white",
    width: 400,
    borderRadius: 10,
  }
  
});