import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Shield, Eye, Lock, User, Mail, Globe } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy = ({ onBack }: PrivacyPolicyProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-purple-100 shadow-sm"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">AdSkipper Mobile Application</p>
            </div>
          </div>

          {/* Effective Date */}
          <div className="bg-purple-50 rounded-xl p-4 mb-8">
            <div className="flex items-center space-x-2 text-purple-700">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Effective Date: {currentDate}</span>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AdSkipper (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how our mobile application handles your information when you use AdSkipper (the &quot;App&quot;).
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using AdSkipper, you agree to the practices described in this Privacy Policy. If you do not agree, please do not use the App.
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              2. Information We Collect
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Lock className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Personal Data</h3>
              </div>
              <p className="text-green-700">
                AdSkipper does NOT collect, store, or transmit any personal information. We do not require account creation, registration, or any user input that identifies you.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Eye className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">Accessibility Service Data</h3>
              </div>
              <p className="text-blue-700 mb-3">
                Our App uses Android's Accessibility Service API to detect the YouTube skip button and perform automatic clicks. This functionality operates entirely on your device and does not send any data to our servers or third parties.
              </p>
              <p className="text-blue-700 mb-3">
                The accessibility data processed includes:
              </p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4">
                <li>Detection of UI elements (skip button) within the YouTube app</li>
                <li>Screen content analysis to identify when ads are playing</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 font-medium">
                  <strong>Important:</strong> All accessibility data is processed locally on your device in real-time and is never stored, logged, or transmitted.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <User className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Device Information</h3>
              </div>
              <p className="text-gray-700">
                We do not collect device identifiers, IP addresses, or any technical information about your device.
              </p>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              3. How We Use Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we do not collect any personal data, we do not use, process, or share your information in any way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The App's sole function is to detect when the YouTube skip button appears on your screen and simulate a tap on the skip button automatically. All processing happens locally on your device.
            </p>
          </section>

          {/* Data Storage */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              4. Data Storage and Security
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Lock className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-red-800">No Data Storage</h3>
              </div>
              <p className="text-red-700">
                AdSkipper does not store any user data, accessibility information, or usage statistics. Nothing is saved to your device's storage or transmitted to external servers.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-purple-800">Security Measures</h3>
              </div>
              <p className="text-purple-700">
                While we do not collect data, we implement industry-standard security practices in our app development to ensure the App operates safely on your device.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              5. Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AdSkipper does NOT use any third-party services, analytics tools, advertising networks, or tracking technologies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not integrate:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Analytics services (e.g., Google Analytics, Firebase Analytics)</li>
              <li>Advertising networks</li>
              <li>Crash reporting tools</li>
              <li>Any SDKs that collect user data</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              6. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              AdSkipper does not knowingly collect information from children under 13 years of age. Since we do not collect any personal data, the App is safe for all age groups.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              7. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we do not collect or store any personal data, there is no user data to access, modify, or delete.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, you have the following controls:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li><strong>Uninstall the App:</strong> You can remove AdSkipper at any time from your device</li>
              <li><strong>Disable Accessibility Service:</strong> You can revoke accessibility permissions in Android Settings &gt; Accessibility &gt; AdSkipper</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              8. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or AdSkipper's practices, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Email: adskipper@evolvarc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Developer: Jaswanth Satya Dev</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Location: India</span>
              </div>
            </div>
          </section>

          {/* Legal Compliance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mr-3"></span>
              9. Legal Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy complies with Google Play Store requirements for app privacy disclosures, General Data Protection Regulation (GDPR) for EU users, California Consumer Privacy Act (CCPA) for California users, and Information Technology Act, 2000 (India).
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;