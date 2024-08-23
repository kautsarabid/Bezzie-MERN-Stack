import ImageAbout from "../../public/2.jpg";
export default function About() {
	return (
		<>
			<section className="mt-large" id="about">
				<div className="border flex flex-wrap m-small shadow-btn rounded-medium overflow-hidden">
					<div className="md:basis-1/2 p-small">
						<h3>Tentang Bezzie Minisoccer</h3>

						<p className="mb-small">
							Bezzie Mini Soccer pusat olahraga terdepan yang didedikasikan
							untuk menghadirkan pengalaman bermain mini soccer terbaik. Kami
							bangga menjadi pilihan utama bagi penggemar sepak bola dari segala
							usia yang mencari keseruan, tantangan, dan persahabatan di atas
							lapangan mini.
						</p>

						<p>
							Di Bezzie Mini Soccer, kami tidak hanya menyediakan tempat untuk
							bermain sepak bola, tetapi juga komunitas yang hangat dan
							suportif. Dengan fasilitas terbaik, program pelatihan yang
							komprehensif, dan event yang seru, kami memastikan setiap
							kunjungan Anda menjadi pengalaman yang menyenangkan dan berharga.
							Bergabunglah dengan Bezzie Mini Soccer dan rasakan sendiri
							kenikmatan bermain di lapangan mini kami. Jadilah bagian dari
							komunitas yang penuh semangat dan dedikasi untuk sepak bola mini!
						</p>
					</div>

					<div className="md:basis-1/2 overflow-hidden">
						<img
							src={ImageAbout}
							alt="Foto Komunitas Bezzie"
							className="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
