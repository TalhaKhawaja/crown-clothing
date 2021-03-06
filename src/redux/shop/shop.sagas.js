import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.action';

export function* fetchCollectionsAysnc() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAysnc)
}