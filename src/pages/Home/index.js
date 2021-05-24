import React , {useContext} from 'react';
import { View , Text} from 'react-native';

import {AuthContext} from '../../contexts/auth'
const Home = () => {
  const { user } = useContext(AuthContext)
  return(
      <View>
          <Text>Home Page</Text>
          <Text>{user && user.nome}</Text>
      </View>
  )
}

export default Home;