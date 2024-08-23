import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import NavBody from "../../components/Navbar/NavBody";
import "react-datepicker/dist/react-datepicker.css";
import Label from "../../components/Form/Label";
import FormBody from "../../components/Form/FormBody";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FooterBody from "../../pages/Footer/FooterBody";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../utils/authSlice";

const Booking = () => {
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

	const initialDates = [
		{
			date: new Date(2024, 6, 1),
			slots: [
				{ time: "06:00 - 07:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				{ time: "07:00 - 08:00", price: 300000 },
				// Add all time slots for 1 Jul
			],
		},
		{
			date: new Date(2024, 6, 2),
			slots: [
				{ time: "06:00 - 07:00", price: 320000 },
				{ time: "07:00 - 08:00", price: 320000 },
				// Add all time slots for 2 Jul
			],
		},
		// Add more dates and their respective slots
	];

	const [selectedDate, setSelectedDate] = useState(initialDates[0].date);
	const [availableSlots, setAvailableSlots] = useState(initialDates[0].slots);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		const selectedDateObj = initialDates.find(
			(dateObj) => dateObj.date.toDateString() === date.toDateString()
		);
		if (selectedDateObj) {
			setAvailableSlots(selectedDateObj.slots);
		} else {
			setAvailableSlots([]);
		}
	};

	return (
		<>
			<header>
				<NavBody />
			</header>

			<section className="p-small bg-black-100 h-full pt-[128px]">
				<div className="max-w-4xl m-auto border p-small rounded-small bg-[#ffff]">
					<h4 className="mb-small">Booking Lapangan</h4>
					<div className="mb-medium flex flex-col">
						<Label>Piih Tanggal</Label>
						<DatePicker
							selected={selectedDate}
							onChange={handleDateChange}
							dateFormat="dd/MM/yyyy"
							minDate={new Date()} // Disable past dates
							className="mt-1 block w-full p-small bg-white border rounded-md  sm:text-sm"
						/>
					</div>

					<div className="flex flex-col md:flex-row gap-small items-center">
						<FormBody
							label={"Nama Team"}
							type={"team"}
							name={"team"}
							id={"team"}
							placeholder={"Masukkan Nama Tim Anda..."}
							htmlFor={"team"}
						/>
						<div className="w-full">
							<Label>Photographer</Label>
							<Input>
								<Input.Select>
									<Input.Option value={"yes"}>
										Memakai Photographer
									</Input.Option>
									<Input.Option value={"no"}>
										Tidak Memakai Photographer
									</Input.Option>
								</Input.Select>
							</Input>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-small ">
						{availableSlots.map((slot, index) => (
							<label
								key={index}
								htmlFor={"slot" + index}
								className="border p-medium rounded-small flex  justify-between hover:bg-brandBlue-500 hover:text-white-500 cursor-pointer"
								id="slot"
							>
								<p>{slot.time}</p>
								<div className="flex gap-2">
									Rp.{slot.price.toLocaleString()}
									<input
										type="checkbox"
										name={"slot" + index}
										id={"slot" + index}
									/>
								</div>
							</label>
						))}
					</div>
					<Button onClick={() => (window.location.href = "/order-detail")}>
						Confirm
					</Button>
				</div>
			</section>

			<footer>
				<FooterBody />
			</footer>
		</>
	);
};

export default Booking;
