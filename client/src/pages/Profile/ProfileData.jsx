import Modal from "../../components/Modal";
import Button from "../../components/Button";
import FormBody from "../../components/Form/FormBody";
import { useState } from "react";

export default function ProfileData({ dataUser, formatDate }) {
	let [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}
	return (
		<>
			<div className="border rounded-medium shadow-btn p-large w-full h-fit">
				<div>
					<h4>Biodata Diri</h4>
					{dataUser.map((user, index) =>
						index < 3 ? (
							<div
								id="nama"
								className="flex justify-between my-small"
								key={index}
							>
								<p>{user.title}</p>
								<span>{user.value}</span>
							</div>
						) : null
					)}
				</div>
				<hr className="my-2" />
				<div>
					<h4>Kontak</h4>
					{dataUser.map((user, index) =>
						index >= 3 ? (
							<div
								id="nama"
								className="flex justify-between my-small"
								key={index}
							>
								<p>{user.title}</p>
								<span>{user.value}</span>
							</div>
						) : null
					)}
				</div>

				<Button onClick={open}>Ubah Data</Button>

				<Modal isOpen={isOpen} close={close}>
					<Modal.Title title={"Ubah Data"} />

					<Modal.Body>
						<form action="" className="gap-2 flex flex-col">
							{dataUser.map((user, index) => (
								<FormBody
									key={index}
									label={user.title}
									htmlFor={user.title}
									type={
										user.title === "Tanggal Lahir"
											? "date"
											: user.title === "Nomor Handphone"
											? "number"
											: "text"
									}
									id={user.title}
									placeholder={user.value}
									value={
										user.title === "Tanggal Lahir"
											? formatDate(user.value)
											: user.value
									}
								/>
							))}

							<Button>Ubah Data</Button>
						</form>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
}
