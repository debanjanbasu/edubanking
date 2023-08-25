"use client"
import { WLogo } from "./Wlogo";

export default function Navbar() {
  const handleLinkClick = () => {
    if (window.confirm("Home - Press OK to go there")) {
      // Navigate to the home page using Next.js routing
      window.location.href = "/";
    }
  };

  return (
    <nav className="bg-white p-4 flex flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <div
        style={{
          background: "white",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleLinkClick}
      >
        <WLogo/>
        <h1>elcome to Westpac Edu</h1>
        <div className="avatar online" style={{ marginLeft: "30px" }}>
          <div className="w-10 rounded-full">
            <img src="https://api.dicebear.com/6.x/adventurer/svg?seed=George" />
          </div>
        </div>
      </div>
    </nav>
  );
}

