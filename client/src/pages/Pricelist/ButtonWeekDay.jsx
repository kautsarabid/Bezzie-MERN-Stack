import Button from "../../components/Button";

export default function ButtonWeekDay({ handleSectionChange }) {
	return (
		<div className="flex justify-evenly flex-wrap gap-2  mt-medium">
			<Button
				className={
					"bg-brandBlue-500 text-white-500 px-large w-[25%] py-small rounded-medium font-heading font-bold text-2xl"
				}
				onClick={() => handleSectionChange("weekday")}
			>
				Hari Kerja
			</Button>

			<Button
				className={
					"border border-brandRed-500 text-Black-500 px-large w-[25%] py-small rounded-medium font-heading font-bold text-2xl hover:bg-brandRed-500 hover:text-white-500 transition duration-300 shadow-btn hover:shadow-none"
				}
				onClick={() => handleSectionChange("weekend")}
			>
				Hari Libur
			</Button>
		</div>
	);
}
