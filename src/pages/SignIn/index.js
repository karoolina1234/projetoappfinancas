import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {
  Background, Container,
  Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from './styles'
import { useNavigation } from "@react-navigation/native"
function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Background>
      <Container>
        <Logo source={require('../../assets/img/Logo.png')} />
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
            Acessar
          </SubmitText>
        </SubmitButton>
        <Link onPress={()=>navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  )
}

export default SignIn;