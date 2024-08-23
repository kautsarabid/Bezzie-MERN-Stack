import NavListDesktop from "./NavListDesktop";
import React, { useState, useEffect } from "react";
import LogoBezzie from "/logo.webp";
import { useCycle } from "framer-motion";
import NavListMobile from "./NavListMobile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../../utils/authSlice";
export default function NavBody({ refs }) {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(logOut());
		dispatch(reset());
		navigate("/");
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const navListItems = [
		{ title: "Home", url: "hero" },
		{ title: "About", url: "about" },
		{ title: "Service", url: "services" },
		{ title: "Facility", url: "facility" },
		{ title: "Pricelist", url: "pricelist" },
		{ title: "Contact", url: "footer" },
	];

	let type = "default";

	if (location.pathname === "/login" || location.pathname === "/register") {
		type = "auth";
	}

	if (isMobile) {
		return (
			<NavListMobile
				items={navListItems}
				isOpen={isOpen}
				onClick={() => toggleOpen()}
				logo={LogoBezzie}
				refs={refs}
				type={type}
				user={user}
				logOut={logout}
			/>
		);
	} else {
		return (
			<NavListDesktop
				items={navListItems}
				logo={LogoBezzie}
				refs={refs}
				type={type}
				user={user}
				logOut={logout}
			/>
		);
	}
}
