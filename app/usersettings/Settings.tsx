

import DetailsInput from "./DetailsInput";

export default function Settings() {
    const gradientBackground = "linear-gradient(to bottom, #ffffff,#dedee1)";
    
    return (
      <div style={{ background: gradientBackground, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ color: "white", padding: "20px" }}>
          <DetailsInput/>
        </div>
      </div>
    );
  }
  