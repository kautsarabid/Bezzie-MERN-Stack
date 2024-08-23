import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import NavBody from "../components/Navbar/NavBody";
import { useNavigate } from "react-router-dom";
import { getMe } from "../utils/authSlice";
import { useEffect } from "react";

export default function PaymentMethod() {
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
	const banks = ["BSI", "Dana", "Gopay", "OVO"];
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main className="pt-[100px]">
				<div className="border shadow-btn p-small rounded-medium m-small  max-w-screen-md mx-auto">
					<div>
						<h3 className="text-center">Metode Pembayaran</h3>
						<p className="text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
							perspiciatis.
						</p>
					</div>

					<div className="my-small">
						{banks.map((bank, index) => (
							<label
								key={index}
								htmlFor={bank.toLowerCase()}
								className="border w-full p-medium rounded-small flex justify-between cursor-pointer my-small hover:bg-brandBlue-500 hover:text-white-500"
							>
								<span>{bank}</span>
								<input
									type="radio"
									id={bank.toLowerCase()}
									name="payment-method"
									value={bank.toLowerCase()}
								/>
							</label>
						))}

						<Button>Bayar</Button>
					</div>
				</div>
			</main>
		</>
	);
}
