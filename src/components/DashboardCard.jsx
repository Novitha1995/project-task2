import React from "react";

function DashboardCard({
  title,
  value,
  icon,
  change,
  positive,
}) {
  return (
    <div className="dashboard-card">
      <div className="card-top">
        <div>
          <p>{title}</p>
          <h2>{value}</h2>
        </div>

        <div className="card-icon">
          {icon}
        </div>
      </div>

      <div
        className={`card-change ${
          positive ? "positive" : "negative"
        }`}
      >
        {positive ? "↑" : "↓"} {change}
        <span> from last month</span>
      </div>
    </div>
  );
}

export default DashboardCard;