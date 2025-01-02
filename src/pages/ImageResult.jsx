import React from 'react'
import bg_slider from "../assets/bg-removal-slider.png"

const ImageResult = () => {
 return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <header style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Free Background Remover</h1>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Remove backgrounds from any image in just one click with Fotor AI background remover. Make
          transparent backgrounds instantly for free!
        </p>
      </header>
      <main style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <img
          src={bg_slider}
          alt="Background Remover Example"
          style={{ maxWidth: "500px", borderRadius: "8px", width: "500px" }}
        />
        <div
          style={{
            border: "2px dashed #ddd",
            borderRadius: "8px",
            padding: "20px",
            maxWidth: "300px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Drag and drop your image here</h2>
          <button
            style={{
              backgroundColor: "#4A90E2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Upload Image
          </button>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
            Paste image (Ctrl V) or <a href="/url" style={{ color: "#4A90E2" }}>URL</a>
          </p>
          <p style={{ fontSize: "12px", color: "#aaa" }}>Supported formats: JPG, JPEG, PNG, WebP</p>
        </div>
      </main>
    </div>
  );
}

export default ImageResult