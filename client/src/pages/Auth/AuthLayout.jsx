import { Link } from "react-router-dom";

export default function AuthLayout({ children, title }) {
	return (
		<>
			<section className="bg-gradient-to-br from-10% from-brandBlue-500 to-100% to-brandRed-600 h-ful py-[124px] flex justify-center px-small md:px-0">
				<ContainerForm>
					<div className="text-center">
						<h4 className="text-4xl mb-1">{title}</h4>
						<SubTitle />
					</div>
					{children}
					<Navigation />
				</ContainerForm>
			</section>
		</>
	);
}

function ContainerForm({ children }) {
	return (
		<div className="border max-w-screen-md h-fit p-small rounded-medium bg-white-500 shadow-btn">
			{children}
		</div>
	);
}

function SubTitle() {
	if (location.pathname === "/login") {
		return (
			<p>
				Hai Minziee! Silahkan Lakukan Login Untuk melihat jadwal, Pembokingan
				Online dan lainnya
			</p>
		);
	} else {
		return (
			<p>
				Hai Minziee! Silahkan Buat Akun terlebih dahulu Untuk dapat melihat
				jadwal, Pembokingan Online dan lainnya
			</p>
		);
	}
}

const Navigation = () => {
	if (location.pathname === "/login") {
		return (
			<div className="text-center mt-3">
				<p>
					Belum Punya Akun?{" "}
					<Link to="/register" className="text-blue-500 hover:text-blue-700">
						Register
					</Link>{" "}
				</p>
			</div>
		);
	} else {
		return (
			<div className="text-center mt-3">
				<p>
					Sudah Punya Akun?{" "}
					<Link to="/login" className="text-blue-500 hover:text-blue-700">
						Login
					</Link>{" "}
				</p>
			</div>
		);
	}
};
