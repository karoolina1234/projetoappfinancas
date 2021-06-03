import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import {
  Container,
  Tipo,
  IconView,
  TipoText,
  ValorText
} from './styles'
import {TouchableWithoutFeedback} from 'react-native'
function HistoricoList({data, deleteItem}) {
  return (
  <TouchableWithoutFeedback onLongPress={()=>deleteItem(data)}>
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon name={data.tipo === 'despesa'? 'arrow-down': 'arrow-up'}
            color="#FFF" 
            size={20} />
          <TipoText>
            {data.tipo}
          </TipoText>
        </IconView>
      </Tipo>
      <ValorText>{data.valor} - {data.date}</ValorText>
    </Container>
  </TouchableWithoutFeedback>
    
  )
}

export default HistoricoList;