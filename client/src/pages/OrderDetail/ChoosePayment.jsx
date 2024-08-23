import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";

export default function ChoosePayment() {
	const [selectedOption, setSelectedOption] = useState("");
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
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<>
			<div
				id="pilih-pembayaran"
				className="p-small border shadow-btn mt-small rounded-medium lg:mt-0"
			>
				<h4 className="text-center mb-small">Pilih Pembayaran</h4>

				<div className="flex items-start gap-2 font-semibold text-2xl mb-small">
					<input
						type="radio"
						name="payment"
						id="full"
						value="full"
						checked={selectedOption === "full"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="full">
						<p className="text-sm text-black-200">Bayar Lunas (100%)</p>
						<p>Rp. 200.000</p>
					</label>
				</div>

				<div className="flex items-start gap-2 font-semibold text-2xl">
					<input
						type="radio"
						name="payment"
						id="half"
						value="half"
						checked={selectedOption === "half"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="half">
						<p className="text-sm text-black-200">Bayar Dp (50%)</p>
						<p>Rp. 100.000</p>
					</label>
				</div>
			</div>
		</>
	);
}
