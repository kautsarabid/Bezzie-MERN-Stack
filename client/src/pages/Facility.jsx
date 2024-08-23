import Lapangan from "/facility/lapangan-bezzie.jpg";
import Bola from "/facility/bola.jpg";
import Cafetaria from "/facility/cafetaria.jpg";
import Mushola from "/facility/musholla.jpg";
import Rompi from "/facility/rompi.jpg";
import ShowerRoom from "/facility/shower.jpg";

export default function Facility() {
	const listItemsFacility = [
		{
			image: Lapangan,
			title: "Rumput Berstandar FIFA",
			description:
				"Kami menggunakan rumput berkualitas tinggi yang sesuai dengan standar FIFA, memastikan permukaan bermain yang optimal untuk pengalaman bermain sepak bola terbaik. Kenyamanan dan keamanan Anda adalah prioritas utama kami.",
		},
		{
			image: Bola,
			title: "Kualitas Bola yang Bagus",
			description:
				"Kami menyediakan bola sepak dengan kualitas terbaik untuk memastikan permainan yang lancar dan menyenangkan. Dengan bola berkualitas, setiap tendangan dan operan Anda akan terasa lebih akurat dan responsif.",
		},
		{
			image: Mushola,
			title: "Mushola ",
			description:
				"Kami menyediakan mushola yang nyaman bagi Anda yang ingin beribadah. Fasilitas ini memastikan Anda dapat menunaikan kewajiban ibadah dengan tenang dan khusyuk, tanpa harus meninggalkan area permainan.",
		},
		{
			image: Cafetaria,
			title: "Cafetaria",
			description:
				"Nikmati berbagai pilihan makanan dan minuman di kafetaria kami yang nyaman. Tempat ini adalah pilihan sempurna untuk bersantai dan mengisi energi setelah bermain atau berlatih, dengan menu yang beragam dan lezat.",
		},
		{
			image: Rompi,
			title: "Rompi",
			description:
				"Kami menyediakan rompi berkualitas untuk mendukung sesi latihan dan pertandingan Anda. Rompi ini membantu memudahkan identifikasi tim, sehingga permainan dapat berjalan lebih tertib dan terorganisir.",
		},
		{
			image: ShowerRoom,
			title: "Kamar Mandi & Shower Room",
			description:
				"Setelah beraktivitas, Anda bisa menikmati kenyamanan kamar mandi dan shower room kami yang bersih dan modern. Fasilitas ini memastikan Anda dapat membersihkan diri dan merasa segar kembali setelah berolahraga.",
		},
	];
	return (
		<>
			<section className="mt-large" id="facilities">
				<div className="m-small">
					<h3 className="text-center">Fasilitas</h3>

					{listItemsFacility.map((item, index) => (
						<div
							className="border m-small flex rounded-medium overflow-hidden shadow-btn h-[450px] md:h-[300px] odd:flex-row-reverse"
							key={index}
						>
							<div className="basis-1/2 overflow-hidden">
								<img
									src={item.image}
									alt=""
									className="w-full h-full object-cover object-center"
								/>
							</div>

							<div className="basis-1/2 p-small flex flex-col justify-center">
								<h4 className=" text-center">{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}
					<div className="border m-small flex">
						<div className="basis-1/2">
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
