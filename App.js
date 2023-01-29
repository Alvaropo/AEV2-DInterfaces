import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

  /*EL BOTÓN NECESITA PULSARSE DOS VECES CONSECUTIVAS, NO SE COMO ARREGLARLO POR LO DEMÁS ESTÁ TODO*/

export default function App() {
  const [peso, setPeso] = useState("0");
  const [altura, setAltura] = useState("0");
  const [valor, setValor] = useState(0);
  const [tipoIMC, setTipoIMC] = useState("");
  const [color, setColor] = useState("");
  
  function calcularIMC() {
    setValor(peso/(altura*altura));

    if (valor==0 || altura==0) {
      setTipoIMC('Introduce valores');
      setColor('black');
    }
    if (valor < 18.5) {
      setTipoIMC('Peso insuficiente');
      setColor('green');
    }
    if (valor >= 18.5 && valor <= 25) {
      setTipoIMC('Normopeso');
      setColor('green');
    }
    if (valor >= 25 && valor <= 27) {
      setTipoIMC('Sobrepeso grado I');
    }
    if (valor >= 27 && valor <= 30) {
      setTipoIMC('Sobrepeso grado II (preobesidad)');
      setColor('orange');
    }
    if (valor >= 30 && valor <= 35) {
      setTipoIMC('Obesidad de tipo I');
      setColor('orange');
    }
    if (valor >= 35 && valor <= 40) {
      setTipoIMC('Obesidad de tipo II');
      setColor('orange');
    }
    if (valor >= 40 && valor <= 50) {
      setTipoIMC('Obesidad de tipo III (mórbida)');
      setColor('red');
    }
    if (valor >= 50) {
      setTipoIMC('Obesidad de tipo IV (extrema)');
      setColor('red');
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora IMC</Text>
      <View style={styles.datos}>
        <Text style={styles.text1}>Datos</Text>
        <Text style={styles.text2}>PESO</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={newText => setPeso(newText)} defaultValue={peso} />
        <Text style={styles.text2}>ALTURA</Text>
        <TextInput style={styles.input} keyboardType="numeric" onChangeText={newText => setAltura(newText)} defaultValue={altura}/>
        <TouchableOpacity onPress={calcularIMC} style={styles.button}>
            <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>
        <Text style={{color:'black',marginLeft:15,marginTop:10}}>Resultado</Text>
        <Text style={{color:color,fontSize:15,marginLeft:15,marginBottom:10}}>{tipoIMC}</Text>
      </View>
      <Text style={{color:'grey',marginLeft:10,marginTop:10,fontSize:20}}>Created for 2n DAM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  text:{
    color:'red',
    textAlign:'center',
    fontSize:40,
    padding:20,
    marginTop:20
  },
  text1:{
    color:'red',
    textAlign:'left',
    fontSize:35,
    padding:20
  },
  text2:{
    color:'blue',
    textAlign:'left',
    fontSize:18,
    fontWeight: 'bold',
    marginLeft:15
  },
  datos:{
    backgroundColor:'white',
    marginLeft:10,
    marginRight:10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomColor: 'grey',
    borderLeftColor:'white',
    borderRightColor:'white',
    borderTopColor:'white',
    padding: 10,
    color:'black'
  },
  button:{
    backgroundColor:'white',
    color:'white',
    borderWidth: 1,
    borderColor:'skyblue',
    marginLeft:10,
    marginRight:10,
    borderRadius:5
  },
  buttonText:{
    textAlign:'center',
    fontSize:20,
    color:'skyblue'
  }
});