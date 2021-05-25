import React ,{ useContext} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles'
import {AuthContext} from '../../contexts/auth'

const Profile = () => {
  const navigation = useNavigation()
  const { user, signOut } = useContext(AuthContext)

  return (
    <Container>
      <Nome>
      {user.nome}
     </Nome>
      <NewLink onPress={()=> navigation.navigate('Registar')}>
        <NewText>Registrar gastos</NewText>
      </NewLink>
      <Logout  onPress={()=>signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  )
}

export default Profile;