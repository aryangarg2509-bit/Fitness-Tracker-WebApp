import React, { useState } from 'react';
import { 
  Camera, 
  Upload, 
  FlaskConical, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Eye,
  Thermometer,
  Clock
} from 'lucide-react';

const QualityTesting: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<any>(null);

  const testTypes = [
    {
      id: 'visual',
      name: 'Visual Inspection',
      icon: Eye,
      description: 'Automated visual defect detection using AI',
      color: 'bg-blue-500'
    },
    {
      id: 'chemical',
      name: 'Chemical Analysis',
      icon: FlaskConical,
      description: 'Chemical composition validation via IoT sensors',
      color: 'bg-green-500'
    },
    {
      id: 'expiry',
      name: 'Expiry Detection',
      icon: Clock,
      description: 'OCR-based expiry date verification',
      color: 'bg-yellow-500'
    },
    {
      id: 'temperature',
      name: 'Storage Conditions',
      icon: Thermometer,
      description: 'Temperature and humidity monitoring',
      color: 'bg-purple-500'
    }
  ];

  const handleTestSubmit = (testType: string) => {
    // Simulate test processing
    setTimeout(() => {
      const mockResults = {
        visual: {
          status: 'passed',
          score: 98.5,
          defects: 0,
          details: 'No visual defects detected. Tablet shape, color, and surface quality within specifications.'
        },
        chemical: {
          status: 'passed',
          score: 99.2,
          composition: 'API: 99.1%, Excipients: Normal',
          details: 'Chemical composition matches reference standards.'
        },
        expiry: {
          status: 'warning',
          expiryDate: '2025-12-15',
          daysUntilExpiry: 45,
          details: 'Product expires in 45 days. Consider inventory rotation.'
        },
        temperature: {
          status: 'passed',
          temperature: '22.5°C',
          humidity: '45%',
          details: 'Storage conditions within acceptable range.'
        }
      };

      setTestResults(mockResults[testType as keyof typeof mockResults]);
    }, 2000);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Quality Testing Center</h1>
        <p className="text-gray-600 mt-1">
          Perform comprehensive quality tests on medicines and consumables
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Test Selection */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Test Type</h3>
          <div className="space-y-3">
            {testTypes.map((test) => (
              <button
                key={test.id}
                onClick={() => setSelectedTest(test.id)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                  selectedTest === test.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${test.color} p-2 rounded-lg`}>
                    <test.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{test.name}</h4>
                    <p className="text-sm text-gray-600">{test.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Test Interface */}
        <div className="lg:col-span-2">
          {selectedTest ? (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {testTypes.find(t => t.id === selectedTest)?.name} Test
              </h3>

              {/* Batch Information */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Batch Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Batch ID:</span>
                    <span className="ml-2 font-medium">B2024-0185</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Product:</span>
                    <span className="ml-2 font-medium">Aspirin 100mg</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Supplier:</span>
                    <span className="ml-2 font-medium">PharmaCorp Ltd</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Quantity:</span>
                    <span className="ml-2 font-medium">10,000 tablets</span>
                  </div>
                </div>
              </div>

              {/* Test Input Area */}
              <div className="mb-6">
                {selectedTest === 'visual' && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Product Images</h4>
                    <p className="text-gray-600 mb-4">Drag and drop images or click to browse</p>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Upload className="h-4 w-4 mr-2" />
                      Select Images
                    </button>
                  </div>
                )}

                {selectedTest === 'chemical' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <FlaskConical className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-blue-900">IoT Sensor Status</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Spectrometer: Connected</div>
                        <div>pH Sensor: Connected</div>
                        <div>HPLC System: Ready</div>
                        <div>NIR Analyzer: Calibrated</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Start Chemical Analysis
                    </button>
                  </div>
                )}

                {selectedTest === 'expiry' && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Scan Package Labels</h4>
                    <p className="text-gray-600 mb-4">OCR will extract expiry dates automatically</p>
                    <button className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                      <Camera className="h-4 w-4 mr-2" />
                      Scan Labels
                    </button>
                  </div>
                )}

                {selectedTest === 'temperature' && (
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <Thermometer className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-purple-900">Environmental Monitoring</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-white rounded">
                        <div className="text-2xl font-bold text-gray-900">22.5°C</div>
                        <div className="text-sm text-gray-600">Temperature</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded">
                        <div className="text-2xl font-bold text-gray-900">45%</div>
                        <div className="text-sm text-gray-600">Humidity</div>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      Generate Storage Report
                    </button>
                  </div>
                )}
              </div>

              {/* Test Results */}
              {testResults && (
                <div className="mb-6 p-4 rounded-lg border">
                  <div className="flex items-center space-x-2 mb-3">
                    {testResults.status === 'passed' && <CheckCircle className="h-6 w-6 text-green-500" />}
                    {testResults.status === 'failed' && <XCircle className="h-6 w-6 text-red-500" />}
                    {testResults.status === 'warning' && <AlertTriangle className="h-6 w-6 text-yellow-500" />}
                    <h4 className="text-lg font-semibold capitalize">Test {testResults.status}</h4>
                  </div>
                  
                  {testResults.score && (
                    <div className="mb-2">
                      <span className="text-gray-600">Quality Score:</span>
                      <span className="ml-2 font-medium">{testResults.score}%</span>
                    </div>
                  )}
                  
                  <p className="text-gray-700">{testResults.details}</p>
                  
                  {testResults.composition && (
                    <div className="mt-2">
                      <span className="text-gray-600">Composition:</span>
                      <span className="ml-2 font-medium">{testResults.composition}</span>
                    </div>
                  )}
                  
                  {testResults.expiryDate && (
                    <div className="mt-2">
                      <span className="text-gray-600">Expires:</span>
                      <span className="ml-2 font-medium">{testResults.expiryDate}</span>
                      <span className="ml-2 text-yellow-600">({testResults.daysUntilExpiry} days)</span>
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={() => handleTestSubmit(selectedTest)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Run Quality Test
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <FlaskConical className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Test Type</h3>
              <p className="text-gray-600">Choose a quality test from the left panel to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualityTesting;