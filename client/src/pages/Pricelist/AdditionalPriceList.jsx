import Card from "../../components/Card";

export default function AdditionalPriceList() {
	return (
		<div className="border m-small rounded-medium overflow-hidden shadow-btn">
			<div className="p-small">
				<h4 className="pb-small">
					Bundling Photographer{" "}
					<a href="">
						<span className="hover:underline text-brandRed-500 hover:text-brandRed-600">
							@potobolaaceh
						</span>
					</a>
				</h4>

				<div className="font-semibold text-xl">
					<p>1 Jam = 275K</p>
					<p>2 Jam = 325K</p>
				</div>
			</div>

			<hr className="my-small" />

			<div className="rompi p-small">
				<h4 className="pb-small">Rompi</h4>

				<div className="font-semibold text-xl">
					<p>1 Set = 30K</p>
					<p>2 Set = 50K</p>
				</div>
			</div>

			<div className="notes border text-center py-small text-white-500 bg-brandBlue-500">
				<h4 className="md:text-3xl">Gratis Rompi Setiap 2 Jam Pembookingan</h4>
			</div>
		</div>
	);
}
