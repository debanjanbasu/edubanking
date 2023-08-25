"use client"

import Link from "next/link"



export default function NavbtnUser() {
    return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-secondary">
      <Link href="/transactions">
        <span className="btm-nav-label" style={{ fontSize: "40px" }}>📃</span>
      </Link>
      <Link href="/">
        <span className="btm-nav-label" style={{ fontSize: "40px" }}>🏠</span>
      </Link>
      <Link href="/savings">
        <span className="btm-nav-label" style={{ fontSize: "40px" }}>💰</span>
      </Link>
      <Link href="/userhome">
        <span className="btm-nav-label" style={{ fontSize: "40px" }}>😊</span>
      </Link>
    </nav>
    )
}