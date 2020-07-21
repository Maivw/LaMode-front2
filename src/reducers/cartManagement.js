import axios from "../config/axiosConfig";
const ITEM_ADD_TO_CART = "ITEM_ADD_TO_CART";
const ITEM_REMOVED_FROM_CART = "ITEM_REMOVED_FROM_CART";
const SUB_QUANTITY = "SUB_QUANTITY";
const ADD_QUANTITY = "ADD_QUANTITY";

export const addToCart = (product) => (dispatch) => {
	debugger;
	console.log("addddd");
	dispatch({ type: ITEM_ADD_TO_CART, product });
};

export const removeFromCart = (product) => (dispatch) => {
	dispatch({ type: ITEM_REMOVED_FROM_CART, product });
};

export const subQuantity = (product) => async (dispatch) => {
	let products = [];
	const productsJson = window.localStorage.getItem("products");
	if (productsJson) {
		products = JSON.parse(productsJson);
	}

	let newProducts = products.filter(
		(singleProduct) => product.id !== singleProduct.id
	);
	let newProductsJson = JSON.stringify(newProducts);
	window.localStorage.setItem("products", newProductsJson);

	dispatch(subQuantity(product));
};

export const addQuantity = (product) => async (dispatch) => {
	let products = [];
	const productsJson = window.localStorage.getItem("products");
	if (productsJson) {
		products = JSON.parse(productsJson);
	}

	const foundedIndex = products.findIndex((item) => item.id === product.id);
	if (foundedIndex === -1) {
		product.amount = 1;
		products = [...products, product];
	} else {
		products[foundedIndex].amount += 1;
	}

	let newProducts = [...products, product];

	window.localStorage.setItem("products", JSON.stringify(newProducts));
	dispatch(addQuantity(product));
};

const initialState = {};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ITEM_ADD_TO_CART: {
			return {
				...state,
				addedProducts: action.product,
			};
		}

		default:
			return state;
	}
}
