import { FaPeopleGroup } from "react-icons/fa6";
import { MdContactPhone, MdHandyman } from "react-icons/md";
import Card from "../components/Card";

const listItemsServices = [
	{
		icon: <MdContactPhone />,
		title: "Cepat Tanggap",
		description:
			"Kami selalu siap merespon pesan dan pertanyaan Anda dengan cepat. Tim kami didedikasikan untuk memberikan jawaban dan solusi terbaik dalam waktu singkat, memastikan bahwa setiap kebutuhan Anda terpenuhi tanpa penundaan.",
	},
	{
		icon: <FaPeopleGroup />,
		title: "Ramah",
		description:
			"Kepuasan Anda adalah prioritas utama kami. Dengan tim yang profesional dan ramah, kami berkomitmen untuk memberikan pengalaman layanan yang menyenangkan dan membantu. Kami selalu siap melayani Anda dengan senyum dan sikap positif.",
	},
	{
		icon: <MdHandyman />,
		title: "Fasilitas Bagus",
		description:
			"Kami menyediakan fasilitas terbaik untuk mendukung setiap kebutuhan Anda. Dari ruang yang nyaman hingga peralatan modern, kami memastikan bahwa Anda mendapatkan pengalaman terbaik dengan kualitas tinggi di setiap layanan yang kami tawarkan.",
	},
];
export default function Services() {
	return (
		<>
			<section className="mt-large" id="services">
				<div className="m-small p-small border rounded-medium shadow-btn">
					<h3 className="text-center">Services</h3>

					<div className="flex flex-wrap gap-small justify-center">
						{listItemsServices.map((item, index) => (
							<Card key={index} className={"lg:w-[25%] w-[75%]"}>
								<Card.Icon>{item.icon}</Card.Icon>
								<Card.Title>{item.title}</Card.Title>
								<Card.Description>{item.description}</Card.Description>
							</Card>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
