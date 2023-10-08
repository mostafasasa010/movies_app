import { Link } from "react-router-dom";

function Navbar({ search }) {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="main">
          <Link to={"/"}>
            <img alt="logo" src={require("../imgs/logo.png")} />
          </Link>
          <div className="input">
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              placeholder="أبحث"
            />
            <i className="bx bx-search"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
