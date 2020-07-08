const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS";
const CURRENT_PRODUCT = "CURRENT_PRODUCT";
const PROMOTION = "PROMOTION";

export const displayProducts = (list) => ({ type: DISPLAY_PRODUCTS, list });
export const displayProductsPromotion = (products) => ({
	type: DISPLAY_PRODUCTS,
	products,
});
export const getCurrentProduct = (currentProduct) => ({
	type: CURRENT_PRODUCT,
	currentProduct,
});

export const getOneProduct = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:8080/products/${id}`, {
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		const currentProduct = await response.json();

		dispatch(getCurrentProduct(currentProduct.product));
	}
};

export const getProducts = (params) => async (dispatch) => {
	const response = await fetch(`http://localhost:8080/products`, {
		method: "get",
		headers: { "Content-Type": "application/json" },
	});

	if (response.ok) {
		const list = await response.json();
		console.log("LIST", list);
		dispatch(displayProducts(list));
	}
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

const defaultProductManagementState = { list: [] };
export default function reducer(state = defaultProductManagementState, action) {
	switch (action.type) {
		case DISPLAY_PRODUCTS: {
			console.log("state.list", state.list);
			return {
				...state,
				list: action.list,
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
