import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EditProfileModal from "./EditProfileModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserProfileComponent = () => {
  const [userdata, setUserdata] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/blog/welcome", {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 401) {
        // Redirect to login if unauthorized
        navigate("/login");
      } else if (res.ok) {
        const data = await res.json();
        console.log(data);
        setUserdata(data.user);
      } else {
        console.error("Unexpected error:", res.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSaveProfile = (updatedData) => {
    console.log("Updated data: ", updatedData);
    // Save updated data, maybe via an API request to update the profile
    setUserdata((prev) => ({
      ...prev,
      username: updatedData.username,
      phoneNumber: updatedData.phoneNumber,
    }));
    setIsModalOpen(false); // Close modal after saving
  };

  useEffect(() => {
    fetchProfile();
  }, []); // Prevent infinite requests with an empty dependency array

  if (!userdata) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <div className="max-w-sm bg-white shadow-xl rounded-lg text-gray-900">
        {/* Cover Image */}
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
            alt="Cover"
          />
        </div>

        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={`http://localhost:4000/uploads/${userdata.profilePic
              .split("\\")
              .pop()}`}
            alt={userdata.username}
          />
        </div>

        {/* User Info */}
        <div className="text-center mt-4">
          <h2 className="font-semibold text-xl">{userdata.username}</h2>
          <p className="text-gray-500">{userdata.email || "N/A"}</p>
        </div>

        {/* Stats */}
        <ul className="py-4 text-gray-700 flex justify-around">
          <li className="flex flex-col items-center">
            <span>⭐</span>
            <span>{userdata.followers || 0}</span>
          </li>
          <li className="flex flex-col items-center">
            <span>👍</span>
            <span>{userdata.likes || 0}</span>
          </li>
          <li className="flex flex-col items-center">
            <FaEye />
            <span>{userdata.views || 0}</span>
          </li>
        </ul>
        <div className="border-t p-4 flex">
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal on click
            className="w-1/2 mx-auto block rounded-full bg-gray-900 text-white font-semibold px-6 py-2 hover:bg-gray-700 transition duration-300"
          >
            Edit Profile
          </button>
          <button className="w-1/2 mx-auto block rounded-full bg-gray-900 text-white font-semibold px-6 py-2 hover:bg-gray-700 transition duration-300">
            Change Password
          </button>
        </div>
      </div>

      {/* Modal to Edit Profile */}
      <EditProfileModal
        fetchProfile={fetchProfile}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close the modal
        onSave={handleSaveProfile} // Pass save handler
        userdata={userdata} // Pass userdata to modal
      />
      <ToastContainer />
    </div>
  );
};

export default UserProfileComponent;
