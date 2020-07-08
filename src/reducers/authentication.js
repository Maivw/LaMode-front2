import axios from "../config/axiosConfig";
const SET_TOKEN = "SET_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN";
export const TOKEN_KEY = "TOKEN_KEY";
const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_USER";
export const ID_KEY = "ID_KEY";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setUser = (user) => ({ type: SET_USER, user });
export const editUser = (user) => ({ type: EDIT_USER, user });

export const loadToken = () => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);
	if (token) {
		dispatch(setToken(token));
	}
};

// //localhost:8080/api/user/:id/get-products
// const apiUrl = 'api/user/'
// export const getProducts = params => {
//     return {
//       type: ACTION_TYPES.FETCH_PEOPLE,
//       payload: axios.get(`${apiUrl}/${id}get-products`, { params })
//     };
//   };

export const profileShowUp = (id) => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);

	if (token) {
		const response = await fetch(`http://localhost:8080/users/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		if (response.ok) {
			const { user } = await response.json();

			window.localStorage.setItem(TOKEN_KEY, token);
			dispatch(setUser(user));
		}
	} else {
		console.log("Failed");
	}
};

export const login = (params) => async (dispatch) => {
	const result = await axios.post("/users/login", params);
	dispatch(setToken(result.data.token));
};

export const logout = () => async (dispatch, getState) => {
	// const {
	// 	authentication: { token },
	// } = getState();

	window.localStorage.removeItem(TOKEN_KEY);
	dispatch(removeToken());
};

export const signup = (params) => async (dispatch) => {
	const result = await axios.post("/users", { ...params });
	dispatch(setToken(result.data.token));
	console.log("result", result);
};

export default function reducer(state = {}, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}

		case REMOVE_TOKEN: {
			const newState = { ...state };
			console.log(newState);
			delete newState.token;
			return newState;
		}
		case SET_USER: {
			return {
				...state,
				user: action.user,
			};
		}

		default:
			return state;
	}
}
