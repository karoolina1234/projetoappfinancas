import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {
  Background, Container,
  Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText
} from './styles'
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from '../../contexts/auth'

function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const { user } = useContext(AuthContext)
  
  // function handleLogin(){
  //   console.log(user.nome)
  // }
  
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
        <SubmitButton >
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