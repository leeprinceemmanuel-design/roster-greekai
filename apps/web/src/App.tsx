// apps/web/src/App.tsx
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ApplicantsPage from "./pages/ApplicantsPage";
import JobsPage from "./pages/JobsPage";

// The menu is built from this list. To add a page, import it above and add it here.
const pages = { Home: HomePage, Jobs: JobsPage, Applicants: ApplicantsPage };

type PageName = keyof typeof pages;

export default function App() {
  const [current, setCurrent] = useState<PageName>("Home");
  const CurrentPage = pages[current];

  return (
    <div className="app">
      <header>
        <h1>Roster</h1>
        <nav>
          {(Object.keys(pages) as PageName[]).map((name) => (
            <button
              key={name}
              className={name === current ? "active" : ""}
              onClick={() => setCurrent(name)}
            >
              {name}
            </button>
          ))}
        </nav>
      </header>
      <main>
        <CurrentPage />
      </main>
    </div>
  );
}