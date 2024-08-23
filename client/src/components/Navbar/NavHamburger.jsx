import { motion } from "framer-motion";

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsla(360, 100%, 100%, 1)"
		strokeLinecap="round"
		{...props}
	/>
);

export default function NavHamburgerButton({ onClick, isOpen }) {
	return (
		<button
			onClick={onClick}
			className="lg:hidden flex items-center justify-center absolute top-[18px] right-[15px] w-[50px] h-[50px] rounded-full bg-transparent z-10"
		>
			<svg width="23" height="23" viewBox="0 0 23 23">
				<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" },
					}}
					initial={false}
					animate={isOpen ? "open" : "closed"}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					initial={false}
					animate={isOpen ? "open" : "closed"}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" },
					}}
					initial={false}
					animate={isOpen ? "open" : "closed"}
				/>
			</svg>
		</button>
	);
}
