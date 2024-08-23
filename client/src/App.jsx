import { useEffect, useRef } from "react";
import NavBody from "./components/Navbar/NavBody";
import About from "./pages/About";
import Facility from "./pages/Facility";
import FooterBody from "./pages/Footer/FooterBody";
import Hero from "./pages/Hero";
import PriceListBody from "./pages/Pricelist/PriceListBody";
import Services from "./pages/Services";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "./utils/authSlice";
import { useNavigate } from "react-router-dom";
export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMe());
	}, [dispatch]);

	const refs = {
		navbar: useRef(null),
		hero: useRef(null),
		about: useRef(null),
		services: useRef(null),
		facility: useRef(null),
		pricelist: useRef(null),
		footer: useRef(null),
	};

	return (
		<>
			<header ref={refs.navbar}>
				<NavBody refs={refs} />
			</header>

			<main>
				<section ref={refs.hero}>
					<Hero />
				</section>
				<section ref={refs.about}>
					<About />
				</section>
				<section ref={refs.services}>
					<Services />
				</section>
				<section ref={refs.facility}>
					<Facility />
				</section>
				<section ref={refs.pricelist}>
					<PriceListBody />
				</section>
			</main>

			<footer ref={refs.footer}>
				<FooterBody />
			</footer>
		</>
	);
}
