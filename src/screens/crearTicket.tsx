import React, { useState, useRef } from 'react';
import { View, Alert } from 'react-native';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from 'react-native-paper';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const crearTicket = () => {
  const [inputVal, setInputVal] = useState('test');
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <Provider>
      <View>
        <Button onPress={() => setIsDialogVisible(true)}>Show Dialog</Button>
        <Portal>
          <Dialog
            visible={isDialogVisible}
            onDismiss={() => setIsDialogVisible(false)}>
            <Dialog.Title>Username</Dialog.Title>
            <Dialog.Content>
              <TextInput
                value={inputVal}
                onChangeText={text => setInputVal(text)}
              />
              <TextInput
                value={inputVal}
                onChangeText={text => setInputVal(text)}
              />
              <TextInput
                value={inputVal}
                onChangeText={text => setInputVal(text)}
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setIsDialogVisible(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

export default crearTicket;
