"use client"
import { GEL } from "@westpac/core";
import wbc from "@westpac/wbc";
import "../app/globals.css";
import HomepageCard from "./components/HomepageCard";
import BtmNav from "./components/BtmNav";


export default function Home() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <GEL brand={wbc}>        
           <HomepageCard/>
          <BtmNav/>
      </GEL>
    </div>
  );
}
