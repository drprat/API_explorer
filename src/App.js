import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

import BaseRouter from './routes';
import BaseLayout from './container/Layout';

class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <BaseLayout>
      <BaseRouter />
      </BaseLayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
