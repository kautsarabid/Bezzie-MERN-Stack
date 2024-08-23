import Image1 from "/1.jpg";
import Image2 from "/2.jpg";
import Image3 from "/3.png";
import Image4 from "/background.jpg";
import Button from "../components/Button";

export default function Hero() {
	return (
		<>
			<section
				className="pt-[74px] h-fit"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${Image1})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="py-small lg:flex lg:flex-row">
					<div
						className="container-hero-section h-[85vh] lg:h-[80vh] flex items-end lg:basis-1/3 overflow-hidden"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image3})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<p className="p-small text-white-500 bg-gradient-to-t from-black-500  to-transparent">
							Selamat Datang di Dunia Mini Soccer! ⚽️ Rasakan pengalaman
							bermain sepak bola yang seru dan dinamis di lapangan mini kami.
							Dengan fasilitas terbaik dan suasana kompetitif yang menyenangkan,
							kami siap membantu Anda mencetak gol-gol indah dan menikmati
							setiap momen permainan. Jadilah bintang di lapangan mini kami!
						</p>
					</div>

					<div>
						<div
							className="container-hero-section container-hero-section-2 h-[40vh] overflow-hidden"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image4})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<h2>bezzie minisoccer</h2>

							<Button
								onClick={() => {
									window.location.href = "/booking";
								}}
								className={"btn-login w-1/2 shadow-btn hover:shadow-none"}
							>
								Booking Now
							</Button>
						</div>

						<div
							className="container-hero-section container-hero-section-2 h-[38vh] overflow-hidden"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${Image2})`,
								backgroundSize: "contain",
								backgroundPosition: "center",
							}}
						>
							<h2>komunitas</h2>

							<p className="text-center text-white-500 text-sm">
								Ayo bergabung dengan komunitas mini soccer kami dan rasakan
								serunya bermain sepak bola dalam suasana penuh semangat dan
								persahabatan!
							</p>

							<Button
								className={"btn-login w-1/2 shadow-btn hover:shadow-none"}
							>
								Join Now
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
