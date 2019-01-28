import React, { Component } from 'react';
import Router from './router/Router';
import {Provider} from 'mobx-react'
import Store from './store/Store';
import './App.css';
const store = new Store();
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router />
                {/* hah  */}
            </div>
        </Provider>

    );
  }
}

export default App;
