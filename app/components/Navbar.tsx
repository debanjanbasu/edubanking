"use client";
import { GEL } from "@westpac/core";
import wbc from "@westpac/wbc";
import { WLogo } from "./Wlogo";
import Image from "next/image";

const avatarLoader = ({ src }) => {
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${src}`;
};

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
        <GEL brand={wbc}>
          <WLogo />
        </GEL>
        <h1>elcome to Westpac Edu</h1>
        <div className="avatar online" style={{ marginLeft: "30px" }}>
          <div className="w-10 rounded-full">
            <Image
              loader={avatarLoader}
              src="George"
              alt={"Avatar"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
