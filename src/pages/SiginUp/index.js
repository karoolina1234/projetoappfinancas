import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {
  Background, Container,
  Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from '../SignIn/styles'
function SignIn() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText = {(text) => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText = {(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text)=> setPassword(text)}
          />
        </AreaInput>
        <SubmitButton>
          <SubmitText>
            Cadastrar
          </SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}

export default SignIn;