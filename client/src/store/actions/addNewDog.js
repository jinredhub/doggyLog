import * as actionTypes from './actionTypes';
import firebase from 'firebase';

// actionCreators
export const addDog = (name, breed, birthdate) =>{
    return {
        type: actionTypes.ADD_DOG,
        name: name,
        breed: breed,
        birthdate,
    }
}

export const addDogBasicInfo = (weight, date) =>{
    return {
        type: actionTypes.ADD_DOG_BASIC_INFO,
        weight: weight,
        date: date,
    }
}

export const addDogBehavioralThenPost = (behave, dietary, newDogObj) =>{
    newDogObj.behave = behave;
    newDogObj.dietary = dietary;

    return dispatch => {
        // post data
        firebase.database().ref('myDogData').set({
            ...newDogObj
        }, function(err){
            if(err){
                console.log('err', err);
            }
            else{
                console.log('successed');
                dispatch(formSubmittedSuccess());
            }
        });
    }
}

export const formSubmittedSuccess = () =>{
    return {
        type: actionTypes.FORM_SUBMITTED_SUCCESS,
    }
}

export const getDogDataFromDb = () =>{
    return dispatch  => {
        // for loading icon
        // dispatch(fetchDogDataStart());

        // fetch data
        const ref = firebase.database().ref();
        ref.on('value', snap =>{
            console.log('snap: ', snap.val().myDogData);
            dispatch(fetchDogDataSuccess(snap.val().myDogData));
        }, err =>{
            console.log('err: ', err);
            dispatch(fetchDogDataFailed());
        });
    }
}

// export const fetchDogDataStart = () =>{
//     return {
//         type: actionTypes.FETCH_DOG_DATA_START,
//     }
// }

export const fetchDogDataSuccess = (dogData) =>{
    return {
        type: actionTypes.FETCH_DOG_DATA_SUCCESS,
        dogData: dogData,
    }
}

export const fetchDogDataFailed = () =>{
    return {
        type: actionTypes.FETCH_DOG_DATA_FAILED
    }
}