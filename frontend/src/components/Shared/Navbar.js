import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.css"; // External CSS file

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="navbar">
        {/* Left-aligned "Welcome" */}
        <div className="navbar-left">
          <Link to="/guest-admin/dashboard" className="nav-link">
            Welcome
          </Link>
        </div>

        {/* Right-aligned links */}
        <ul className="navbar-right">
          {location.pathname === "/guest-admin/dashboard" ? (
            <>
              <li>
                <Link
                  to="/guest-admin/dashboard/view-guest"
                  className="nav-link"
                >
                  View Guests
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              {location.pathname !== "/main-admin/dashboard/add-hotel" && (
                <li>
                  <Link
                    to="/main-admin/dashboard/add-hotel"
                    className="nav-link"
                  >
                    Add Hotel
                  </Link>
                </li>
              )}
              {location.pathname !== "/main-admin/dashboard/view-hotels" && (
                <li>
                  <Link
                    to="/main-admin/dashboard/view-hotels"
                    className="nav-link"
                  >
                    View Hotels
                  </Link>
                </li>
              )}
              <li>
                <Link to="/" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
