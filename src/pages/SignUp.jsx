import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border flex flex-col min-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        
        
        <div className="flex flex-col items-center pt-3">
          <h2 className="text-2xl font-bold text-center">Create your PopX Account</h2>
        </div>

       
        <div className="px-6 mt-4 space-y-4">
         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
        </div>

      
        <div className="p-6 mt-4">
          <Link to="/AccountSettings">
            <button className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold">
              Create Account
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Signup;
