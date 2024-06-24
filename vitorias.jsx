import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';



export default function vitorias() {

  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.dados}>
        <Text style={estilo.titulo}>
        Senna em Números
        </Text>
        <Text  style={estilo.textoDados}>
        Ele conquistou três campeonatos mundiais em 1988,1990,1991, e ganhou 41 Grandes Prêmios e 65 pole positions.
        </Text>
  
      <Text style={estilo.vitorias}>
      161 GPS DISPUTADOS 
      
      
        65 POLE POSITIONS
     

      
        41 VITÓRIAS
     
     
        3 VEZES CAMPEÃO MUNDIAL
      </Text>
       
      </Text>
   




    </View>
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
  },
dados:{
  textAlign:'center',
    backgroundColor: "gray",
    alignItems: "center",
    color: "white",
    width: 380,
    borderRadius: 5
},
textoDados:{
  margin: 5
},

titulo:{
  fontSize: 20,
  fontWeight: 'bold'
},
vitorias:{
  textAlign:'justify'
}
//   bio:{
//     fontSize: 18,
//     margin: 30,
//   },
//   avatar:{
//     width:200,
//     height:200,
//     borderWidth: 1,
//     borderTopColor: "#000",
//     marginTop:50
//     /// borderBottomColor:"#ff0",   
//   },
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
// }
}); 

