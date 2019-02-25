import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Abid</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// ============================= V2 ==============================

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component {

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text>Header</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <View style={styles.listItemBox}>
                <Text>#</Text>
              </View>
              <View style={styles.listItemText}>
                <Text>First item</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#D0D0D0',
    paddingTop: 30,
    flex: 0.5,
    alignItems: 'center'
  },
  body: {
    flex: 5
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#EEE'
  },
  listItemBox: {
    flex: 1,
  },
  listItemText: {
    flex: 9,
  }
});

// ============================ V3 =========================

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container, Content, Text, Header, Body, List, ListItem, Left, Right, CheckBox
} from 'native-base';

import TodoItem from './components/TodoItem';

export default class App extends Component {

  todos = [
    {
      id: '1',
      todo: 'First not to do list'
    },
    {
      id: '2',
      todo: 'Second not to do list'
    },
    {
      id: '3',
      todo: 'Third not to do list'
    },
  ];

  render(){
    return (
      <Container>

        <Header>
          <Body>
            <Text style={styles.header}>Not To Do List</Text>
          </Body>
        </Header>

        <Content>
          <List>
            {this.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>)}
          </List>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#EEE',
    fontSize: 20,
  }
});
