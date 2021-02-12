import { Route, Switch } from 'react-router-dom';
import {Navbar} from './components/Navbar';

import './assets/App.css';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <div className='app-nav'>
      <Navbar/>
      </div>
      <div className='switch'>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path='/create-account' component={CreateAccount} />
          <Route path='/login' component={LogIn} />
        </Switch>
        </div>
        <div className='app-footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
