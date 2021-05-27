import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList';
import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  List
} from './styles'
import { useState } from 'react/cjs/react.development';
const Home = () => {
  const [historico, setHistorico] = useState([
    {key:'1', tipo:'receita', valor:100},
    {key:'2', tipo:'despesa', valor:101},
    {key:'3', tipo:'receita', valor:102},
  ])
  const { user } = useContext(AuthContext)
  return (
    <Background>
      <Header />
      <Container>
        <Nome>Fulano</Nome>
        <Saldo>100</Saldo>
      </Container>
      <Title>movimentações</Title>
      <List
      showVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={item => item.key}
      renderItem={({item})=>(<HistoricoList data={item}/>)}/>
    </Background>
  )
}

export default Home;