
import { BtmNav } from "../components/BtmNav";
import DateDisplay from "./DateDisplay";
import Table from "./Table";

export default function Transactions() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <nav>
          {/* Navigation content here */}
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
          <Table />
        </div>
        <BtmNav />
      </div>
    </div>
  );
}
