import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header.component';
import SignInAndSignOutPage from './components/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribleFromAuth = null;
  
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribleFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignOutPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
