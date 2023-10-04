import { Text, Image, TouchableOpacity, View } from 'react-native'

import { ImagemBotaoSOS, BotaoSOS, Teste, TextoTeste } from './styles';

export function SOS(){
    return(
        // <>
        //         <BotaoSOS>
        //             <ImagemBotaoSOS source={require('../../../assets/sos.png')}/>
        //     </BotaoSOS>
        // </>
            
        // <Teste>
        //         <TextoTeste>olaaaa</TextoTeste>
        // </Teste>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', width: '100%'}}>
                <TouchableOpacity>
                        <Image style={{resizeMode: 'contain', width:100,height:100}} source={require('../../../assets/sos.png')}/>
                </TouchableOpacity>
        </View>
        
        
    );
}










































































