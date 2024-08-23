import React, { useState } from "react";
import NavBody from "../../components/Navbar/NavBody";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import FooterBody from "../Footer/FooterBody";

export default function Faq() {
	const [answersShown, setAnswersShown] = useState({});
	const toggleAnswer = (index) => {
		setAnswersShown({
			...answersShown,
			[index]: !answersShown[index],
		});
	};

	const faqItems = [
		{
			title: "Harga Sewa Lapangan Berapa dan Bagaimana Sistem Pembookingannya?",
			description: (
				<>
					Harga sewa mulai dari 250K perjam, Untuk info lebih lanjut dapat
					dilihat di{" "}
					<Link
						to="/pricelist"
						className="text-[#b32c19] hover:text-[#031c33] font-bold"
					>
						Pricelist
					</Link>
				</>
			),
		},
		{
			title: "Fasilitas Apa Saja yang Tersedia Di Bezzie?",
			description: (
				<>
					Fasilitas yang tersedia di bezzie diantara lain :{" "}
					<ul className="list-disc px-6 pt-2">
						<li>Rumput Berstandar FIFA</li>
						<li>Bola Match Ball</li>
						<li>Cafetaria</li>
						<li>Shower Room</li>
						<li>Toilet</li>
					</ul>
					Lebih detail dapat dilihat di{" "}
					<Link
						to={"/facility"}
						className="text-[#b32c19] hover:text-[#031c33] font-bold"
					>
						Fasilitas
					</Link>
				</>
			),
		},
		{
			title: "Dimana Lokasi Bezzie?",
			description: (
				<>
					Lokasi Bezzie Berada di Jl. H. Zainun No.9, Jurong Meunasah Dayah,
					Beurawe, Kec. Kuta Alam, Kota Banda Aceh, Aceh 23124. Atau dapat
					dilihat di{" "}
					<Link
						to="https://maps.app.goo.gl/hiMKnaWoF3CMcrDd8"
						className="text-[#b32c19] hover:text-[#031c33] font-bold"
					>
						Maps
					</Link>
				</>
			),
		},
	];

	return (
		<>
			<header>
				<NavBody />
			</header>

			<main className="pt-20 h-full">
				<section>
					<h4 className="font-display text-center uppercase py-3">faq</h4>

					<div>
						<ul>
							{faqItems.map((item, index) => (
								<div className="border mx-3 rounded-md shadow mb-4 md:mx-32">
									<div
										className="px-5 py-5 flex items-center justify-between cursor-pointer"
										id="title"
										onClick={() => toggleAnswer(index)}
										key={index}
									>
										<li className="font-semibold text-lg">{item.title}</li>

										<span>
											<IoIosArrowDown className="text-xl" />
										</span>
									</div>

									{answersShown[index] && (
										<>
											<hr className="" />
											<div className="p-5 mt-2" id="jawaban">
												<p>{item.description}</p>
											</div>
										</>
									)}
								</div>
							))}
						</ul>
					</div>
				</section>
			</main>

			<footer>
				<FooterBody />
			</footer>
		</>
	);
}
