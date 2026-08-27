import React, { useState } from "react";

function Sidebar({ sidebarOpen, setSidebarOpen, collapsed }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Users", icon: "👥" },
    { name: "Products", icon: "📦" },
    { name: "Orders", icon: "🛒" },
    { name: "Messages", icon: "💬" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`sidebar 
          ${sidebarOpen ? "mobile-open" : ""}
          ${collapsed ? "collapsed" : ""}
        `}
      >
        <div className="logo-section">
          <div className="logo-icon">N</div>

          {!collapsed && (
            <div className="logo-text">
              <h2>AdminPro</h2>
              <span>Dashboard</span>
            </div>
          )}

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="navigation">
          <p className="menu-title">
            {!collapsed && "MAIN MENU"}
          </p>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveMenu(item.name);
                setSidebarOpen(false);
              }}
              title={collapsed ? item.name : ""}
            >
              <span className="nav-icon">{item.icon}</span>

              {!collapsed && (
                <span className="nav-name">{item.name}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          {!collapsed && (
            <>
              <div className="help-box">
                <div className="help-icon">?</div>
                <div>
                  <strong>Need Help?</strong>
                  <p>Contact support</p>
                </div>
              </div>

              <div className="sidebar-profile">
                <div className="profile-avatar">NP</div>

                <div className="profile-info">
                  <strong>Novitha Parthiban</strong>
                  <span>Administrator</span>
                </div>

                <span>⋮</span>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;