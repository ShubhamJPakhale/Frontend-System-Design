import React from "react";

const Header = () => {
  return (
    <div className="text-3xl font-bold bg-gray-700 text-white p-4 flex">
      <span className="ml-2">Welcome to LLD application</span>
      <span className="ml-auto">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Header;
