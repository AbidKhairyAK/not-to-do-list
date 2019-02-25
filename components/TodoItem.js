import React, {Component} from 'react';
import {View} from 'react-native';
import {Body, Left, Right, ListItem, CheckBox, Text, SwipeRow, Button, Icon} from 'native-base';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';

import {API_URL} from '../constants';
import {allTodos} from '../actions';

class TodoItem extends Component
{
  state = {
    isDone: false
  }

  componentDidMount()
  {
    const {todo: {isDone}} = this.props;

    this.setState({isDone: Boolean(isDone)});
  }

  handleDone()
  {
    const {todo: {id}} = this.props;

    this.setState({
      isDone: !this.state.isDone
    })

    axios.patch(`${API_URL}/todos/${id}`, {
      isDone: !this.state.isDone
    })
  }

  async handleDelete(id)
  {
    await axios.delete(`${API_URL}/todos/${id}`);
    this.props.dispatch(allTodos());
  }

  render(){

    const {todo: {id, name}} = this.props;

    return (
      <SwipeRow
        key={id}
        leftOpenValue={0}
        rightOpenValue={-75}
        left={
          <Button success onPress={() => alert('Add')}>
            <Icon active name="add" />
          </Button>
        }
        body={
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10, paddingLeft: 20}}>
              <CheckBox checked={this.state.isDone} onPress={() => this.handleDone()}/>
            </View>
            <View style={{padding: 10}}>
              <Text>{name}</Text>
            </View>
          </View>
        }
        right={
          <Button danger onPress={() => this.handleDelete(id)}>
            <Icon active name="trash" />
          </Button>
        }
      />

    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(TodoItem)
