import Button from "../../components/Button";

export default function ButtonWeekEnd({ handleSectionChange }) {
	return (
		<div className="flex justify-evenly flex-wrap gap-2  mt-medium">
			<Button
				className={
					"border border-brandBlue-500 text-black-500 px-large w-[25%] py-small rounded-medium font-heading font-bold text-2xl hover:bg-brandBlue-500 hover:text-white-500 transition duration-300 shadow-btn hover:shadow-none"
				}
				onClick={() => handleSectionChange("weekday")}
			>
				Hari Kerja
			</Button>

			<Button
				className={
					"bg-brandRed-500 text-white-500 px-large w-[25%] py-small rounded-medium font-heading font-bold text-2xl"
				}
				onClick={() => handleSectionChange("weekend")}
			>
				Hari Libur
			</Button>
		</div>
	);
}
