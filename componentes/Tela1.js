import React from 'react';
import {View, Text} from 'react-native';//componentes do react-native
import Estilo from '../../styles/Style';
// View =  espaço na tela 
//estrutura basica
class Tela1 extends React.Component {//criou uma classe chamada tela 1 eé um componente do react
	//Extends -> herança = pegando as caracteristicasdo React.Component
    render(){//render e uma funçao. so estou chamando ela
        return (//retornar tudo oq esta dentro dele
            <View style={Estilo.container}>
                <Text>Tela 1 - Exemplo!</Text>
            </View>
        )
    }
}

export default Tela1;//registrando a tela 1.