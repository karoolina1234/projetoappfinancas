import React from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useState } from 'react/cjs/react.development';
import Header from '../../components/Header'
import Picker from '../../components/Picker'
import {Background,Input, SubmitButton,SubmitText} from './styles'
const New = () => {
  const [valor, setValor] =  useState('');
  const [tipo, setTipo] =  useState('receita');
    return (
      // essa função chamada no TouchableWithoutFeedback é para fechar o teclado quando clicar fora
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
         <Background>
            <Header />
            <SafeAreaView style={{alignItems:'center'}}>
                <Input
                placeholder="valor desejado"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={()=>Keyboard.dismiss()}
                value={valor}
                onChangeText={(text)=> setValor(text)}
                />
                <Picker
                onChange={setTipo} tipo={tipo}/>
                <SubmitButton>
                    <SubmitText>Registar</SubmitText>
                </SubmitButton>
            </SafeAreaView>
        </Background>
      </TouchableWithoutFeedback>
       
  )

}

export default New;