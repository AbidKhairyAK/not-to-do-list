import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './reducers';
import {AppNavigator, middleware} from './navigators';

const middlewares = applyMiddleware(
  promiseMiddleware(),
  logger
);

const store = createStore(AppReducer, middlewares);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;

// Old Beautiful Code

// import {createStackNavigator} from 'react-navigation';
//
// import Todos from './screens/Todos';
// import TodosCreate from './screens/TodosCreate';
//
// const App = createStackNavigator({
//   Todos: {
//     screen: Todos,
//     navigationOptions: {
//       headerTitle: 'Not To Do List'
//     }
//   },
//   TodosCreate: {
//     screen: TodosCreate,
//     navigationOptions: {
//       headerTitle: 'Create Todos'
//     }
//   }
// });
//
// export default App;
