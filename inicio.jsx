import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';
import perfil from './assets/perfil.png';
import fundo from './assets/fyndo.png'



export default function inicio() {

  return (
    
      <ImageBackground style={estilo.container} imageStyle={{
        height:'100%' ,
        width:400
      }}
        source={fundo}
        blurRadius={5}        
      >
      <Image
        source={perfil}
        style={estilo.avatar}
      />
      <View style={estilo.vPai}>
        <Text style={estilo.sTitulo}>
          Ayrton Senna
        </Text>
      <Text style={estilo.txtBio}>
        Atravez desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.
      </Text>

      </View>
    </ImageBackground>
    
    

    

  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  txtBio:{
    color: 'white',
    textAlign:'justify',
    margin: 20
  },
  sTitulo:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    // marginBottom: 15,
    marginTop: 20
  },
  vPai:{
    backgroundColor: 'black',
    textAlign: 'center',
    width: 380,
    borderRadius:10
  },
  avatar:{
    width:200,
    height:200,
    borderRadius:100,
    borderWidth: 5,
    margin: 30,
    borderTopColor: "#000",
  },
  // image: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  // },
  // letras:{
  //   fontSize:20
  // },
  // icons:{
  //   justifyContent: 'center'
  // },
  
  
});