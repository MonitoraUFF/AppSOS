import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;

`;
export const ContainerTextoLogin = styled.View`
    flex: 25%;

    justify-content: flex-end;
    align-items: center;
`;
export const TextoLogin = styled.Text`

`;
export const ContainerCaixasTexto = styled.View`
    flex: 75%;

    padding: 20px;
    align-items: center;
`;
export const ContainerCaixasTextoIndividual = styled.View`
    padding: 20px;
`;
export const TextoCaixas = styled.Text`
    

`;
export const CaixaLogin = styled.TextInput`
    height: 25;
    width: 200px;
    border-width: 1px;
`;
export const BotaoLogin = styled.TouchableOpacity`
    justify-content: center;
    align-items: 'center';
    width: 100px;
    height: 40px;
    background-color: gray;
`;
