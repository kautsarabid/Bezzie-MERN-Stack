export default function CardPricelist({ children, className }) {
	return (
		<div>
			<div
				className={`border px-large rounded-medium text-center py-medium h-full shadow-btn ${className}`}
			>
				{children}
			</div>
		</div>
	);
}

function Title({ children, className }) {
	return <h3 className={`${className} mb-small`}>{children}</h3>;
}

function Description({ children, className }) {
	return <p className={`${className} mb-2`}>{children}</p>;
}

CardPricelist.Title = Title;
CardPricelist.Description = Description;
