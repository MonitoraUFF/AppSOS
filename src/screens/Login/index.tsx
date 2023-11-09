import { Container, TextoLogin, CaixaLogin, ContainerCaixasTexto, BotaoLogin, ContainerTextoLogin, ContainerCaixasTextoIndividual, TextoCaixas } from "./styles";
import { useState } from 'react';
import { Text } from "react-native";
export function Login(){
    return(
        <Container>
            <ContainerTextoLogin>
                <TextoLogin>LOGIN</TextoLogin>
                
            </ContainerTextoLogin>
            <ContainerCaixasTexto>
                <ContainerCaixasTextoIndividual>
                    <TextoCaixas>Login</TextoCaixas>
                    <CaixaLogin/>
                </ContainerCaixasTextoIndividual>
                <ContainerCaixasTextoIndividual>
                    <TextoCaixas>Senha</TextoCaixas>
                    <CaixaLogin/>
                </ContainerCaixasTextoIndividual>
            <BotaoLogin><Text>Login</Text></BotaoLogin>    
            </ContainerCaixasTexto>
        </Container>
    );
}
