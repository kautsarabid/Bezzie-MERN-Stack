import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import NavListItems from "./NavListItems";
import Logo from "../Logo";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaUserCircle } from "react-icons/fa";

export default function NavListDesktop({ items, refs, type, user, logOut }) {
	return (
		<>
			<nav className="fixed w-full bg-brandBlue-500 shadow-md z-50">
				<div className="flex items-center justify-between p-small">
					<div>
						<Link to="/">
							<Logo />
						</Link>
					</div>

					<div className="flex items-center gap-small">
						{type === "default" ? (
							<ul className="flex gap-small text-white-500">
								<NavListItems items={items} refs={refs} />
							</ul>
						) : (
							""
						)}

						<NavigationUser type={type} user={user} logOut={logOut} />
					</div>
				</div>
			</nav>
		</>
	);
}

function NavigationUser({ type, user, logOut }) {
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate("/login");
	};
	if (type === "auth") {
		return <div></div>;
	} else if (user) {
		return (
			<Menu as="div" className="relative">
				<MenuButton className="relative flex max-w-xs items-center rounded-full">
					<span className="absolute -inset-1.5 hidden" />
					{user.avatar ? (
						<img
							alt="Avatar User"
							src={user.avatar}
							className="h-9 w-9 rounded-full"
						/>
					) : (
						<FaUserCircle className="h-9 w-9 text-gray-500" />
					)}
				</MenuButton>

				<MenuItems
					transition
					className="absolute right-10 mt-2 w-48 ring-1 ring-brandRed-500 origin-top-right rounded-medium overflow-hidden shadow-md transition data-[closed]:scale-90 data-[closed]:transform data-[closed]:opacity-50 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-brandBlue-500"
				>
					<MenuItem>
						<div className="border-b-2 border-brandRed-500 text-white-500 font-heading px-4 py-3 font-medium flex flex-col gap-1">
							<p>{user.name}</p>
							<p className="text-sm leading-none text-black-200">
								{user.email}
							</p>
						</div>
					</MenuItem>

					<MenuItem>
						<a
							href="/profil"
							className="block text-white-500 font-heading px-4 py-3 font-medium data-[focus]:bg-brandRed-500"
						>
							Your Profile
						</a>
					</MenuItem>

					<MenuItem>
						<Button
							className="block  text-white-500 font-heading px-4 py-3 font-medium data-[focus]:bg-brandRed-500 hover:bg-brandRed-500 w-full text-start"
							onClick={() => logOut()}
						>
							Sign out
						</Button>
					</MenuItem>
				</MenuItems>
			</Menu>
		);
	} else {
		return <Button onClick={() => handleButtonClick()}>Login</Button>;
	}
}
