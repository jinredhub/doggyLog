import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import addNewDogReducer from './store/reducers/addNewDog';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD1sE9QkYWZDx-vY0mEgR5ndTlOMqPToeY",
    authDomain: "newtestdb-b0914.firebaseapp.com",
    databaseURL: "https://newtestdb-b0914.firebaseio.com",
    projectId: "newtestdb-b0914",
    storageBucket: "newtestdb-b0914.appspot.com",
    messagingSenderId: "541529727476",
    appId: "1:541529727476:web:6b0e4d96d5340152c659a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine reducers here
const rootReducer = combineReducers({
    addNewDogRedu: addNewDogReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
//   <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>,
//   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
