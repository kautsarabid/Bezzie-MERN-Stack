import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function BookingSchedule() {
	return (
		<>
			<div
				id="jadwal-booking"
				className="p-small border rounded-medium shadow-btn"
			>
				<h4 className="text-center mb-small">Jadwal Booking</h4>
				<p className="text-sm text-black-200">Senin, 12 July 2024</p>

				<div className="flex items-center justify-between font-semibold">
					<p className="text-xl">06:00 - 07:00</p>
					<div id="icon" className="flex gap-2 items-center">
						<p className="text-xl">Rp. 100.000</p>
						<FaEdit className="text-blue-500 text-2xl cursor-pointer" /> |
						<MdDelete className="text-brandRed-500 text-2xl cursor-pointer" />
					</div>
				</div>

				<div className="flex items-center justify-between font-semibold">
					<p className="text-xl">07:00 - 08:00</p>
					<div id="icon" className="flex gap-2 items-center">
						<p className="text-xl">Rp. 100.000</p>
						<FaEdit className="text-blue-500 text-2xl cursor-pointer" /> |
						<MdDelete className="text-brandRed-500 text-2xl cursor-pointer" />
					</div>
				</div>
			</div>
		</>
	);
}
