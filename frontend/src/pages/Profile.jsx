import MyOrders from "./MyOrders";
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="profile-page">
      <div className="profile-layout">

        {/* Left Section */}
        <div className="profile-sidebar">
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Right Section */}
        <div className="profile-content">
          <MyOrders />
        </div>

      </div>
    </div>
  );
};

export default Profile