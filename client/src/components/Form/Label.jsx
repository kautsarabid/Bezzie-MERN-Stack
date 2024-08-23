export default function Label(props) {
	const { children, htmlFor } = props;
	return (
		<label htmlFor={htmlFor} className="font-bold text-sm">
			{children}
		</label>
	);
}
