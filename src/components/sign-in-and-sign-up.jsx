import React from 'react';
import '../assets/styles/sign-in-and-sign-up.scss';
import SignIn from '../components/sign-in';
import SignUp from '../components/sign-up';

const SignInAndSignOutPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignOutPage;