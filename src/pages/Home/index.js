import React , {useContext} from 'react';
import { View , Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/auth'
const Home = () => {
  const { user, signOut } = useContext(AuthContext)
  return(
      <View>
          <Text>Home Page</Text>
          <Text>{user && user.nome}</Text>
          <Button
          title="Sair da conta"
          onPress={()=>signOut()}/>
      </View>
  )
}

export default Home;