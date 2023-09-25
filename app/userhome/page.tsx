import BalanceCard from "./BalanceCard";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
        <div style={{ position: "relative", textAlign: "center" }}>
          <BalanceCard/>
          <div style={{ position: "relative", textAlign: "center" }}>
            <Link href="/help">
              <button className="btn btn-outline btn-primary">
                <span className="btm-nav-label" style={{ fontSize: "15px" }}>
                  Need Help❔
                </span>
              </button>
            </Link>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link href="/usersettings">
              <button className="btm-nav-label text-xl">⚙️</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

