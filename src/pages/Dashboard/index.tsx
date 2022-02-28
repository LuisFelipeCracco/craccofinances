import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper
} from './styles';



export function Dashboard(){
    return(
        <>
            <Container>
                <Header>
                    <UserWrapper>
                        <UserInfo>
                            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/73305528?v=4' }}/>
                            <User>
                                <UserGreeting>Olá,</UserGreeting>
                                <UserName>Luis Felipe</UserName>
                            </User>
                        </UserInfo>
                    </UserWrapper>
                </Header>
            </Container>
        </>
    )
}

