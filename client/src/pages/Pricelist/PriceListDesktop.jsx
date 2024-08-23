import { useState } from "react";

import PriceListWeekDay from "./PriceListWeekDay";
import PriceListWeekEnd from "./PriceListWeekEnd";
import ButtonWeekDay from "./ButtonWeekDay";
import ButtonWeekEnd from "./ButtonWeekEnd";

export default function PriceListDesktop() {
	const [currentSection, setCurrentSection] = useState("weekday");

	const handleSectionChange = (section) => {
		setCurrentSection(section);
	};

	return (
		<>
			{currentSection === "weekday" ? (
				<div>
					<PriceListWeekDay />
					<ButtonWeekDay handleSectionChange={handleSectionChange} />
				</div>
			) : (
				<div>
					<PriceListWeekEnd />
					<ButtonWeekEnd handleSectionChange={handleSectionChange} />
				</div>
			)}
		</>
	);
}
