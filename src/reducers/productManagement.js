import axios from "../config/axiosConfig";
const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const CURRENT_PRODUCT = "CURRENT_PRODUCT";
const PRODUCTONSALE = "PRODUCTONSALE";
const PRODUCTBASEONLIST = "PRODUCTBASEONLIST ";
const FILTER_PRODUCTS_BY_SIZE = "FILTER_PRODUCTS_BY_SIZE";
const ORDER_PRODUCTS_BY_PRICE = "ORDER_PRODUCTS_BY_PRICE";

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

export const filterProducts = (params) => (dispatch) => {
	dispatch({
		type: FILTER_PRODUCTS_BY_SIZE,
		payload: params,
	});
};

export const getOneProduct = (id, params) => async (dispatch) => {
	const result = await axios.get(`/products/${id}`, params);
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

export const getProductsOnSale = (promotion, category, params) => async (
	dispatch
) => {
	debugger;
	const result = await axios.get(
		`products/promotion/${category}/${promotion}`,
		params
	);
	console.log("ProductsonSale", result.data);
	dispatch(displayProductsOnSale(result.data));
};

const initialState = { products: [] };

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case DISPLAY_PRODUCTS: {
			// console.log("ac", action.products);
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
		case FILTER_PRODUCTS_BY_SIZE: {
			console.log("aaaa", action.payload);
			const productFiltered = state.products
				.filter((p) =>
					action.payload.filterBy
						? p.availableSize.includes(action.payload.filterBy)
						: p
				)
				.sort((a, b) =>
					action.payload.sortBy === "lowest"
						? a.price - b.price
						: b.price - a.price
				);
			console.log("productFiltered ", productFiltered);
			return {
				...state,
				filtered: productFiltered,
			};
		}

		default:
			return state;
	}
}

/**
 * {products: [], currentProduct: [], size: 'm', item:[{}]}
 */
