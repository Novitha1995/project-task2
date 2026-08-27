import React from "react";
import DashboardCard from "../components/DashboardCard";
import Profile from "../components/Profile";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="page-header">
        <div>
          <h2>Overview</h2>
          <p>Here's what's happening with your business today.</p>
        </div>

        <button className="date-button">
          📅 Aug 27, 2026
        </button>
      </div>

      <div className="cards-grid">

        <DashboardCard
          title="Total Users"
          value="12,450"
          icon="👥"
          change="12.5%"
          positive={true}
        />

        <DashboardCard
          title="Total Revenue"
          value="$48,560"
          icon="💰"
          change="8.2%"
          positive={true}
        />

        <DashboardCard
          title="Total Orders"
          value="3,240"
          icon="🛒"
          change="5.4%"
          positive={true}
        />

        <DashboardCard
          title="Pending Orders"
          value="124"
          icon="⏳"
          change="2.1%"
          positive={false}
        />

      </div>

      <div className="dashboard-grid">

        <div className="chart-card">
          <div className="chart-header">
            <div>
              <h3>Revenue Overview</h3>
              <p>Monthly revenue performance</p>
            </div>

            <select>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>

          <div className="chart">
            <div className="chart-line">
              <span style={{ height: "35%" }}></span>
              <span style={{ height: "50%" }}></span>
              <span style={{ height: "42%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "55%" }}></span>
              <span style={{ height: "75%" }}></span>
              <span style={{ height: "90%" }}></span>
            </div>

            <div className="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>
        </div>

        <Profile />

      </div>

      <div className="recent-orders">
        <div className="section-header">
          <div>
            <h3>Recent Orders</h3>
            <p>Latest customer orders</p>
          </div>

          <button>View All</button>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1001</td>
                <td>Praveena</td>
                <td>MacBook Pro</td>
                <td>$2,499</td>
                <td>
                  <span className="status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>1002</td>
                <td>Saranya</td>
                <td>iPhone 17</td>
                <td>$1,299</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>1003</td>
                <td>Danushya</td>
                <td>AirPods Pro</td>
                <td>$249</td>
                <td>
                  <span className="status completed">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>1004</td>
                <td>Elakiya</td>
                <td>iPad Pro</td>
                <td>$999</td>
                <td>
                  <span className="status cancelled">
                    Cancelled
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;