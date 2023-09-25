import "../app/globals.css";
import HomepageCard from "./components/HomepageCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  // Get user session token
  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      {session && (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out by link</a>
        </div>
      )}

      {!session && <p>Not signed in</p>}
      <HomepageCard />
    </div>
  );
}
