import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductBasedOnList from "./components/ProductBasedOnList";
import ProductOnSale from "./components/ProductsOnSale";
import CartScreen from "./components/CartScreen";
import SearchScreen from "./components/SearchScreen";
import FavoriteProducts from "./components/FavoriteProducts";

// const PrivateRoute = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) =>
// 			rest.token ? <Component {...props} /> : <Redirect to="/login" />
// 		}
// 	/>
// );

// const ProtectedRoute = ({ component: Component, ...rest }) => {
// 	console.log("rest", rest);
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				rest.token ? <Redirect to="/" /> : <Component {...props} />
// 			}
// 		/>
// 	);
// };
export default function App(props) {
	const token = useSelector((state) => state.authentication.token);
	useEffect(() => {
		const cursor = document.querySelector(".cursor");
		const cursor2 = document.querySelector(".cursor2");
		document.addEventListener("mousemove", function (e) {
			cursor.style.cssText = cursor2.style.cssText =
				"left: " + e.clientX + "px; top: " + e.clientY + "px;";
		});
	}, []);
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/products/:id" component={SingleProduct} />
					<Route exact path="/products" component={AllProducts} />
					<Route
						exact
						path="/productlist/:productListName"
						component={ProductBasedOnList}
					/>
					<Route
						exact
						path="/products/promotion/:promotion"
						component={ProductOnSale}
					/>
					<Route
						exact
						path="/products/promotion/:category/:promotion"
						component={ProductOnSale}
					/>
					<Route path="/signup" exact={true} component={Signup} />
					<Route path="/login" exact={true} component={Login} />
					<Route path="/cart/:id?" exact={true} component={CartScreen} />
					<Route path="/search" exact={true} component={SearchScreen} />
					<Route path="/favorite" exact={true} component={FavoriteProducts} />
				</Switch>
			</BrowserRouter>
			<div className="cursor"></div>
			<div className="cursor2"></div>
		</>
	);
}
