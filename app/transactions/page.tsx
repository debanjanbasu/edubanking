"use client"
import { GEL } from "@westpac/core";
import wbc from "@westpac/wbc";

import DateDisplay from "./DateDisplay";
import BtmNav from "../components/BtmNav";
import TransTable from "./TransTable";
import Table from "./Table";

export default function Transactions() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <GEL brand={wbc}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <nav>
            {/* Your navigation content here */}
          </nav>
          <div
            style={{
              maxWidth: "calc(100% - 60px)",
              padding: "2px",
              marginTop: "5px",
            }}
          >
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              Transactions
              <DateDisplay />
            </div>
            
            <Table/>
          </div>
          <BtmNav />
        </div>
      </GEL>
    </div>
  );
}
