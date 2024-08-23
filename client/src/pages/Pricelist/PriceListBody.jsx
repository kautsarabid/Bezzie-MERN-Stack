import AdditionalPriceList from "./AdditionalPriceList";
import PriceListDesktop from "./PriceListDesktop";
import PriceListMobile from "./PriceListMobile";

export default function PriceListBody() {
	return (
		<>
			<div className="mb-6 transition-all duration-100" id="pricelist">
				<h3 className="text-center font-heading">Pricelist</h3>

				<div className=" mx-auto">
					<div className="lg:hidden">
						<PriceListMobile />
					</div>
					<div className="hidden lg:block">
						<PriceListDesktop />
					</div>
				</div>

				<hr className="mx-4 my-5" />

				<AdditionalPriceList />
			</div>
		</>
	);
}
