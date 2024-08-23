export default function Input({ children }) {
	return <>{children}</>;
}

function Text(props) {
	const { type, name, id, value, placeholder, classInput, onChange } = props;
	return (
		<input
			type={type}
			name={name}
			id={id}
			value={value}
			className={classInput}
			placeholder={placeholder}
			onChange={onChange}
			required
		/>
	);
}

function Select({ children, className }) {
	return (
		<select className={`p-small border rounded-small w-full`}>
			{children}
		</select>
	);
}

function Option({ children, value }) {
	return <option value={value}>{children}</option>;
}

Input.Text = Text;
Input.Select = Select;
Input.Option = Option;
