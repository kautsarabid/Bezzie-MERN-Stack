import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import PriceListBody from "./pages/Pricelist/PriceListBody.jsx";
import Facility from "./pages/Facility.jsx";
import Rules from "./pages/Information/Rules.jsx";
import Faq from "./pages/Information/faq.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Booking from "./pages/Booking/BookingBody.jsx";
import OrderDetail from "./pages/OrderDetail/OrderDetail.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import PaymentMethod from "./pages/PaymentMethod.jsx";
import setAuthToken from "./utils/setAuthToken";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import store from "./app/store";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/pricelist" element={<PriceListBody />} />
					<Route path="/facility" element={<Facility />} />
					<Route path="/rules" element={<Rules />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/booking" element={<Booking />} />
					<Route path="/order-detail" element={<OrderDetail />} />
					<Route path="/profil" element={<Profile />} />
					<Route path="/payment-method" element={<PaymentMethod />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
