import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-6 px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0 lg:mr-4">
            <p className="dark:text-gray-200">
              © 2024 Astro Data Hub. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
              <li>
                <a
                  href="mailto:sujithasrikanthan@gmail.com"
                  className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-300"
                >
                  Email: sujithasrikanthan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94742065382"
                  className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-300"
                >
                  Phone: +94 206 5382
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
