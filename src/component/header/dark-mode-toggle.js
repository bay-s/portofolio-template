import { useEffect, useState } from "react";

const DarkModeToggle = () => {
 
  const dark = typeof localStorage !== 'undefined' ? localStorage.getItem("isDarkMode") : null;
  const [isDarkMode, setIsDarkMode] = useState(
    () => (dark === "true") || false
  );
  
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
    return (
      <button
        type="button"
        class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-md px-4 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" 
        onClick={() => setIsDarkMode((prev) => !prev)}
       >
        <i className={isDarkMode ?  "fa fa-moon-o" : "fa fa-sun-o"} aria-hidden="true"></i>
      </button>
    );
}
export default DarkModeToggle
// "py-1.5 font-bold px-3 text-md sm:text-xl text-slate-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
 