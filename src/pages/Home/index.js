import React, { useContext, useEffect } from 'react';
import firebase from '../../services/firebaseConnection'
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
import { Alert } from 'react-native'
import { format, isPast } from 'date-fns'
import { useState } from 'react/cjs/react.development';
const Home = () => {
  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)
  const { user } = useContext(AuthContext)
  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo); //exibe o saldo
      });
      await firebase.database().ref('historico') //exibe o historico ordenado pela data
        .child(uid)
        .orderByChild('date').equalTo(format(new Date(), 'dd/MM/yy'))
        .limitToLast(10).on('value', (snapshot) => {
          setHistorico([]);
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            }
            setHistorico(oldarray => [...oldarray, list].reverse())
          })
        })
    }
    loadList()
  }, [])

  function handleDelete(data) {
    Alert.alert(
      'Cuidado atenção!',
      `Você deseja excluir ${data.tipo} - valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )

  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico')
      .child(uid).child(data.key).remove()
      .then(async () => {
        let saldoAtual = saldo
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
        await firebase.database().ref('users').child(uid)
          .child('saldo').set(saldoAtual)
      })
      .catch((error) => {
        console.log(error)
      })

  }


  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R${saldo.toFixed(2)}</Saldo>
      </Container>
      <Title>movimentações</Title>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} deleteItem={handleDelete} />)} />
    </Background>
  )
}

export default Home;