import React from 'react';
import { View , Text, Platform} from 'react-native';
import {Container , Header } from './style';
import { useState } from 'react/cjs/react.development';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({date, onChange, onClose}) => {
    const [dateNow, setDateNow] = useState(new Date(date))
  return (
      <Container>
          {Platform.OS == 'ios' &&(
              <Header>
                  <TouchableOpacity onPress={onClose}>
                      <Text>Fechar</Text>
                  </TouchableOpacity>
              </Header>
          )}
          <DateTimePicker
          value={dateNow}
          mode="date"
          display="default"
          onChange={(e, d)=>{
              const currentDate = d || dateNow;
              setDateNow(currentDate);
              onChange(currentDate);
          }}
          style={{backgroundColor: 'white'}}
          />
      </Container>
  )
}

export default DatePicker;