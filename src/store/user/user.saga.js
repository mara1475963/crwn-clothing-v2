import {all,call, put,takeLatest} from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase/firebase.utils'
import { signInFail, signInSuccess, signOutFail, signOutSuccess, signUpFail, signUpSuccess } from './user.action'


export function* getUserSnapshot(userAuth, additionalDetails){
    try{
        const snapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSuccess({id:snapshot.id, ...snapshot.data()}))
    }catch(e){
        yield(put(signInFail(e)))
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getUserSnapshot,userAuth)
    }catch(e){
        yield(put(signInFail(e)))
    }
}

export function* singInWithGoogle(){
    try{
        const {user} = yield call(signInWithGooglePopup)
      
        yield call(getUserSnapshot, user)
    }catch(e){
        yield(put(signInFail(e)))
    }
}

export function* singInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield call(signInAuthUserWithEmailAndPassword,email,password) 
        yield call(getUserSnapshot, user)
    }catch(e){
        yield(put(signInFail(e)))
    }
}

export function* signUp({payload:{email,password, displayName}}){
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);  
        yield  put(signUpSuccess(user, { displayName }));

      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
         yield put(signUpFail(new Error('Cannot create user, email already in use')))
        } else {
          yield put(error);
        }
      }
}

export function* signOut(){
    try{
         yield call(signOutUser)
         yield put(signOutSuccess())
    }catch(e){
        yield put(signOutFail(e))
    }
}

export function* signInAfterSignUp({payload:{user,details}}){
    yield call(getUserSnapshot, user,details)
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, singInWithGoogle)
}
export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, singInWithEmail)
}

export function* onUserSignUp(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOut(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSaga(){
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onUserSignUp), call(onSignUpSuccess), call(onSignOut)])
}