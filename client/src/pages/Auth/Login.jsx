import NavBody from "../../components/Navbar/NavBody";
import FormLogin from "../../fragments/FormLogin";
import AuthLayout from "./AuthLayout";

export default function Login() {
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main>
				<AuthLayout title={"Login"}>
					<FormLogin />
				</AuthLayout>
			</main>
		</>
	);
}
