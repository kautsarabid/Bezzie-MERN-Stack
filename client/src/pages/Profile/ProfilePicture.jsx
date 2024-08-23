import Button from "../../components/Button";

export default function ProfilePicture() {
	return (
		<>
			<div className="border rounded-medium shadow-btn p-large w-full">
				<div className="flex flex-col gap-2 border rounded-small p-medium">
					<img
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt="foto profil user"
						className="w-[350px] h-[350px] rounded-small mx-auto"
					/>
					<Button>Pilih Foto</Button>
					<p className="text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iure,
						numquam ducimus quas exercitationem id fuga vero facere.
					</p>
				</div>

				<div className="flex flex-col gap-2 mt-small">
					<Button>Ubah Kata Sandi</Button>
					<Button>Tambah PIN</Button>
				</div>
			</div>
		</>
	);
}
