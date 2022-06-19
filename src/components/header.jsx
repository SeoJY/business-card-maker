import React, { memo } from 'react';

const Header = memo(({ onLogout }) => (
  <header className="header">
    <img src="images/logo.png" alt="" className="logo" />
    <h1 className="header-title">Business Card Maker</h1>
    { onLogout && <button className="btn btn-small btn-white btn-logout" onClick={onLogout}>Logout</button>}
  </header>
));

export default Header;