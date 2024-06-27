import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Image } from 'expo-image';
// import Avatar from './assets/avatar.jpg';



export default function vitorias() {

  return (
    <ScrollView>
    <View style={estilo2.vPai}>
        <Text style={estilo2.sTitulo}>
          Senna em Números
        </Text>
      <Text style={estilo2.txtBio}>
        Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole position
      </Text>

      </View>
    </ScrollView>
  );
}

const estilo2 = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(255,255,255,255)', 
    flex:1,
    marginTop: 0,
    justifyContent:'flex-start', 
    alignItems:'center',
  },
  txtBio:{
    color: 'white',
    textAlign:'justify',
    margin: 20
  },
sTitulo:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
vPai:{
    backgroundColor: 'gray',
    textAlign: 'center',
    width: 380,
    borderRadius:10
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

