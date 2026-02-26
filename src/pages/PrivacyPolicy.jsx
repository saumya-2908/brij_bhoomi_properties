import SectionWrapper from "../components/SectionWrapper";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <SectionWrapper className="pt-32 pb-20 bg-white dark:bg-brand-darkBg transition-colors duration-500">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Last updated: September 18, 2024
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">

            <p>
              This Privacy Policy describes Our policies and procedures on the collection,
              use and disclosure of Your information when You use the Service and tells
              You about Your privacy rights and how the law protects You.
            </p>

            {/* Interpretation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Interpretation and Definitions
              </h2>

              <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">
                Interpretation
              </h3>

              <p>
                The words of which the initial letter is capitalized have meanings defined
                under the following conditions. The following definitions shall have the same
                meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 dark:text-white">
                Definitions
              </h3>

              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Account</strong> means a unique account created for You to access our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls or is under common control with a party.</li>
                <li><strong>Company</strong> refers to Vrindavan Divine Reality, Vrindavan, U.P.</li>
                <li><strong>Cookies</strong> are small files placed on Your device containing browsing details.</li>
                <li><strong>Country</strong> refers to Uttar Pradesh, India.</li>
                <li><strong>Device</strong> means any device that can access the Service.</li>
                <li><strong>Personal Data</strong> means information relating to an identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically.</li>
                <li><strong>Website</strong> refers to www.vrindavandivinereality.com.</li>
              </ul>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Collecting and Using Your Personal Data
              </h2>

              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Personal Data
              </h3>

              <p>
                While using Our Service, We may ask You to provide personally identifiable
                information such as:
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 dark:text-white">
                Usage Data
              </h3>

              <p>
                Usage Data is collected automatically when using the Service. This may include
                IP address, browser type, browser version, pages visited, time and date of visit,
                time spent on pages, and device identifiers.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Tracking Technologies and Cookies
              </h2>

              <p>
                We use Cookies and similar tracking technologies to track activity on Our Service
                and store certain information.
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Session Cookies</strong> – deleted when browser closes.</li>
                <li><strong>Persistent Cookies</strong> – remain on device when offline.</li>
              </ul>
            </section>

            {/* Use of Data */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Use of Your Personal Data
              </h2>

              <ul className="list-disc pl-6 space-y-3">
                <li>To provide and maintain our Service.</li>
                <li>To manage Your Account.</li>
                <li>To contact You via email or phone.</li>
                <li>To provide offers and service updates.</li>
                <li>To manage requests and business transfers.</li>
              </ul>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Retention of Your Personal Data
              </h2>

              <p>
                The Company will retain Your Personal Data only for as long as necessary
                to comply with legal obligations and enforce policies.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Security of Your Personal Data
              </h2>

              <p>
                We strive to use commercially acceptable means to protect Your Personal Data,
                but no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                Children’s Privacy
              </h2>

              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly
                collect data from children.
              </p>
            </section>

            {/* Contact */}
            <section>
  <h2 className="text-2xl font-semibold mb-4 dark:text-white">
    Contact Us
  </h2>

  <p>If you have any questions about this Privacy Policy, You can contact us:</p>

  <ul className="list-disc pl-6 mt-3 space-y-2">
    <li>
      Email: 
      <a 
        href="mailto:brijbhoomiproperties85@gmail.com" 
        className="text-brand-gold ml-1 hover:underline"
      >
        brijbhoomiproperties85@gmail.com
      </a>
    </li>

    <li>
      Phone: 
      <a 
        href="tel:+917300618145" 
        className="text-brand-gold ml-1 hover:underline"
      >
        +91 730-0618-145
      </a>
    </li>

    <li>
      Website: 
      <a 
        href="https://www.vrindavandivinereality.com/contact-us/" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-gold ml-1 hover:underline"
      >
        www.vrindavandivinereality.com/contact-us/
      </a>
    </li>
  </ul>
</section>

          </div>
        </div>

      </SectionWrapper>

      <Footer />
    </>
  );
}