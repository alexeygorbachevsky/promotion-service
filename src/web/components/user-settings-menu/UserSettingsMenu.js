import React from "react";
import styled from "styled-components";

import MenuIcon from "assets/icons/menu-icon24.svg";

const Wrapper = styled.div``;

const UserSettings = styled.div``;

const UserSettingsMenu = () => (
  <Wrapper>
    <MenuIcon />
    <UserSettings />
  </Wrapper>
);

// <div className="user">
//     <Email>{auth && auth.email}</Email>
//     <img className="logout-icon" src={logout} alt="Logout icon" />
//     <a className="logout-link" href="/" onClick={logoutHandler}>
//         Logout
//     </a>
// </div>

export default UserSettingsMenu;
