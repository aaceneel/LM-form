import React from 'react';

const Received: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h1 className="text-4xl font-bold mb-6">Application Received!</h1>
        <p className="text-xl mb-8">
          Thank you for submitting your application. We have received your information and will review it carefully.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
          <ul className="text-left space-y-3">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">✓</span>
              <span>We'll review your application within 2-3 business days</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">✓</span>
              <span>You'll receive an email confirmation with your application details</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">✓</span>
              <span>Our team will contact you if we need any additional information</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">✓</span>
              <span>We'll notify you of our decision via email</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-gray-300">
            If you have any questions about your application, please don't hesitate to contact us.
          </p>
          <a 
            href="/" 
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Received;
