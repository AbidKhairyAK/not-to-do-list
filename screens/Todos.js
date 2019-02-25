import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container, Content, Text, Header, Body, List, ListItem, Left, Right, CheckBox, Fab, Icon, Button
} from 'native-base';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
// import axios from 'axios';

import TodoItem from '../components/TodoItem';
import {allTodos} from '../actions';
// import TryRedux from '../components/TryRedux';
// import {API_URL} from '../constants';

class Todos extends Component
{
  // constructor()
  // {
  //   super();
  //   this.state = {
  //     count: 0,
  //     todos: []
  //   }
  // }

  componentDidMount()
  {
    // const self = this;
    // axios.get(`${API_URL}/todos`).then((result) => {
    //   self.setState({
    //     todos: result.data
    //   })
    // });

    this.props.dispatch(allTodos());
  }

  _keyExtractor = (item, index) => item.id;

  render()
  {
    return (
      <Container>

        <Content>
          <List>
            <FlatList
              data={this.props.todosReducer.todos}
              keyExtractor={this._keyExtractor}
              renderItem={ ({item}) => <TodoItem todo={item}/> }
            />
            {/*this.state.todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/>)*/}
          </List>
        </Content>

        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('TodosCreate')}
        >
          <Icon name="add"/>
        </Fab>

      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
 todosReducer: state.todosReducer
});

export default connect(mapStateToProps)(Todos);
