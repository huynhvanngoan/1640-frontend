import React from "react";

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center ">
      <div className="bg-[url('/hinh-nen-slide.jpg')] lg:block  md:w-1/2 xl:w-2/3 h-screen w-1/2 sm:w"></div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12  flex justify-center">
        <div className="w-full h--100 top-5">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Reset Password
          </h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your new password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700"> Confirm Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

           
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Reset Password
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Go back to{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;