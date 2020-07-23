import axios from "../config/axiosConfig";
const ITEM_ADD_TO_CART = "ITEM_ADD_TO_CART";
const ITEM_REMOVED_FROM_CART = "ITEM_REMOVED_FROM_CART";
const SUB_QUANTITY = "SUB_QUANTITY";
const ADD_QUANTITY = "ADD_QUANTITY";

export const addToCart = (product, quantity) => (dispatch) => {
	dispatch({
		type: ITEM_ADD_TO_CART,
		product,
		quantity,
	});
};

export const removeFromCart = (product) => (dispatch) => {
	dispatch({ type: ITEM_REMOVED_FROM_CART, product });
};

export const subQuantity = (product) => async (dispatch) => {
	dispatch({
		type: SUB_QUANTITY,
		product,
	});
};

export const addQuantity = (product) => async (dispatch) => {
	dispatch({
		type: ADD_QUANTITY,
		product,
	});
};

const initialState = {
	products: [],
};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ITEM_ADD_TO_CART: {
			// console.log("state", state.products);
			// const foundIndex = state.products.findIndex(
			// 	(item) => item.id === action.product.id
			// );

			// console.log("f", foundIndex);

			// if (foundIndex === -1) {
			// 	const newState = state.products.slice();
			// 	action.product.quantity = 1;
			// 	const products = newState.push(action.product);
			// 	return products;
			// } else {
			// 	const newState = state.products.slice();
			// 	newState[foundIndex].quantity += 1;
			// 	const products = newState;
			// 	return products;
			// }
			console.log("ggg", state);
			//{
			//product: {id:1, name: 'lv1', ..},
			// quantity: 5
			//}
			let newState = [...state.products];
			const product = newState.find((p) => p.id === action.product.id);

			if (!product) {
				action.product.count = action.quantity;

				newState.push(action.product);
			} else {
				newState = newState.map((e) => {
					if (e.id === action.product.id) {
						e.count += action.quantity;
						return e;
					}
					return e;
				});
			}
			console.log("new", newState);
			return {
				...state,
				products: [...newState],
			};
		}
		case ITEM_REMOVED_FROM_CART: {
			const newState = [...state.products];
			const removedProduct = newState.filter((p) => p.id !== action.product.id);
			return {
				...state,
				products: [...removedProduct],
			};
		}
		case ADD_QUANTITY: {
			let newState = [...state.products];
			const product = newState.filter((p) => p.id === action.product.id);

			if (!product) {
				action.product.count = 1;
				newState.push(action.product);
			} else {
				newState = newState.map((p) => {
					if (p.id === action.product.id) {
						p.count++;
						return p;
					}
					return p;
				});
			}

			return {
				...state,
				products: [...newState],
			};
		}
		case SUB_QUANTITY: {
			console.log("fst", state);
			let newState = [...state.products];
			const product = newState.filter((p) => p.id === action.product.id);
			console.log("mmm", product);
			if (action.product.count === 1) {
				const removedProduct = newState.filter(
					(p) => p.id !== action.product.id
				);
				return {
					...state,
					products: [...removedProduct],
				};
			} else if (action.product.count < 2) {
				return {
					...state,
					products: [...newState],
				};
			} else {
				newState = newState.map((p) => {
					if (p.id === action.product.id) {
						p.count--;
						return p;
					}
					return p;
				});
			}

			return {
				...state,
				products: [...newState],
			};
		}

		default:
			return state;
	}
}
