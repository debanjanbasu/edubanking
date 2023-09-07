
import styles from "./BtmNav.module.css"
import Link from "next/link";

function BtmNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-primary">
      <Link href="/transactions">
        <button className={styles["btm-nav-label"]}>💸</button>
      </Link>
      <Link href="/savings">
        <button className={styles["btm-nav-label"]}>💰</button>
      </Link>
      <Link href="/userhome">
        <button className={styles["btm-nav-label"]}>😊</button>
      </Link>
    </nav>
  );
}

export { BtmNav };
