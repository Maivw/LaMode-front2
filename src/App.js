import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Theme from "./Theme";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			rest.token ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			rest.token ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
);
export default function App(props) {
	const token = useSelector((state) => state.authentication.token);
	return (
		<>
			{/* <CustomerChat pageId={"114240520289693"} /> */}
			<BrowserRouter>
				<Switch>
					{/* <PrivateRoute exact path="/" token={token} component={Home} />
					<Route path="/profile/" component={Profile} />
				
					<Route path="/cart" component={Cart} />
					<Route path="/search" component={SearchScreen} /> */}
					<Route path="/products/:id" component={SingleProduct} />
					<Route exact path="/products" component={AllProducts} />
					<Route path="/signup" exact={true} component={Signup} />
					<Route path="/login" exact={true} component={Login} />
				</Switch>
			</BrowserRouter>
		</>
	);
}
