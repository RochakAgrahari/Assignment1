import { useState } from "react";
import { Camera } from "lucide-react";

const AccountSettings = () => {
  const [user] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
    profilePic: "https://randomuser.me/api/portraits/women/79.jpg",
  });

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 px-4">
      {/* Main Container - Takes Full Height */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md border border-gray-200 h-screen flex flex-col">

        {/* Top 50% Section */}
        <div className="h-1/2">
          {/* Header Section */}
          <div className="p-4 border-b bg-white">
            <h2 className="text-lg font-semibold text-gray-700">Account Settings</h2>
          </div>

          {/* Profile & User Info Section */}
          <div className="flex items-center p-4 space-x-4">
            {/* Profile Picture */}
            <div className="relative w-16 h-16">
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full border"
              />
              {/* Camera Icon for Upload */}
              <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                <Camera className="w-4 h-4 text-white" />
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* User Info */}
            <div>
              <h3 className="text-md font-semibold">{user.name}</h3>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="p-4 border-t bg-white">
            <p className="text-gray-600 text-sm">{user.bio}</p>
          </div>
        </div>

        {/* Bottom 50% - Empty Space */}
        <div className="h-1/2 bg-gray-50"></div>

      </div>
    </div>
  );
};

export default AccountSettings;
