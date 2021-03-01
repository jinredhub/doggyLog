import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newDog: {},
    dogData: {},
}

const reducer = (state = initialState, action) =>{
    switch (action.type){

        case actionTypes.ADD_DOG: {
            // console.log('action: ', action);
            // console.log('reducer state: ', state);

            const newDogData = {
                id: Math.random(),
                name: action.name,
                breed: action.breed,
                birthdate: action.birthdate,
            };

            return {
                ...state,
                newDog: newDogData,
                errorLoadingDb: false,
                dbLoaded: false,
                submitted: false,
            }
        }

        case actionTypes.ADD_DOG_BASIC_INFO:{
            const newDog = {...state.newDog};
            newDog.date = action.date;
            newDog.weight = action.weight;

            return {
                ...state,
                newDog: newDog
            }
        }

        case actionTypes.FORM_SUBMITTED_SUCCESS: {

            return {
                ...state,
                submitted: true,
                newDog: {}
            }
        }

        // case actionTypes.FETCH_DOG_DATA_START: {
        //     return {
        //         ...state,
        //         loading: true,
        //     }
        // }

        case actionTypes.FETCH_DOG_DATA_SUCCESS: {
            return {
                ...state,
                dogData: action.dogData,
                errorLoadingDb: false,
                dbLoaded: true,
            }
        }

        case actionTypes.FETCH_DOG_DATA_FAILED: {
            return {
                ...state,
                errorLoadingDb: true,
                dbLoaded: true,
            }
        }

        default: 
            return state;
    }
}

export default reducer;