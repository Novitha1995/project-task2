import React from "react";

function Profile() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <h3>Admin Profile</h3>
        <button>⋮</button>
      </div>

      <div className="large-avatar">NP</div>

      <h3>Novitha Parthiban</h3>
      <p>Administrator</p>

      <div className="profile-details">
        <div>
          <span>Email</span>
          <strong>novitha@gmail.com</strong>
        </div>

        <div>
          <span>Phone</span>
          <strong>+91 98765 43210</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>India</strong>
        </div>
      </div>

      <button className="edit-profile">
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;