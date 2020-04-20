/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);

    console.log('-----'+selectedDate);

    if(showDateTime) {
      setShow(false);
      showMode('time');
      setShowDateTime(false);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };

  const showDateAndTimePicker = () => {
    showMode('date');
    setShowDateTime(true);
  };

  return (
    <View>
      <View>
        <Button onPress={showDatePicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimePicker} title="Show time picker!" />
      </View>
      <View>
        <Button onPress={showDateAndTimePicker} title="Show date and time picker!" />
      </View>
      <Text>{date.toString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default App;
