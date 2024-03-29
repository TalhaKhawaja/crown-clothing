import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header.component';
import SignInAndSignOutPage from './components/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unsubscribleFromAuth = null;

  componentDidMount() {

    // this.unsubscribleFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    // });
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
          <Route exact path='/checkout' component={CheckOutPage}></Route>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOutPage />)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
