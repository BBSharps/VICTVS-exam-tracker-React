import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [candidate, setCandidate] = useState(false);
  return (
    <div className="App">
      <Header setCandidate={setCandidate} candidate={!!candidate} />
    </div>
  );
}

export default App;
