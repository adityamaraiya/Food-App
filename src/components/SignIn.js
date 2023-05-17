import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center  bg-emerald-200">
      <div className="w-96 rounded-md bg-white p-6 shadow-lg">
        <h1 className="block text-center text-2xl font-semibold">
          <i class="fa-solid fa-user"></i> Sign In
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className="mb-2 block text-base">Email Address</label>
          <input
            className="w-full border px-2 py-1 text-base focus:border-gray-500 focus:outline-none focus:ring-0"
            type="text"
            name="email"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="mt-3">
          <label className="mb-2 block text-base">Password</label>
          <input
            className="w-full border px-2 py-1 text-base focus:border-gray-500 focus:outline-none focus:ring-0"
            type="text"
            name="email"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <input type="checkbox" />
            <label className="pl-1">Remember Me</label>
          </div>
          <div>
            <Link to="#" className="font-semibold text-indigo-500">
              Forgot Password
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <button className="w-full rounded-md border-2 border-indigo-500 bg-indigo-500 py-1 font-semibold text-white hover:bg-transparent hover:text-indigo-500">
            Sign In
          </button>
        </div>
        <div className="mt-3">
          <span>
            Didn't have an account ? Click to{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-500 hover:underline"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
