import { useEffect, useState } from "react";
import "./Home.css";
import { getCandidates } from "../utility/Axios.js";

function Home({ setCandidate, candidate_id }) {
  useEffect(() => {
    getCandidates()
      .then((response) => {
        setCandidates(response);
      })
      .catch((error) => {});
  });

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [candidates, setCandidates] = useState([]);

  return (
    <div className="MobileWindow">
      <div className="LogIn">
        <h2>Welcome candidate please log in</h2>
        <div className="LogIn_input">
          <label htmlFor="LogIn_id">ID :</label>
          <input
            type="number"
            id="LogIn_id"
            min="0"
            max={candidates.length - 1}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></input>
        </div>
        <div className="LogIn_input">
          <label htmlFor="LogIn_name">NAME :</label>
          <input
            id="LogIn_name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="LogIn_button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (id < candidates.length - 1) {
              if (
                Number(id) === candidates[id].candidate_id &&
                name === candidates[id].candidate_name
              ) {
                setCandidate(candidates[id]);
              }
            }
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
export default Home;
