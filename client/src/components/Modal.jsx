import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "./Button";

export default function Modal({ isOpen, close, children }) {
	return (
		<>
			<Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black-200/50">
					<div className="flex min-h-screen items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md  mt-[75px] rounded-medium bg-[#fff] p-small shadow-btn duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
						>
							{children}
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}

function Title({ title }) {
	return <h4>{title}</h4>;
}

function Body({ children }) {
	return <div>{children}</div>;
}

Modal.Title = Title;
Modal.Body = Body;

function Form() {
	return (
		<>
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
		</>
	);
}
