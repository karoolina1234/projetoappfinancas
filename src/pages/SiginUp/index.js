import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {
  Background, Container,
  Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth'

function SignUp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(AuthContext);

  function handleSignUp(){
    signUp(email, password, nome);
  }
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
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>
            Cadastrar
          </SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  )
}

export default SignUp;