import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import ProductBasedOnList from "./components/ProductBasedOnList";
import ProductOnSale from "./components/ProductsOnSale";
import CartScreen from "./components/CartScreen";
import Checkout from "./components/Checkout";
import FavoriteProducts from "./components/FavoriteProducts";

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
					<Route path="/cart" exact={true} component={CartScreen} />
					<Route path="/favorite" exact={true} component={FavoriteProducts} />
					<Route path="/checkout" exact={true} component={Checkout} />
				</Switch>
			</BrowserRouter>
			<div className="cursor"></div>
			<div className="cursor2"></div>
		</>
	);
}
