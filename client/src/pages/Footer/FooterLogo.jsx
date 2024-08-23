import Logo from "../../components/Logo";

export default function FooterLogo() {
	return (
		<div className="flex items-center gap-2">
			<Logo />
			<h4 className="text-white-500 font-display tracking-widest">
				Bezzie Minisoccer
			</h4>
		</div>
	);
}
