export default function FooterContainerList({ children }) {
	return (
		<>
			<div className="border-b-[1px] border-black-200 pb-small lg:border-r-[1px] lg:border-b-0 lg:w-[500px]">
				{" "}
				{children}
			</div>
		</>
	);
}
