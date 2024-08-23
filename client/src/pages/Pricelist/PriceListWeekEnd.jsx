import Card from "../../components/Card";
import CardPricelist from "./CardPricelist";

export default function PriceListWeekEnd() {
	const times = [
		"06.00 - 07.00",
		"07.00 - 08.00",
		"08.00 - 09.00",
		"09.00 - 10.00",
		"10.00 - 11.00",
		"11.00 - 12.00",
		"12.00 - 13.00",
		"13.00 - 14.00",
		"14.00 - 15.00",
		"15.00 - 16.00",
		"16.00 - 17.00",
		"17.00 - 18.00",
		"20.00 - 21.00",
		"21.00 - 22.00",
		"22.00 - 23.00",
		"23.00 - 24.00",
	];

	const pricelistItems = [
		{
			price: "400K",
			times: times.slice(0, 4),
		},
		{
			price: "300K",
			times: times.slice(4, 10),
		},
		{
			price: "450K",
			times: times.slice(10, 16),
		},
	];
	return (
		<>
			<h4 className="text-center border p-small text-white-500 bg-brandRed-500 my-small">
				Hari Libur
			</h4>

			<div className="container-card flex flex-wrap gap-medium justify-center">
				{pricelistItems.map((item, index) => (
					<CardPricelist key={index}>
						<CardPricelist.Title>{item.price} </CardPricelist.Title>

						<div>
							{item.times.map((time, idx) => (
								<CardPricelist.Description key={idx}>
									{time}
								</CardPricelist.Description>
							))}
						</div>
					</CardPricelist>
				))}
			</div>
		</>
	);
}
