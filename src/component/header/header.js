import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import { ValueContext } from "@/pages/value-context";
import { useContext } from "react";

const Header = ({openModal,openSidebar}) => {
  const  siteInfo   = useContext(ValueContext)
    console.log(siteInfo);
    return(
//  <header class="sticky top-0 z-30  bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 dark:bg-black font-roboto">
<header class="sticky top-0 z-30 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 font-roboto">
 <nav class="flex items-center justify-between md:container px-2 xl:px-72 lg:px-64  mx-auto py-5">
    <ul className="flex items-center gap-4 dark:text-slate-100">
        <li>
        <Link class="block font-bold text-1xl px-2" href="/">
           {siteInfo?.site?.siteName}
        </Link>  
        </li>
        <li>
        <Link class="block  text-sm hover:underline" href="/portofolio">
           Portofolio
        </Link>  
        </li>
 
    </ul>
      <ul className="flex items-center gap-2 sm:gap-5 ">   
      <DarkModeToggle />
      </ul>
 
         </nav>
</header>       
    )
}

export default Header