// src/pages/PrivacyPolicy.tsx
const PrivacyPolicy = () => {
    return (
      <div className="p-8 text-gray-300 bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-green-400">Privacy Policy</h1>
        
        <p className="mb-6">Last Updated: March 2025</p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
          IJ GLOBAL GREEN
          TECHNOLOGY LIMITED - respects your privacy. This policy explains how we collect, use, 
            and protect your personal information when you use our website https://www.ijggtl.com or engage with our services.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email, phone number, address (provided via contact forms or service inquiries).</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited (collected via cookies and analytics tools).</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to service inquiries</li>
            <li>Process transactions</li>
            <li>Improve website functionality</li>
            <li>Send marketing communications (with consent)</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <p className="mb-4">
            We do not sell your data. We may share it with trusted third parties only to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process payments (e.g., Stripe, PayPal)</li>
            <li>Provide cloud hosting services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
          <p className="mb-4">
            We use SSL encryption and secure servers to protect your data. However, no online transmission is 100% secure.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            You may request to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your data</li>
            <li>Opt out of marketing emails</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="mt-4">Contact us at info@ijggtl.com to exercise these rights.</p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p className="mb-4">
            We use cookies for analytics and functionality. Manage preferences via your browser settings.
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
          <p>
            Changes will be posted here. Review this page periodically.
          </p>
        </section>
        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;