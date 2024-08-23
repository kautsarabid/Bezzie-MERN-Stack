import { motion } from "framer-motion";
import NavHamburgerButton from "./NavHamburger";
import NavListItems from "./NavListItems";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { FaUserCircle } from "react-icons/fa";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 246px 41px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(25px at 260px 41px)",
		transition: {
			delay: 0.2,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export default function NavListMobile({
	items,
	isOpen,
	onClick,
	refs,
	type,
	user,
	logOut,
}) {
	return (
		<motion.nav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className="fixed top-0 left-0 w-full bg-brandBlue-500 py-3 px-4 z-50 shadow-md"
		>
			<div className="max-w-7xl flex items-center justify-between">
				<Link to="/">
					<Logo />
				</Link>

				{type === "auth" ? (
					<div></div>
				) : (
					<div>
						<NavHamburgerButton onClick={onClick} isOpen={isOpen} />

						<motion.div
							className="absolute top-0 right-0 bottom-0 w-[300px] h-screen lg:hidden bg-brandBlue-500"
							variants={sidebar}
						/>

						<motion.ul
							variants={variants}
							className={
								isOpen
									? "bg-brandBlue-500 flex flex-col justify-center gap-medium lg:hidden absolute top-0 right-0 w-[300px] h-screen text-white-500 shadow-navList"
									: "hidden"
							}
						>
							<div className="border-b border-black-200 mx-2 px-small py-4 flex flex-col gap-large">
								<NavListItems items={items} refs={refs} />
							</div>

							<NavigationUser type={type} user={user} logOut={logOut} />
						</motion.ul>
					</div>
				)}
			</div>
		</motion.nav>
	);
}

function NavigationUser({ type, user, logOut }) {
	const Navigate = useNavigate();
	const handleButtonClick = () => {
		Navigate("/login");
	};
	if (type === "auth") {
		return <div></div>;
	} else if (user) {
		return (
			<div className="px-medium">
				<div id="user" className="flex items-center gap-2 mb-small">
					{user.avatar ? (
						<img
							alt="Avatar User"
							src={user.avatar}
							className="h-9 w-9 rounded-full"
						/>
					) : (
						<FaUserCircle className="h-9 w-9 text-gray-500 " />
					)}

					<div className="">
						<p className="leading-none">{user.name}</p>
						<p className="text-sm leading-none text-black-200">{user.email}</p>
					</div>
				</div>

				<div
					id="user-navigation"
					className="text-white-500 font-heading font-medium"
				>
					<div>
						<a className="block py-2 hover:text-black-200" href="/profil">
							Your Profile
						</a>
					</div>

					<div>
						<Button
							className="block py-2 hover:text-black-200"
							onClick={() => logOut()}
						>
							Sign Out
						</Button>
					</div>
				</div>
			</div>
		);
	} else {
		return <Button onClick={() => handleButtonClick()}>Login</Button>;
	}
}
