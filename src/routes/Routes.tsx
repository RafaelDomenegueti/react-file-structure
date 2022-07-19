import {
	BrowserRouter,
	Routes as Router,
	Route,
} from "react-router-dom";

import { Home } from "../views/Home";
import { Login } from "../views/Login";

export const Routes = () => {
	return (
		<BrowserRouter>
			<Router>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Router>
		</BrowserRouter>
	);
};