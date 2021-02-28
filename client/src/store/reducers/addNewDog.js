import * as actionTypes from '../actions/actionTypes';

const initialState = {
    newDog: {},
    dogData: [],
    errorLoadingDb: false,
    loading: false,
}

const reducer = (state = initialState, action) =>{
    switch (action.type){

        case actionTypes.ADD_DOG: {
            // ev and type will be in action
            // console.log('action: ', action);

            const dogData = {
                id: Math.random(),
                name: action.name,
                breed: action.breed,
                birthdate: action.birthdate,
            };

            // console.log('reducer state: ', state);

            return {
                ...state,
                newDog: dogData
            }
        }

        case actionTypes.ADD_DOG_BASIC_INFO:{
            const newDog = {...state.newDog};
            newDog.date = action.date;
            newDog.wegith = action.weight;

            return {
                ...state,
                newDog: newDog
            }
        }

        case actionTypes.EMPTY_NEW_DOG_OBJECT: {

            return {
                ...state,
                newDog: {}
            }
        }

        case actionTypes.FETCH_DOG_DATA_START: {
            return {
                ...state,
                loading: true,
            }
        }

        case actionTypes.FETCH_DOG_DATA_SUCCESS: {
            return {
                ...state,
                dogData: action.dogData,
                errorLoadingDb: false,
                loading: false,
            }
        }

        case actionTypes.FETCH_DOG_DATA_FAILED: {
            return {
                ...state,
                errorLoadingDb: true,
                loading: false,
            }
        }

        default: 
            return state;
    }
}

export default reducer;