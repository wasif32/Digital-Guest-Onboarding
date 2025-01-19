import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/navbar.css"; // External CSS file

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Used for navigation

  const handleLogout = () => {
    // Remove user and token from sessionStorage
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    // Redirect to the homepage or login page after logout
    navigate("/"); // You can change this path to your desired route
  };

  return (
    <nav>
      <div className="navbar">
        {/* Left-aligned "Welcome" */}
        <div className="navbar-left">
          {[
            "/main-admin/dashboard",
            "/main-admin/dashboard/add-hotel",
            "/main-admin/dashboard/view-hotels",
            "/main-admin/dashboard/view-hotels/qr",
          ].includes(location.pathname) ? (
            <Link to="/main-admin/dashboard" className="nav-link">
              Welcome
            </Link>
          ) : [
              "/guest-admin/dashboard",
              "/guest-admin/dashboard/view-guest",
            ].includes(location.pathname) ? (
            <Link to="/guest-admin/dashboard" className="nav-link">
              Welcome
            </Link>
          ) : null}
        </div>

        {/* Right-aligned links */}
        <ul className="navbar-right">
          {location.pathname === "/guest-admin/dashboard/view-guest" ? (
            // Render only Logout for this specific route
            <li>
              <Link to="/" className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : location.pathname === "/guest-admin/dashboard" ? (
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
                <Link to="/" className="nav-link" onClick={handleLogout}>
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
                <Link to="/" className="nav-link" onClick={handleLogout}>
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
