import React, { useState } from 'react';
import { 
  QrCode, 
  Search, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Package,
  Calendar,
  Building
} from 'lucide-react';

const PublicVerification: React.FC = () => {
  const [verificationMode, setVerificationMode] = useState<'qr' | 'manual'>('qr');
  const [searchQuery, setSearchQuery] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerification = async () => {
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      const mockResult = {
        status: 'authentic',
        product: {
          name: 'Aspirin 100mg Tablets',
          batchId: 'B2024-0185',
          manufacturer: 'PharmaCorp Ltd',
          expiryDate: '2025-12-15',
          productionDate: '2024-01-15',
          qualityScore: 98.5,
          certificationStatus: 'FDA Approved'
        },
        verification: {
          timestamp: new Date().toLocaleString(),
          verificationId: 'VER-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          blockchainConfirmed: true
        }
      };
      
      setVerificationResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Medicine Verification Portal</h1>
        <p className="text-gray-600 mt-1">
          Verify the authenticity and quality of medicines and consumables
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Verification Mode Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Verification Method</h3>
          <div className="flex space-x-4">
            <button
              onClick={() => setVerificationMode('qr')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                verificationMode === 'qr'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <QrCode className="h-5 w-5" />
              <span>QR Code Scan</span>
            </button>
            <button
              onClick={() => setVerificationMode('manual')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                verificationMode === 'manual'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Search className="h-5 w-5" />
              <span>Manual Search</span>
            </button>
          </div>
        </div>

        {/* Verification Interface */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {verificationMode === 'qr' ? (
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4">
                <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Scan QR Code</h4>
                <p className="text-gray-600 mb-4">
                  Use your device camera to scan the QR code on the medicine package
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <QrCode className="h-5 w-5 mr-2" />
                  Start Camera
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Manual Verification</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Batch ID or Product Code
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter batch ID (e.g., B2024-0185)"
                  />
                </div>
                <button
                  onClick={handleVerification}
                  disabled={!searchQuery || isLoading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Verifying...' : 'Verify Medicine'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Verification Results */}
        {verificationResult && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-6">
              {verificationResult.status === 'authentic' && (
                <>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">Medicine Verified</h3>
                    <p className="text-green-600">This product is authentic and safe</p>
                  </div>
                </>
              )}
              {verificationResult.status === 'suspicious' && (
                <>
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-700">Verification Warning</h3>
                    <p className="text-yellow-600">Please verify with additional sources</p>
                  </div>
                </>
              )}
              {verificationResult.status === 'counterfeit' && (
                <>
                  <XCircle className="h-8 w-8 text-red-500" />
                  <div>
                    <h3 className="text-xl font-semibold text-red-700">Counterfeit Detected</h3>
                    <p className="text-red-600">This product may be fake or dangerous</p>
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Product Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Product Name:</span>
                    <span className="ml-2 font-medium">{verificationResult.product.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Batch ID:</span>
                    <span className="ml-2 font-medium">{verificationResult.product.batchId}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Manufacturer:</span>
                    <span className="ml-2 font-medium">{verificationResult.product.manufacturer}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Quality Score:</span>
                    <span className="ml-2 font-medium text-green-600">
                      {verificationResult.product.qualityScore}%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Dates & Certification
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Production Date:</span>
                    <span className="ml-2 font-medium">{verificationResult.product.productionDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Expiry Date:</span>
                    <span className="ml-2 font-medium">{verificationResult.product.expiryDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Certification:</span>
                    <span className="ml-2 font-medium text-green-600">
                      {verificationResult.product.certificationStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Verification Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Verification ID:</span>
                  <div className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                    {verificationResult.verification.verificationId}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Timestamp:</span>
                  <div className="font-medium">{verificationResult.verification.timestamp}</div>
                </div>
                <div>
                  <span className="text-gray-600">Blockchain Status:</span>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600">Confirmed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Report Issues:</strong> If you suspect this product is counterfeit or have 
                quality concerns, please contact your local health authority or our fraud hotline 
                at +1-800-MEDICINE.
              </p>
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <Shield className="h-8 w-8 text-blue-600 mb-3" />
            <h4 className="font-semibold text-blue-900 mb-2">Why Verify Medicines?</h4>
            <p className="text-blue-800 text-sm">
              Counterfeit medicines pose serious health risks. Our verification system uses 
              blockchain technology and AI to ensure medicine authenticity and safety.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <Building className="h-8 w-8 text-green-600 mb-3" />
            <h4 className="font-semibold text-green-900 mb-2">Trusted by Healthcare</h4>
            <p className="text-green-800 text-sm">
              Used by hospitals, pharmacies, and healthcare providers worldwide to ensure 
              patient safety and medication quality standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicVerification;