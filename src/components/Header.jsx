import "./Header.css";

function Header({ candidate }) {
  return (
    <header id="Header">
      <h1 className="Header_h1">Exam Day</h1>
      <div className="Header_div">
        <button
          hidden={candidate}
          className="Header_button"
          onClick={(e) => {
            window.location.reload();
          }}
        >
          log out
        </button>
      </div>
    </header>
  );
}
export default Header;
