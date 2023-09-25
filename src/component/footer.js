import { ValueContext } from "@/pages/value-context"
import { useContext } from "react"

const Footer = () => {
    const date = new Date()
    const {site} = useContext(ValueContext)
 
    return(
        <footer className="flex justify-between py-6 md:container px-2 xl:px-72 lg:px-64  mx-auto">
           <p className="break-words whitespace-pre-wrap dark:text-slate-100 font-medium font-roboto text-xs">© {date.getFullYear()} {site?.siteName}. All Rights Reserved. </p>
           <ul className="flex items-center gap-3">
            <li>
            <a href="https://github.com/bay-s" className="py-2  px-3 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-teal-300 dark:border-gray-600 dark:hover:bg-gray-700" target="_blank">
           <i className="fa fa-github "></i>
          </a>
            </li>
            <li>
            <a href="https://www.instagram.com/bays______/?next=%2F" className="py-2  px-3 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-teal-300 dark:border-gray-600 dark:hover:bg-gray-700" target="_blank">
           <i className="fa fa-instagram "></i>
          </a>
            </li>
           </ul>
        </footer>
    )
}

export default Footer