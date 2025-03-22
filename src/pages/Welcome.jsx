import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white flex flex-col justify-end p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm h-screen text-center border border-gray-200">
        
        <div className="mt-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <Link to="/signup">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-200 shadow-md">
              Create Account
            </button>
          </Link>

          <Link to="/signin">
            <button className="w-full bg-purple-200 hover:bg-purple-300 text-purple-700 py-3 rounded-lg mt-4 font-semibold transition duration-200 shadow-md">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
