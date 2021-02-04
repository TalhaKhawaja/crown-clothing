import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         dispatch(fetchCollectionsStart());

//         // Promise approach to get collection data
//         collectionRef
//             .get()
//             .then(snapshot => {
//                 const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionSuccess(collectionsMap));
//             })
//             .catch(error => dispatch(fetchCollectionFailure(error.message)));
    
//         // Observable approach to get collection data
//         // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
//         //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         //     updateCollections(collectionsMap);
//         //     this.setState({ loading: false });
//         // });
//     };
// };