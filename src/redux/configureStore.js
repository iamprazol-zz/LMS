// eslint-disable-next-line import/no-unresolved
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// eslint-disable-next-line import/no-unresolved
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialStore) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ADD SUPPORT FOR rEDUX DEV TOOLS
	return createStore(rootReducer, initialStore, applyMiddleware(reduxImmutableStateInvariant));
}