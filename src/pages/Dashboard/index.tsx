import React from "react";




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
    Transactions, 
    Title,
    TransactionList,
} from './styles';


import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de sites",
        amount: "R$ 12.300,00",
        category: {
            name: 'vendas',
            icon: 'dollar-sign'
        },
        date: "12/5/2000"
    },
    {
        id: '2',
        type: 'negative',
        title: "Lanches Ifood",
        amount: "R$ 210,00",
        category: {
            name: 'Alimentação',
            icon: 'coffee'
        },
        date: "12/5/2000"
    },
    {
        id: '3',
        type: 'negative',
        title: "Cursos",
        amount: "R$ 5.000,00",
        category: {
            name: 'Educação',
            icon: 'shopping-bag'
        },
        date: "12/5/2000"
    },
    

];

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
                    <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Ultima entrada dia 02 de MAIO"
                    />
                    <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Ultima saída dia 03 de abril"
                    />
                    <HighlightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 á 16 de abril"
                    />
                </HighlightCards>

                <Transactions>
                    <Title>Listagem</Title>

                    <TransactionList 
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <TransactionCard data={item}/>}
                    />
                    
                </Transactions>

            </Container>
        </>
    )
}

