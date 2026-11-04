// apps/web/src/pages/HomePage.tsx
import { useEffect, useState } from "react";

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState("checking...");

  // Ask the API if it's running when this page opens.
  useEffect(() => {
    fetch("http://localhost:3000/health")
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("not reachable"));
  }, []);

  return (
    <section>
      <h2>Welcome to Roster</h2>
      <p>A recruitment platform by Group GreekAI.</p>
      <p>
        API status: <strong>{apiStatus}</strong>
      </p>
    </section>
  );
}
