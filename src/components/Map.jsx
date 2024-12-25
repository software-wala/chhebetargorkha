import React from "react";
import "../styles/map.css";
const Map = () => {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.102090377119!2d85.32407311505904!3d27.717245582792857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1902db8e3a21%3A0x54e3954a4e3f7a4f!2sChhepetar%2C%20Gorkha!5e0!3m2!1sen!2snp!4v1695528079167!5m2!1sen!2snp";

  return (
    <div className="map-container">
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        style={{
          border: "0",
          borderRadius: "10px",
        }}
        title="Company Location - Chhepetar Gorkha"
      />
    </div>
  );
};

export default Map;
