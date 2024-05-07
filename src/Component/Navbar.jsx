import React from "react";

const Navbar = ({ setCategory }) => {
  // Define an array of category names
  const categories = ["technology", "business", "health", "sports", "entertainment"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-danger">News Bite</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Use map to dynamically create navigation items */}
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                {/* onClick event handler to set the category */}
                <div className="nav-link" onClick={() => setCategory(category.toLowerCase())} style={{ cursor: 'pointer' }}>
                  {category}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
