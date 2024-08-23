import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import FooterContainerList from "./FooterContainerList";

export default function FooterSosmed() {
	const phoneNumber = "6281264797798";
	const message = "Bang, mau booking lapangan";
	const whatsAppURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
		message
	)}`;
	const listSosmedItems = [
		{
			icon: <AiFillInstagram />,
			title: "@bezzie.minisoccer",
			link: "https://www.instagram.com/bezzie.minisoccer/?hl=id",
		},
		{
			icon: <AiFillTikTok />,
			title: "@bezzie.minisoccer",
			link: "https://www.tiktok.com/@bezzie.minisoccer",
		},
		{
			icon: <IoLogoWhatsapp />,
			title: "+62 812 6479 7798",
			link: whatsAppURL,
		},
	];

	return (
		<div>
			<FooterContainerList>
				{listSosmedItems.map((item, index) => (
					<a
						href={item.link}
						key={index}
						target="_blank"
						className="flex items-center gap-1 mb-2"
					>
						<h5 className="text-4xl">{item.icon}</h5>
						<p>{item.title}</p>
					</a>
				))}
			</FooterContainerList>
		</div>
	);
}
