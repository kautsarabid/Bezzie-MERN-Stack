import NavBody from "../../components/Navbar/NavBody";
import FooterBody from "../Footer/FooterBody";

import BookingSchedule from "./BookingSchedule";
import PaymentDetail from "./PaymentDetail";
import ChoosePayment from "./ChoosePayment";
import TotalPrice from "./TotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMe } from "../../utils/authSlice";

export default function OrderDetail() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	useEffect(() => {
		if (isError) {
			navigate("/login");
		}
	}, [isError, navigate]);
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main>
				<section className="p-small  h-full pt-[100px]">
					<h3 className="mb-small text-center">Detail Order</h3>
					<div className="container grid lg:grid-cols-3 gap-small">
						<BookingSchedule />

						<PaymentDetail />

						<ChoosePayment />

						<TotalPrice />
					</div>
				</section>
			</main>

			<footer>
				<FooterBody />
			</footer>
		</>
	);
}
