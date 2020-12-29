import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './components/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header.component';
import SignInAndSignOutPage from './components/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribleFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribleFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>)  : (<SignInAndSignOutPage/>)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
