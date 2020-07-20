import React from 'react';
import {BrowserRouter , Switch ,Route} from 'react-router-dom';
import Home from './components/Home'
import Input20 from './components/Input20'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/20" component={Input20}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
