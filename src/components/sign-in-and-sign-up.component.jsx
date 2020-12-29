import React from 'react';
import '../assets/styles/sign-in-and-sign-up.scss';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';

const SignInAndSignOutPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignOutPage;