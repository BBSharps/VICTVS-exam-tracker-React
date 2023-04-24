import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Id from "./components/Id";
import { Route, Routes } from "react-router-dom";

function App() {
  const [candidate, setCandidate] = useState({ id: 0 });
  return (
    <div className="App">
      <Header setCandidate={setCandidate} candidate={!!candidate} />
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path={`/${candidate.id}`} element={<Id />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
