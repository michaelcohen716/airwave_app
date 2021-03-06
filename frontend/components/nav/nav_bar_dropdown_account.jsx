import React from 'react';

const NavBarDropdownAccount = ({currentUser, logout, openModal}) => {

  const usernameOrNot = currentUser === null ? "LOG IN" : (currentUser.username);

  const showAccountDropdown = currentUser ?
    (<div>
      <button className="dropdown-button">
        <span className="username">{usernameOrNot}</span>
      </button>
      <div className="dropdown-content ">
        <div className="dropdown-content-holder account-dropdown-holder">

          <div className="account-dropdown-expand" id="hover-longer">
            <button className="dropdown-content-link dulled" id="hover-longer">
              Watchlist
            </button>
            <button className="dropdown-content-link dulled">
              History
            </button>
            <button className="dropdown-content-link dulled">
              Profiles
            </button>
          </div>

          <div className="account-dropdown-expand">
            <button className="dropdown-content-link dulled">
              Account
            </button>
            <button className="dropdown-content-link dulled">
              Help
            </button>
            <button className="dropdown-content-link" onClick={logout} >
              Logout
            </button>
          </div>

        </div>
      </div>
    </div>
  ) :
    (<div>
      <button className="dropdown-button" onClick={(e)=>openModal("login")}>
        <span className="username">{usernameOrNot}</span>
      </button>
    </div>
  );

  return (
    <span className="banner-dropdown">
      {showAccountDropdown}
    </span>
  );

}

export default NavBarDropdownAccount;
