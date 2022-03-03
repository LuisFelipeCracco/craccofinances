import styled, { ThemeConsumer } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.attention};

    width: ${RFValue(300)}px;
    border-radius: 5px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    margin-right: 16px;
    height: 300px;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)};
    color: ${({ theme }) => theme.colors.text_dark};
`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(40)};
`;
export const Footer = styled.View`
    
`;
export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({ theme }) => theme.colors.text_dark};
    margin-top: 38px;
`;
export const LastTransaction = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)};
    color: ${({ theme }) => theme.colors.text};
`;