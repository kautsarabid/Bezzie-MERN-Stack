import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormBody from "../components/Form/FormBody";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, reset } from "../utils/authSlice";

export default function FormRegister() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isSuccess) {
			navigate("/login");
		}
		dispatch(reset());
	}, [isSuccess, dispatch, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(RegisterUser({ name, email, password }));
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<FormBody
				label={"Nama Lengkap"}
				type={"text"}
				name={"username"}
				id={"username"}
				placeholder={"Masukkan Nama Lengkap Anda..."}
				htmlFor={"username"}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

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

			{isLoading && <p>Loading...</p>}
			{isError && <p>{message}</p>}
			{isSuccess && <p>Registration Successful!</p>}

			<Button className="w-full mt-medium font-heading font-bold p-small bg-brandRed-500 rounded-small text-3xl text-white-500 hover:bg-brandRed-600">
				Daftar
			</Button>
		</form>
	);
}
