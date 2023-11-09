import { Text, Image, TouchableOpacity, View } from 'react-native'

import { Container, Imagem } from './styles';

export function SOS(){
    return(
        <Container>
                <TouchableOpacity>
                        <Imagem source={require('../../../assets/sos.png')}/>
                </TouchableOpacity>
        </Container> 
    );
}










































































