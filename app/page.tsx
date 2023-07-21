"use client";
import { GEL } from "@westpac/core";
import wbc from "@westpac/wbc";
import { WBCLogo } from "@westpac/symbol";

export default function Home() {
  return (
    <GEL brand={wbc}>
      <div>
        Welcome Home <WBCLogo align="center" copyrightYear="2023" />
        <button className="btn btn-primary">Button</button>
      </div>
    </GEL>
  );
}
