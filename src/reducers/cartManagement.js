export const ADDING_TO_CART = "la_mode/cartActions/ADDING_TO_CART";
export const REMOVING_PRODUCT = "la_mode/cartActions/REMOVING_PRODUCT";
export const SUB_QUANTITY = "la_mode/cartActions/SUB_QUANTITY";
export const ADD_QUANTITY = "la_mode/cartActions/ADD_QUANTITY";
export const ADD_SHIPPING = "la_mode/cartActions/ADD_SHIPPING";

export const addingToCart = (product) => ({ type: ADDING_TO_CART, product });
export const removingProduct = (product) => ({
	type: REMOVING_PRODUCT,
	product,
});
export const subQuantity = (product) => ({ type: SUB_QUANTITY, product });
export const addQuantity = (product) => ({ type: ADD_QUANTITY, product });

export const addingToShoppingCart = (product) => async (dispatch) => {
	let products = [];
	const productsJson = window.localStorage.getItem("products");
	if (productsJson) {
		products = JSON.parse(productsJson);
	}
	console.log("PRODUCT", products);

	let newProducts = [...products, product];

	window.localStorage.setItem("products", JSON.stringify(newProducts));
	dispatch(addingToCart(product));
};

export const subQuantityFromShoppingCart = (product) => async (dispatch) => {
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

export const addQuantityFromShoppingCart = (product) => async (dispatch) => {
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

export const removingFromShoppingCart = (product) => async (dispatch) => {
	let products = [];
	let productsJson = window.localStorage.getItem("products");
	if (productsJson) {
		products = JSON.parse(productsJson);
	}

	let newProducts = products.filter(
		(singleProduct) => product.id !== singleProduct.id
	);
	let newProductsJson = JSON.stringify(newProducts);
	window.localStorage.setItem("products", newProductsJson);

	dispatch(removingProduct(product));
};

export default function reducer(state = [], action) {
	switch (action.type) {
		case ADDING_TO_CART: {
			const foundedIndex = state.findIndex(
				(item) => item.id === action.product.id
			);
			if (foundedIndex === -1) {
				action.product.amount = 1;
				return [...state, action.product];
			} else {
				const newState = [...state];
				newState[foundedIndex].amount += 1;
				return newState;
			}
		}
		case REMOVING_PRODUCT: {
			// const foundedIndex = state.findIndex(
			// 	(item) => item.id === action.product.id
			// );
			const newState = [...state];
			console.log("newState", newState);
			console.log("testttt", action.product);
			const dataRemoved = newState.filter(
				(item) => item.id !== action.product.id
			);
			console.log("dataRemoved", dataRemoved);
			return dataRemoved;
		}
		case SUB_QUANTITY: {
			const foundedIndex = state.findIndex(
				(item) => item.id === action.product.id
			);
			const newState = [...state];
			const removedProduct = newState[foundedIndex];
			removedProduct.amount--;
			if (removedProduct.amount === 0) {
				return newState.filter((item) => item.id !== action.product.id);
			}
			return newState;
		}
		case ADD_QUANTITY: {
			const foundedIndex = state.findIndex(
				(item) => item.id === action.product.id
			);
			const newState = [...state];
			const product = newState[foundedIndex];
			product.amount++;
			return newState;
		}
		default:
			return state;
	}
}
