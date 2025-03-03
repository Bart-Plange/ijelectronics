// src/pages/TermsAndConditions.tsx
const TermsAndConditions = () => {
    return (
      <div className="max-w-4xl mx-auto p-8 text-gray-300 bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-blue-400">Terms & Conditions</h1>
        
        <p className="mb-6">Last Updated: [Date]</p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By using [Website URL] ("the Site"), you agree to these Terms. Do not use the Site if you disagree.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="mb-4">
            [Company Name] provides electrical services, including streetlight installation, traffic system maintenance, 
            and smart city infrastructure solutions. All services are subject to separate service agreements.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            All content (logos, text, images) is owned by [Company Name]. Unauthorized use is prohibited.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimers</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Services are provided "as-is" without warranties.</li>
            <li>We do not guarantee uninterrupted or error-free Site access.</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            We are not liable for indirect, incidental, or consequential damages arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service interruptions</li>
            <li>Unauthorized data access</li>
            <li>Third-party actions</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site for illegal purposes</li>
            <li>Attempt to hack or disrupt services</li>
            <li>Submit false information</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. External Links</h2>
          <p className="mb-4">
            We are not responsible for content on third-party websites linked from the Site.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate access to the Site for violations of these Terms.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of [State/Country].
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p>
            Updates will be posted here. Continued use constitutes acceptance.
          </p>
        </section>
      </div>
    );
  };
  
  export default TermsAndConditions;