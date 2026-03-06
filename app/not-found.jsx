// @flow strict

import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-gray-300">Page Not Found</p>
      <p className="mt-2 text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <p className="mt-4 text-sm text-gray-500">Use the button below to open your portfolio homepage.</p>
      <Link className="mt-6 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline font-semibold"
        role="button"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default page;