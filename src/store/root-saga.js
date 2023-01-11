import {all,call} from 'redux-saga/effects';
import { createCategorySaga } from './categories/category.saga'
import { userSaga } from './user/user.saga';

export  function* rootSaga(){

    yield all([call(createCategorySaga), call(userSaga)])
}