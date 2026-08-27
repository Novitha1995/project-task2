import React from "react";

function Topbar({
  setSidebarOpen,
  collapsed,
  setCollapsed,
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="menu-button mobile-menu"
          onClick={() => setSidebarOpen(true)}
        >  
          ☰
        </button>

        <button
          className="collapse-button"
          onClick={() => setCollapsed(!collapsed)}
          title="Collapse Sidebar"
        >
          ☰
        </button>

        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Novitha!</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="notification">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="top-profile">
          <div className="profile-avatar">NP</div>

          <div className="top-profile-info">
            <strong>Novitha Parthiban</strong>
            <span>Admin</span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Topbar;