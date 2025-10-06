import React from "react";

const Header = ({ lang, setLang }) => {
  return (
    <header className="flex items-center justify-between bg-gray-700 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">LLD Mastery</h1>

      <nav>
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <a href="/" className="hover:text-gray-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-300 transition-colors">
              Login
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/comments"
              className="hover:text-gray-300 transition-colors"
            >
              Nested-Comments
            </a>
          </li>
        </ul>
      </nav>

      <select
        className="bg-gray-600 text-white text-sm p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </header>
  );
};

export default Header;
