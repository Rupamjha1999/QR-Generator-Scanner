import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

function Products() {
  const [products, setProducts] = useState([]); // store API data
  const [loading, setLoading] = useState(true); // loading indicator
  const [selectedQR, setSelectedQR] = useState(null); 

  useEffect(() => {
    // Fetch data from MockAPI
    fetch("https://690cb02ba6d92d83e84ef198.mockapi.io/product/qr/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);   // set data to state
        setLoading(false);   // stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // [] runs it once on component load

  

  return (
    <div className='product'>
      <h1>Product List</h1>
      {loading && <h2>Loading...</h2>}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
    <thead>
      <tr style={{ backgroundColor: "#f2f2f2" }}>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Product ID</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Product Name</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>Product Price (₹)</th>
        <th style={{ border: "1px solid #ccc", padding: "8px" }}>QR Code</th>
      </tr>
    </thead>

    <tbody>
      {products.map((p) => (
        <tr key={p.id}>
          <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center" }}>{p.id}</td>
          <td style={{ border: "1px solid #ccc", padding: "8px" }}>{p.name}</td>
          <td style={{ border: "1px solid #ccc", padding: "8px", textAlign: "right" }}>₹{p.price}</td>
           <td
                style={{ border: "1px solid #ccc", padding: "8px", textAlign: "center", cursor: "pointer" }}
                onClick={() => setSelectedQR(`Product: ${p.name}, Price: ₹${p.price}`)}
              >  <QRCode
                  value={`Product: ${p.name},Id: ₹${p.id}, Price: ₹${p.price}`}
                  size={64}
                /></td>
       
        </tr>
      ))}
    </tbody>
  </table>

  
      {/* Popup for larger QR */}
      {selectedQR && (
        <div
          onClick={() => setSelectedQR(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <QRCode value={selectedQR} size={256} />
            <p style={{ textAlign: "center", marginTop: "10px" }}></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
