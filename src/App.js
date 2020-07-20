import React from 'react';
import {BrowserRouter , Switch ,Route} from 'react-router-dom';
import Home from './components/Home'
import Input20 from './components/Inputs/Input20'
import Input1 from './components/Inputs/Input1'
import Input2 from './components/Inputs/Input2'
import Input3 from './components/Inputs/Input3'
import Input4 from './components/Inputs/Input4'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path="/1" component={Input1}/>
        <Route path="/2" component={Input2}/>
        <Route path="/3" component={Input3}/>
        <Route path="/4" component={Input4}/>

        <Route path="/20" component={Input20}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
