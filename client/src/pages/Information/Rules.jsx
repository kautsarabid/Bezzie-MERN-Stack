import NavBody from "../../components/Navbar/NavBody";
import {
	FaBanSmoking,
	FaTrash,
	FaCat,
	FaPills,
	FaGun,
	FaPeopleGroup,
	FaPersonHarassing,
} from "react-icons/fa6";
import {
	GiGoalKeeper,
	GiEating,
	GiDamagedHouse,
	GiSonicShoes,
	GiPokerHand,
	GiPoloShirt,
} from "react-icons/gi";
import Card from "../../components/Card";
import FooterBody from "../Footer/FooterBody";

export default function Rules() {
	const itemsIcon = [
		{
			id: 1,
			icon: <FaBanSmoking />,
			description: "Dilarang Merokok Di Dalam Lapangan",
		},
		{
			id: 2,
			icon: <FaPersonHarassing />,
			description: "Dilarang Meludah Di Dalam Lapangan",
		},
		{
			id: 3,
			icon: <FaTrash />,
			description: "Dilarang Membuang Sampah Sembarangan",
		},
		{
			id: 4,
			icon: <FaCat />,
			description: "Dilarang Membawa Hewan Peliharaan",
		},
		{
			id: 5,
			icon: <GiGoalKeeper />,
			description: "Dilarang Bersandar Di Jaring",
		},
		{
			id: 6,
			icon: <GiEating />,
			description: "Dilarang Memakan Permen Karet Di Dalam Lapangan",
		},
		{
			id: 7,
			icon: <GiDamagedHouse />,
			description: "Dilarang Merusak Sarana dan Prasarana Lapangan",
		},
		{
			id: 8,
			icon: <FaPills />,
			description:
				"Dilarang Membawa Dan Menggunakan Narkotika  Serta Obat Terlarang",
		},
		{
			id: 9,
			icon: <FaGun />,
			description: "Dilarang Membawa Senjata Api Dan Tajam",
		},
		{
			id: 10,
			icon: <FaPeopleGroup />,
			description: "Dilarang Berkelahi Dan Membuat Keonaran",
		},
		{
			id: 11,
			icon: <GiSonicShoes />,
			description: "Dilarang Menggunakan Sepatu Dengan Skrup/Besi",
		},
		{
			id: 12,
			icon: <GiPokerHand />,
			description: "Dilarang Berjudi",
		},
		{
			id: 13,
			icon: <GiPoloShirt />,
			description: "Wajib Memakai Baju Bola Dan Sepatu Bola",
		},
	];
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main className="pt-24">
				<section>
					<h3 className="text-4xl text-center">RULES</h3>

					<div className="text-center flex flex-wrap justify-center ">
						{itemsIcon.map((item, index) => (
							<Card key={index} className={"w-[55%] md:w-[25%]"}>
								<Card.Icon>{item.icon}</Card.Icon>
								<Card.Title>{item.description}</Card.Title>
							</Card>
						))}
					</div>
				</section>

				<hr className="m-3" />

				<section>
					<p className="italic text-center font-semibold p-4">
						Area Bezzie Minisoccer Diawasi Oleh CCTV Bilamana Terdapat Melakukan
						Tindakan Kriminal Maka Akan Di Tindak Tegas
					</p>
				</section>
			</main>

			<footer>
				<FooterBody />
			</footer>
		</>
	);
}
