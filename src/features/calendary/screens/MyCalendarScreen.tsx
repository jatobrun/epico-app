import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from 'react-native-calendars';
import { Text } from 'react-native-paper';
import { PageTitle } from '../../shared/components/PageTitle';



interface State {
  items?: AgendaSchedule;
}



export const MyCalendarScreen = () => {

  const myState: State = {
    items: undefined,
  };

  const [ state , setState ] = useState( myState );
  
  const loadItems = ( day: DateData ) => {
    const items = state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setState({
        items: newItems
      });
    }, 1000);
  }

  const renderItem = ( reservation: AgendaEntry, isFirst: boolean ) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
       
        style={[styles.item, {height: reservation.height}]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  }

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  }

  const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  return (
    <View>
        <PageTitle title="Calendario Actividades" />
        <Agenda
          items={ state.items }
          loadItemsForMonth={ loadItems }
          selected={'2022-04-20'}
          renderItem={ renderItem }
          renderEmptyDate={ renderEmptyDate }
          rowHasChanged={ rowHasChanged }
          showClosingKnob={true}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});