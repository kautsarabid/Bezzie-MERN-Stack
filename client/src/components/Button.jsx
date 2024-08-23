const Button = ({ type, children, onClick, className = "btn-login" }) => {
	return (
		<button type={type} onClick={onClick} className={`${className}`}>
			{children}
		</button>
	);
};

export default Button;
