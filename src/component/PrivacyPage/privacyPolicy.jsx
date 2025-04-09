export default function PrivacyPolicySection() {
    return (
        <section className="bg-white Poppins px-6 py-12 max-w-5xl mx-auto text-[#333]">
            <h1 className="text-4xl Poppins-bold md:text-5xl font-bold text-pink-600 mb-6">Lazeez Privacy Policy</h1>
            <p className="mb-8 italic text-sm Poppins-bold text-gray-500">Effective Date: April 8, 2025 (Website under development)</p>

            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">1. Information We Collect</h2>
                    <p className="mb-2 Poppins">We collect the following types of data:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li className="Poppins"><strong className="Poppins-bold">Personal Information:</strong> Name, Email Address, Phone Number, Location</li>
                        <li className="Poppins"><strong className="Poppins-bold">Transaction Data:</strong> Ordered packages, payment details (via secure providers)</li>
                        <li className="Poppins"><strong className="Poppins-bold">Usage Data:</strong> IP address, device info, browser type, interaction metrics, heatmaps</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold Poppins-bold text-pink-500 mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc Poppins list-inside space-y-1">
                        <li>Facilitating transactions and vendor communication</li>
                        <li>Enhancing user experience and analyzing usage</li>
                        <li>Displaying user name, location, and package to vendors</li>
                        <li>Improving functionality through heatmap data</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold Poppins-bold text-pink-500 mb-2">3. Data Sharing and Disclosure</h2>
                    <ul className="list-disc Poppins list-inside space-y-1">
                        <li>Vendors only see name, location, and package details</li>
                        <li>External transactions are prohibited</li>
                        <li>Third parties (e.g., payment providers) must follow confidentiality agreements</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">4. Data Protection Measures</h2>
                    <ul className="list-disc Poppins list-inside space-y-1">
                        <li>Encrypted communications</li>
                        <li>Secure storage and access controls</li>
                        <li>Regular audits and monitoring</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">5. Cookies, Heatmaps, and Tracking</h2>
                    <p>We use cookies and heatmaps to improve the platform. Users can disable cookies in their browser settings but may lose some functionality.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">6. User Rights</h2>
                    <p>You have the right to access, correct, delete, or restrict your personal data. Contact us at <a href="mailto:contact@lazeez.com" className="text-pink-600 underline">contact@lazeez.com</a> to exercise these rights.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">7. Data Retention</h2>
                    <p>Data is retained only as long as necessary for business and legal purposes.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">8. International Data Transfers</h2>
                    <p>Data may be processed in the US and Pakistan. By using Lazeez, you consent to these transfers.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">9. Monitoring and Chat Feature</h2>
                    <p>We monitor user-vendor chats solely to ensure policy compliance and user safety.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">10. Prohibited Activities and Liability</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>We are not responsible for external transactions or user negligence</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">11. Amendments to Privacy Policy</h2>
                    <p>We may update this policy. Continued use indicates acceptance.</p>
                </div>

                <div>
                    <h2 className="text-2xl Poppins-bold font-semibold text-pink-500 mb-2">12. Contact Information</h2>
                    <p>Email: <a href="mailto:contact@lazeez.com" className="underline text-pink-600">contact@lazeez.com</a></p>
                    <p>Address: 203 Progressive Plaza, Beaumont Road, Civil Lines Karachi, 75530</p>
                </div>

                <p className="text-sm text-gray-500 italic mt-8">By using Lazeez, you acknowledge that you have read and accepted this Privacy Policy.</p>
            </div>
        </section>
    );
}
