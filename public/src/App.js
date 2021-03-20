import { Route, Switch } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import ROUTES from './constants/routes';
import './assets/App.css';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home';
import {LogIn} from './components/LogIn';
import Footer from './components/Footer';
import {MyProfile} from './components/MyProfile';
import {MyRecipes} from './components/MyRecipes';
import {AddRecipe} from './components/AddRecipe';
import {GetByCategory} from './components/GetByCategory';
import {UpdateRecipe} from './components/UpdateRecipe';
import {PrivateRoute} from './helpers/PrivateRoute';


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
            <Route path={ROUTES.CATEGORY} component={GetByCategory} />
            <Route path='/create-account' component={CreateAccount} />
            <Route path='/login' component={LogIn} />
            <PrivateRoute path='/my-profile' component={MyProfile} />
            <PrivateRoute path='/my-recipes' component={MyRecipes} />
            <PrivateRoute path='/add-recipe' component={AddRecipe} />
            <PrivateRoute path='/update-recipe' component={UpdateRecipe} />
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
