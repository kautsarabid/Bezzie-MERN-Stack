import Input from "./Input";
import Label from "./Label";

export default function InputForm(props) {
	const {
		label,
		htmlFor,
		type,
		name,
		id,
		value,
		placeholder,
		classInput,
		onChange,
	} = props;

	return (
		<div className={`flex flex-col w-full gap-1`}>
			<Label htmlFor={htmlFor}>{label}</Label>
			<Input>
				<Input.Text
					type={type}
					name={name}
					id={id}
					value={value}
					placeholder={placeholder}
					classInput={`p-small border rounded-small w-full ${classInput}`}
					onChange={onChange}
				/>
			</Input>
		</div>
	);
}
