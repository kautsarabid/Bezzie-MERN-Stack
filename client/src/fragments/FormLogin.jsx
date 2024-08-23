import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../utils/authSlice";
import Button from "../components/Button";
import FormBody from "../components/Form/FormBody";
import Input from "../components/Form/Input";
import Label from "../components/Form/Label";
import { useEffect, useState } from "react";

export default function FormLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isSuccess || user) {
			navigate("/");
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ email, password }));
	};
	return (
		<form action="" onSubmit={Auth}>
			<div className="gap-small flex flex-col mt-small">
				<FormBody
					label={"Email"}
					type={"email"}
					name={"email"}
					id={"email"}
					placeholder={"Masukkan Email Anda..."}
					htmlFor={"email"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<FormBody
					label={"Password"}
					type={"password"}
					name={"password"}
					id={"password"}
					placeholder={"Masukkan Password Anda..."}
					htmlFor={"password"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div className="flex justify-between my-medium">
				<div className="flex items-center gap-2">
					<Input type={"checkbox"} name={"remember"} id={"remember"} />
					<Label htmlFor={"remember"}>Ingat Saya</Label>
				</div>
				<Link to="#" className="text-blue-500 hover:text-blue-700">
					Lupa Password ?
				</Link>
			</div>

			{isError && <p className="text-red-500 text-center">{message}</p>}

			<Button
				typr={"submit"}
				className="w-full font-heading font-bold p-small bg-brandRed-500 rounded-small text-3xl text-white-500 hover:bg-brandRed-600"
			>
				{isLoading ? "loading..." : "Login"}
			</Button>
		</form>
	);
}
