import { Container, TextoLogin, CaixaLogin, ContainerCaixasTexto, BotaoLogin, ContainerTextoLogin, ContainerCaixasTextoIndividual, TextoCaixas } from "./styles";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    function navigateToSecond(tokenRecebido:string) {
        navigation.navigate("SOS", {tokenRecebido});
    }
    const data = {
        username: username,
        password: password
    }
    const postLogin = async () => {
        try {
            const response = await axios.post('http://192.168.10.17:5000/Login', data, {
                headers: {
                'App-Token': '22AFPlKmP6HoOZD38RL2GBJDvkyn9wAfJMDouJ3t'
            }});
            const tokenRecebido = response.data;
            navigateToSecond(tokenRecebido);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return(
        <Container>
            <ContainerTextoLogin>
                <TextoLogin>LOGIN</TextoLogin>
            </ContainerTextoLogin>
            <ContainerCaixasTexto>
                <ContainerCaixasTextoIndividual>
                    <TextoCaixas>Login</TextoCaixas>
                    <CaixaLogin onChangeText={(text: string) => setUsername(text)}/>
                </ContainerCaixasTextoIndividual>
                <ContainerCaixasTextoIndividual>
                    <TextoCaixas>Senha</TextoCaixas>
                    <CaixaLogin secureTextEntry={true} onChangeText={(text: string) => setPassword(text)}/>
                </ContainerCaixasTextoIndividual>
            <BotaoLogin onPress={postLogin}><Text>Login</Text></BotaoLogin>    
            </ContainerCaixasTexto>
        </Container>
    );
}
