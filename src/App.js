import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Id from "./components/Id";

function App() {
  const [candidate, setCandidate] = useState({
    candidate_id: 101,
  });

  return (
    <div className="App">
      <Header
        setCandidate={setCandidate}
        candidate={candidate.candidate_name === undefined}
      />
      <main id="main">
        {candidate.candidate_name === undefined ? (
          <Home setCandidate={setCandidate} />
        ) : (
          <Id />
        )}
      </main>
    </div>
  );
}

export default App;
