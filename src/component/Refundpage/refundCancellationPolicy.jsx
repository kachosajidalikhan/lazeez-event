// components/RefundCancellationPolicy.jsx
export default function RefundCancellationPolicy() {
    return (
        <section className="bg-white Poppins max-w-5xl mx-auto px-4 py-10 text-[#333]">
            <h2 className="text-3xl Poppins-bold font-bold text-center text-[#ED004F] mb-6">Refund and Cancellation Policy</h2>

            <div className="space-y-10">
                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">For Users</h3>
                    <ul className="space-y-3 list-disc list-inside text-base">
                        <li><strong className='Poppins-bold'>Order Cancellation:</strong> Users may cancel their order within 24 hours of placing it. Upon cancellation, Lazeez will initiate the refund process.</li>
                        <li><strong className='Poppins-bold'>Refund Timeline:</strong> Refunds are processed within 3 working days after approval and subject to internal audits.</li>
                        <li><strong className='Poppins-bold'>No Refunds After 3 Days:</strong> Cancellations made after 3 days of order placement are not eligible for refunds.</li>
                        <li><strong className='Poppins-bold'>Vendor-Initiated Cancellations:</strong> Users receive a full refund within 3 working days if the vendor cancels an order.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">For Vendors</h3>
                    <ul className="space-y-3 list-disc list-inside text-base">
                        <li><strong>Payment Release:</strong> Vendor payments are released 3 days after order completion following an audit to ensure legitimacy.</li>
                        <li><strong>Order Cancellations:</strong> Vendors will not be paid for canceled orders. Repeated cancellations may lead to account suspension.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl Poppins-bold font-semibold text-[#ED004F] mb-4">General Terms</h3>
                    <ul className="space-y-3 list-disc list-inside text-base">
                        <li>Lazeez may withhold or deny refunds if fraudulent or abusive activity is detected.</li>
                        <li>Refund/cancellation disputes must be reported within 7 working days of the transaction.</li>
                        <li>Lazeez reserves the right to amend or update this policy at any time, with notice for significant changes.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
