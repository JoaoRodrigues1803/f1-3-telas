import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// // import Avatar from './assets/avatar.jpg';
// import Foto from './assets/esteban.jpg';
import imagen from './assets/perfil.png'
import reiChuva from './assets/ReiDaChuva.png'
import reiMonaco from './assets/ReiDeMonaco.png'
import silvastone from './assets/comemorando.png'
import preparacao from './assets/preparação.png'


export default function sobre() {

  return (
    <ScrollView>
      <View style={estilo.container}>

        <Text style={estilo.Titulo}>
          Ayrton Senna
        </Text>
        <Image
          source={imagen}
          style={estilo.foto}
        />
        <Text style={estilo.texto}>
          No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por algun dos momentos mais mágicos da principal categoria do automobilismo mundial 
        </Text>

        <View style={estilo.posts}>
          {/* 1º Post */}
          <View style={estilo.post}>
            <Image
              source={reiChuva}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Rei da chuva</Text>
              <Text style={estilo.textoPost}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência .</Text>
            </View>
          </View>
          {/* 2° Post */}
          <View style={estilo.post}>
            <Image
              source={reiMonaco}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Rei da Mônaco</Text>
              <Text style={estilo.textoPost}>Conquistou o oposto por ser o maior recordista de votórias,com seis conquistas.</Text>
            </View>
          </View>
          {/* 3° Post */}
          <View style={estilo.post}>
            <Image
              source={silvastone}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Silvastone</Text>
              <Text style={estilo.textoPost}>Por seu curriculo impressionante em Silvastone,Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
            </View>
          </View>
           {/* 4° Post */}
           <View style={estilo.post}>
            <Image
              source={preparacao}
              style={estilo.imgPost}
            />
            <View style={estilo.corpoPost}>
              <Text style={estilo.tituloPost}>Preparação</Text>
              <Text style={estilo.textoPost}>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
            </View>
          </View>

         


        </View>

      </View>

      {/* <Text>
        <hr />
      <Image
      source={reiChuva}
      style={estilo.reidaChuva}
      />
      fdsfdsfsdfdsfdsf
      </Text> */}
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 0,
    justifyContent:'flex-start', 
    alignItems:'center',
  },
  Titulo:{
    color : 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  foto:{
    width:350,
    height:280,
    alignSelf:'center',
    borderRadius: 15
  },
  texto:{
    textAlign: 'justify',
    margin: 30,
  },
  imgPost:{
    width:100,
    height:100,
    alignSelf:'flex-start'
  },
  posts:{
    width: 380,
  },
  post:{
    flexDirection: 'row',
    marginVertical:10,
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderWidth:1
  },
  tituloPost: {
    margin:10,
    fontWeight: 'bold',
    fontSize:16
  },
  textoPost:{
    textAlign:'justify',

  },
  corpoPost:{
    width: 280,
    padding:5
  },
  
//   bio:{
//     fontSize: 18, 
//     margin: 30
//   },
  // avatar:{
  //   width:200,
  //   height:200,
  //   borderWidth: 1,
  //   borderTopColor: "#000",
  //   marginTop:50
  //   /// borderBottomColor:"#ff0",   
  // },
//   nome:{
//     fontSize: 20,
//   },
//   pg:{
//     width:120,
//     height:120,
//     borderWidth: 1,
//     borderTopColor: "#000",
//     /// borderBottomColor:"#ff0",
//   },
//   View:{
//     flexDirection:'row'
//   },
// vDentro:{
//   alignItems:'center',
//   margin:5
// },
// nomee:{
//   marginTop:25,
//   fontSize: 20
// },
}); 

