import React, { useEffect, useState } from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../assets/JsonData/notification.json";

import avatarDefaultImage from "../../assets/images/avatar_default.png";

import userMenus from "../../assets/JsonData/user_menus.json";

const defaultUser = {
  name: "Guest",
  avatar: avatarDefaultImage,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.avatar || avatarDefaultImage} alt="" height="100%" />
    </div>
    <div className="topnav__right-user__name">{user.name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to={item.src} key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  // const curUser = JSON.parse(localStorage.getItem("curUser"));
  const [currentUser] = useState(() => {
    const data = JSON.parse(localStorage.getItem("KEY_USER"));
    return data ?? defaultUser;
  });
  const [currentUserMenus, setCurrentUserMenus] = useState(userMenus);

  useEffect(() => {

    if (currentUser !== defaultUser) {
      setCurrentUserMenus(userMenus.filter((item) => item.content !== "Login"));
    } else {
      setCurrentUserMenus(
        userMenus.filter((item) => item.content !== "Logout")
      );
    }
  }, [currentUser]);

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(currentUser)}
            contentData={currentUserMenus}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
