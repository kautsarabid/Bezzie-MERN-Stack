import NavBody from "../../components/Navbar/NavBody";
import FormRegister from "../../fragments/FormRegister";
import AuthLayout from "./AuthLayout";

export default function Register() {
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main>
				<AuthLayout title={"Daftar"}>
					<FormRegister />
				</AuthLayout>
			</main>
		</>
	);
}
