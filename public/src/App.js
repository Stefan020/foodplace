import { Route, Switch } from 'react-router-dom';
import {Navbar} from './components/Navbar';

import './assets/App.css';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import {LogIn} from './components/LogIn';
import Footer from './components/Footer';
import {MyProfile} from './components/MyProfile';
import {MyRecipes} from './components/MyRecipes';
import {AddRecipe} from './components/AddRecipe';

const App = () => {
  return (
    <div className="app">
      <div className="without">
        <div className='app-nav'>
        <Navbar/>
        </div>
        <div className='switch'>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/create-account' component={CreateAccount} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/my-profile' component={MyProfile} />
            <Route exact path='/my-recipes' component={MyRecipes} />
            <Route exact path='/add-recipe' component={AddRecipe} />
          </Switch>
          </div>
        </div>
        <div className='app-footer'>
        <Footer />
        </div>
    </div>
  );
}

export default App;
