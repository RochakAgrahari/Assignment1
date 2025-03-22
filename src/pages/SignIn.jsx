import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border flex flex-col h-screen">
        
     
        <div className="pt-6 pb-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Sign in to your PopX account</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

      
        <div className="px-6 mt-4 space-y-6 flex-grow">
         
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

      
          <div className="text-left">
            <label className="text-sm font-semibold text-purple-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

       
        <div className="p-6">
          <Link to="/AccountSettings">
            <button className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold">
              Login
            </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
