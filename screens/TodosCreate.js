import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';
import axios from 'axios';
import {connect} from 'react-redux';

import {API_URL} from '../constants';
import {allTodos} from '../actions';

class TodosCreate extends Component
{
  constructor() {
    super();
    this.state = {
      isReady: false,
      text: ""
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  handleSubmit(){
    const text = this.state.text;
    const {goBack} = this.props.navigation;

    if (text) {
      axios.post(`${API_URL}/todos`,{
        name: text
      }).then((result) => {
        this.props.dispatch(allTodos());
        goBack();
      })
    } else {
      alert('Please fill the form');
    }
  }

  render(){
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel style={{marginRight: 15}}>
              <Label>Not Todo</Label>
              <Input onChangeText={(text) => this.setState({text})}/>
            </Item>
          </Form>
        </Content>
        <Button full primary onPress={() => this.handleSubmit()} style={styles.btnFooter} >
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(TodosCreate);

const styles = StyleSheet.create({
  btnFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30,
    paddingTop: 30
  }
})
