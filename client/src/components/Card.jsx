export default function Card({ children, className }) {
	return (
		<>
			<div
				className={`border p-small rounded-small m-small shadow-btn ${className}`}
			>
				{children}
			</div>
		</>
	);
}

function Icon({ children, className }) {
	return (
		<h6 className={`${className} text-9xl w-fit mx-auto mb-small`}>
			{children}
		</h6>
	);
}

function Image({ children }) {
	return <img src={children} alt={children} />;
}

function Title({ children, className }) {
	return (
		<h4 className={`${className} font-heading font-bold  text-center mb-2`}>
			{children}
		</h4>
	);
}

function Description({ children, className }) {
	return <p className={className}>{children}</p>;
}

function AdditionalStyle(props) {
	const { children, className } = props;

	return (
		<>
			<span className={className}>{children}</span>
		</>
	);
}
Card.Icon = Icon;
Card.Image = Image;
Card.Title = Title;
Card.Description = Description;
Card.AdditionalStyle = AdditionalStyle;
