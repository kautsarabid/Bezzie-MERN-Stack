import FooterInfo from "./FooterInfo";
import FooterLocation from "./FooterLocation";
import FooterLogo from "./FooterLogo";
import FooterSosmed from "./FooterSosmed";

export default function FooterBody() {
	return (
		<>
			<section
				className="bg-gradient-to-br from-10% from-brandBlue-500 to-100% to-brandRed-600 p-small"
				id="footer"
			>
				<FooterLogo />
				<div className="text-white-500 mt-medium flex flex-col gap-medium  lg:flex-row">
					<FooterSosmed />
					<FooterLocation />
					<FooterInfo />
				</div>
			</section>

			<section className="text-center bg-brandBlue-500 text-white-500 py-1">
				<h5 className="text-xl font-bold font-heading">
					&copy; Bezzie Minisoccer 2024
				</h5>
			</section>
		</>
	);
}
