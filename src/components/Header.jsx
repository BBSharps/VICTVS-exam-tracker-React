import "./Header.css";

function Header({ candidate }) {
  return (
    <header id="Header">
      <h1 className="Header_h1">Exam Day</h1>

      <button
        hidden={candidate}
        className="Header_button"
        onClick={(e) => {
          window.location.reload();
        }}
      >
        log out
      </button>
    </header>
  );
}
export default Header;
