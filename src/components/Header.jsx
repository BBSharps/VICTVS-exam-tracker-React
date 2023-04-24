import "./Header.css";

function Header({ setCandidate, candidate }) {
  return (
    <header id="Header">
      <h1 className="Header_h1">My Exam Day</h1>
      <div className="Header_div">
        <button
          hidden={candidate}
          className="Header_button"
          onClick={(e) => {
            setCandidate(!candidate);
          }}
        >
          log out
        </button>
      </div>
    </header>
  );
}
export default Header;
