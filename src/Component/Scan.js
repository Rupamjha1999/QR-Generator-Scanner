import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result?.text || result);
      setShowScanner(false); // Close scanner after successful scan
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30vh",minHeight:"90vh" }}>
      {!showScanner ? (
        <button
          onClick={() => setShowScanner(true)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          📷 Scan QR Code
        </button>
      ) : (
        <div>
          <QrReader
            constraints={{ video: { facingMode: "environment" } }} // Use rear camera
            onResult={(result, error) => {
              if (result) handleScan(result);
              if (error) handleError(error);
            }}
            style={{
              width: "100%", // Full width for mobile
              maxWidth: "400px",
              margin: "20px auto",
              borderRadius: "10px",
            }}
          />
          <button
            onClick={() => setShowScanner(false)}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {scanResult && (
        <div style={{ marginTop: "30vh" }}>
          <h3>✅ Scan Result:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
