import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Malicious = () => {
  const [predictionResult, setPredictionResult] = useState({
    yesCount: 0,
    noCount: 0,
  });

  const handleOptionSelect = (option) => {
    if (option === 'yes') {
      setPredictionResult((prevResult) => ({
        ...prevResult,
        yesCount: prevResult.yesCount + 1,
      }));
    } else if (option === 'no') {
      setPredictionResult((prevResult) => ({
        ...prevResult,
        noCount: prevResult.noCount + 1,
      }));
    }
  };

  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 h-screen">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
        {/* First card: Logo and Image Section */}
        <div className="flex flex-col items-center justify-center p-8 rounded-md shadow-lg bg-white w-full md:w-96 flex-shrink-0 transition duration-300 transform hover:scale-105">
          <img
            src="/malicious.webp" // Replace with actual image URL
            alt="Malicious Logo"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Malicious</h1>
          <p className="text-gray-600 text-center">Let us know your thoughts on the prediction!</p>
        </div>

        {/* Second Card: Prediction and Results */}
        <div className="flex flex-col p-8 rounded-md shadow-lg bg-white w-full md:w-96 ml-4 flex-shrink-0 transition duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Was the prediction accurate?</h2>
          <div className="flex justify-center mb-4">
            <button
              className="flex items-center justify-center px-4 py-3 rounded-full bg-green-700 text-white mr-2 transition duration-300 hover:bg-green-800 hover:shadow-md"
              onClick={() => handleOptionSelect('yes')}
            >
              <FaCheckCircle className="mr-2" />
              Yes
            </button>
            <button
              className="flex items-center justify-center px-4 py-3 rounded-full bg-red-700 text-white transition duration-300 hover:bg-red-800 hover:shadow-md"
              onClick={() => handleOptionSelect('no')}
            >
              <FaTimesCircle className="mr-2" />
              No
            </button>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FaCheckCircle className="mr-2 text-green-700" />
              Yes: {predictionResult.yesCount}
            </div>
            <div className="flex items-center justify-center">
              <FaTimesCircle className="mr-2 text-red-700" />
              No: {predictionResult.noCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Malicious;
