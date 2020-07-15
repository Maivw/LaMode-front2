import axios from "../config/axiosConfig";
const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const CURRENT_PRODUCT = "CURRENT_PRODUCT";
const PRODUCTONSALE = "PRODUCTONSALE";
const PRODUCTBASEONLIST = "PRODUCTBASEONLIST ";

export const displayProducts = (products) => ({
	type: DISPLAY_PRODUCTS,
	products,
});
export const displayProductsOnSale = (products) => ({
	type: PRODUCTONSALE,
	products,
});
export const getCurrentProduct = (currentProduct) => ({
	type: CURRENT_PRODUCT,
	currentProduct,
});
export const productBasedOnList = (products) => ({
	type: PRODUCTBASEONLIST,
	products,
});

export const getOneProduct = (id, params) => async (dispatch) => {
	const result = await axios.get(`/products/${id}`, params);
	console.log("one", result.data.product);
	dispatch(getCurrentProduct(result.data.product));
};

export const getProducts = (params) => async (dispatch) => {
	const result = await axios.get(`/products`, params);
	dispatch(displayProducts(result.data.products));
};

export const getProductBasedOnList = (productListName, params) => async (
	dispatch
) => {
	const result = await axios.get(`/productlist/${productListName}`, params);
	dispatch(productBasedOnList(result.data));
};

export const getProductsOnSale = (promotion, params) => async (dispatch) => {
	debugger;
	const result = await axios.get(`products/promotion/${promotion}`, params);
	console.log("ProductsonSale", result.data);
	dispatch(displayProductsOnSale(result.data));
};

// export const getProductsOnSale = (promotion, productListId, params) => async (
// 	dispatch
// ) => {
// 	debugger;
// 	const result = await axios.get(
// 		`products/promotion/${productListId}/${promotion}`,
// 		params
// 	);
// 	console.log("ProductsonSale", result.data);
// 	dispatch(displayProductsOnSale(result.data));
// };

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

		case PRODUCTBASEONLIST: {
			return {
				...state,
				...action.products,
			};
		}
		case PRODUCTONSALE: {
			return {
				...state,
				...action.products,
			};
		}

		default:
			return state;
	}
}
