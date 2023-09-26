import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { ValueContext } from "@/pages/value-context";
import { useContext, useState } from "react";
import MobileMenu from "./mobile-menu";

const Header = ( ) => {
  const  siteInfo   = useContext(ValueContext)
  const [open,setOpen] = useState(false)
 
  const openDropDown = (e) => {
   e.preventDefault()
   setOpen(!open)
  }
 

    return(
//  <header class="sticky top-0 z-30  bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 dark:bg-black font-roboto">
<header class="sticky top-0 z-30 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 font-roboto">
 <nav class="flex items-center justify-between md:container px-2 xl:px-72 lg:px-64  mx-auto py-5">
    <ul className="flex items-center gap-4 dark:text-slate-100 ">
        <li>
        <Link class="block font-bold text-1xl px-2" href="/">
           {siteInfo?.site?.siteName}
        </Link>  
        </li>
        <li className="sm:block hidden">
        <Link class="block  text-sm hover:underline" href="/portofolio">
           Portofolio
        </Link>  
        </li>
        <li className="sm:block hidden">
        <a class="block text-sm hover:underline" href="https://github.com/bay-s/portofolio-template" target="_blank">
            <i className="fa fa-github mx-2"></i>
           Source Code
        </a>  
        </li>
    </ul>
      <ul className="flex items-center gap-2 sm:gap-5 ml-auto">  
        <button class="sm:hidden block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-md px-4 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={openDropDown}>
         <i className={`transition-all duration-300 dark:text-white ease-in fa ${open ? 'fa-times' : 'fa-bars'}`}></i>
        </button> 
      <DarkModeToggle />
      </ul>
 
     </nav>
     <MobileMenu open={open} />
</header>       
    )
}

export default Header