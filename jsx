import React from 'react';

const LoginCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Login to your account</h2>
          <p className="text-gray-600">Enter your email below to login to your account</p>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
        </div>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password" className="font-medium">Password</label>
                <a
                  href="#"
                  className="ml-auto text-sm text-blue-500 underline hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-2 mt-4">
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600">
            Login
          </button>
          <button className="w-full border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
