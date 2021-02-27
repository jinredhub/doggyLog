import * as actionTypes from './actions';

const initialState = {
    dogs: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.ADD_PERSON:
            // add logic to add person
            // return {

            // }
        case actionTypes.REMOVE_PERSON:
            return {

            }

        case actionTypes.ADD_DOG:
            // ev and type will be in action
            console.log('action: ', action);

            const dogData = {
                id: Math.random(),
                name: action.name,
                breed: action.breed,
                birthdate: action.birthdate,
            };

            console.log('reducer state: ', state);

            const dogs = state.dogs.push(dogData);

            return {
                ...state,
                dogs: dogs
            }
    }
    return state;
}

export default reducer;