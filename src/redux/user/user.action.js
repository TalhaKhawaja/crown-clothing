import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

// Google Sign In
export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

// Email Sign In
export const emailSignInStart = (emaiAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emaiAndPassword
});
