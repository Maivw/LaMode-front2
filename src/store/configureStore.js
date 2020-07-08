import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or whatever storage you are using
import { PersistGate } from "redux-persist/es/integration/react";

import authentication from "../reducers/authentication";
import cartManagement from "../reducers/cartManagement";
import orderManagement from "../reducers/orderManagement";
import productManagement from "../reducers/productManagement";

const persistConfig = {
	key: "root",
	storage,
	// perist
	// whitelist: [
	//   'accountReducer'
	// ],
	// not persist
	blacklist: [
		// 'user'
	],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	authentication,
	cartManagement,
	orderManagement,
	productManagement,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = (initialState) => {
	return createStore(
		persistedReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;
