import { Store, createStore, compose } from 'redux';
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
// If you use react-router, don't forget to pass in your history type.

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, rootReducer } from './store';

export default function configureStore(): Store<ApplicationState> {
    // create the composing function for our middlewares
    // create the redux-saga middleware

    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const store = createStore(
        rootReducer,
        compose(typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (f: any) => f)
    );

    // Don't forget to run the root saga, and return the store object.
    return store;
}
