"use client"
import Link from "next/link";
import React from "react";

const BtmNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-primary">
      <Link href="/transactions">
        <button className="btm-nav-label">💸</button>
      </Link>
      <Link href="/savings">
        <button className="btm-nav-label">💰</button>
      </Link>
      <Link href="/userhome">
        <button className="btm-nav-label">😊</button>
      </Link>

      <style jsx>{`
        .btm-nav-label {
          font-size: 30px;
          width: 40px; /* Set a fixed width */
          height: 40px; /* Set a fixed height */
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, filter 0.2s;
          border: none;
          background: none;
          cursor: pointer;
        }

        .btm-nav-label:hover {
          transform: scale(1.4);
          filter: brightness(1.2);
        }
      `}</style>
    </nav>
  );
};

export default BtmNav;
