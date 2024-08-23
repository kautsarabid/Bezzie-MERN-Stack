import Button from "../../components/Button";

export default function TotalPrice() {
	return (
		<>
			<div
				id="ringkasan-pembayaran"
				className="p-small border shadow-btn mt-small rounded-medium col-span-3"
			>
				<h4 className="text-center mb-small">Total Pembayaran</h4>

				<h5 className="text-center font-semibold text-4xl mb-small">
					Rp. 200.000
				</h5>

				<Button onClick={() => (window.location.href = "/payment-method")}>
					Pilih Metode Pembayaran
				</Button>
			</div>
		</>
	);
}
