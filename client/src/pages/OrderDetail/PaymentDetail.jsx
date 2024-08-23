export default function PaymentDetail() {
	return (
		<div
			id="ringkasan-pembayaran"
			className="p-small border shadow-btn mt-small rounded-medium lg:mt-0"
		>
			<h4 className="text-center mb-small">Ringkasan Pembayaran</h4>

			<div className="flex justify-between font-semibold text-2xl">
				<p>Biaya Sewa</p>
				<p>Rp. 200.000</p>
			</div>

			<div className="flex justify-between font-semibold text-2xl">
				<p>Photographer</p>
				<p>Rp. 0</p>
			</div>
		</div>
	);
}
