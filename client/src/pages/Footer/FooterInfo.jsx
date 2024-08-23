import { Link } from "react-router-dom";

export default function FooterInfo() {
	return (
		<div className="basis-1/3">
			<ul className="flex flex-col gap-small">
				<li>
					<Link to="/rules">Rules</Link>
				</li>
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
			</ul>
		</div>
	);
}
