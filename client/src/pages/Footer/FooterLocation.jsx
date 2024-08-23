import Button from "../../components/Button";
import FooterContainerList from "./FooterContainerList";

export default function FooterLocation() {
	return (
		<FooterContainerList>
			<p className="mb-2">
				Jl. H. Zainun No.9, Jurong Meunasah Dayah, Beurawe, Kec. Kuta Alam, Kota
				Banda Aceh, Aceh 23124
			</p>

			<Button
				onClick={() => window.open("https://maps.app.goo.gl/hiMKnaWoF3CMcrDd8")}
				className="bg-brandRed-500 py-small px-12 shadow-btn rounded-medium hover:shadow-none hover:bg-brandRed-600 transition duration-300 font-bold font-heading"
			>
				Maps
			</Button>
		</FooterContainerList>
	);
}
