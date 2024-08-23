export default function NavListItems({ items, refs, className }) {
	const handleScroll = (section) => {
		const navbarHeight = refs.navbar.current.offsetHeight;
		const sectionElement = refs[section].current;

		window.scrollTo({
			top: sectionElement.offsetTop - navbarHeight,
			behavior: "smooth",
		});
	};

	if (location.pathname === "/") {
		return (
			<>
				{items.map((item, index) => (
					<li key={index}>
						<button
							className={`hover:text-white-700 font-heading ${className} `}
							onClick={() => handleScroll(item.url)}
						>
							{item.title}
						</button>
					</li>
				))}
			</>
		);
	} else {
		return "";
	}
}
