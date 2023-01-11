import { CATEGORIES_ACTION_TYPES } from './category.types';
import {all, call, put, takeLatest} from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess,fetchCategoriesFailure } from './category.action';

export function* fetchCategoriesStart() {
    try {
      const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
      yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      yield put(fetchCategoriesFailure(error));
    }
  ;
};

export function* onFetchCategories(){
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesStart
  )
}

export function* createCategorySaga(){
  yield all([call(onFetchCategories)])
}