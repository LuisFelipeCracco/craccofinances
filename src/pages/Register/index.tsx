import React, {useState} from "react";

import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
    
 } from "./styles";

export function Register(){
    const [transactionsType, setTransactionsType] = useState('');

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionsType(type);
    }
    
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Preço"/>
                    <TransactionsTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionsTypeSelect('up')}
                            isActive={transactionsType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionsTypeSelect('down')}
                            isActive={transactionsType === 'down'}
                        />
                    </TransactionsTypes>
                </Fields>
                <Button title="Enviar"/>

            </Form>
            




        </Container>
    );
}