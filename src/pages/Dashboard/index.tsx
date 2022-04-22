import React from "react";
import { MaterialIcons, Feather, } from '@expo/vector-icons';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon, 
    HighlightCards,
} from './styles';
import { HighlightCard } from "../../components/HighlightCard";



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
                        <Icon name="power"/>
                    </UserWrapper>
                </Header>
                <HighlightCards
                    
                >
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                </HighlightCards>
            </Container>
        </>
    )
}

