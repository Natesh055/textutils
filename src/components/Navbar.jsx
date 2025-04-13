import React from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">
          {props.heading}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                {props.about}
              </a>
            </li>
          </ul>
            {/* <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button> */}
            <div className={`form-check form-switch text-${props.mode=='light'?'#042743':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode=='light'?'dark':'light'} Mode</label>
</div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  heading: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = {
    heading: "Set Heading",
    about: "About Text"
  };
  

export default Navbar;
