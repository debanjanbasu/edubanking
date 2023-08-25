import { GEL } from "@westpac/core";
import { WBCLogo } from "@westpac/symbol";
import wbc from "@westpac/wbc";

export const WLogo = () => {
  return (
    <GEL brand={wbc}>
      <div style={{ position: "relative" }}>
          <WBCLogo copyrightYear="2023" align="left"/>
        </div>
    </GEL>
  );
};
