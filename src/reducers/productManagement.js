import axios from "../config/axiosConfig";
const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const CURRENT_PRODUCT = "CURRENT_PRODUCT";
const PROMOTION = "PROMOTION";

export const displayProducts = (products) => ({
	type: DISPLAY_PRODUCTS,
	products,
});
export const displayProductsPromotion = (products) => ({
	type: DISPLAY_PRODUCTS,
	products,
});
export const getCurrentProduct = (currentProduct) => ({
	type: CURRENT_PRODUCT,
	currentProduct,
});

export const getOneProduct = (params) => async (dispatch) => {
	const result = await axios.get(`/products/${params.id}`, params);
	console.log("one", result);
	dispatch(getCurrentProduct());
};

export const getProducts = (params) => async (dispatch) => {
	const result = await axios.get(`/products`, params);
	console.log("twwoo", result.data);
	dispatch(displayProducts(result.data));
};
export const getPromotionProducts = (params) => async (dispatch) => {
	const response = await fetch(`http://localhost:8080/products/promotion`, {
		method: "get",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		const list = await response.json();
		console.log("LIST", list);
		dispatch(displayProducts(list));
	}
};

const initialState = {};
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case DISPLAY_PRODUCTS: {
			console.log("ac", action.products);
			return {
				...state,
				products: action.products,
			};
		}
		case CURRENT_PRODUCT: {
			return {
				...state,
				currentProduct: action.currentProduct,
			};
		}

		default:
			return state;
	}
}
