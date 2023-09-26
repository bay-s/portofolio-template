import Link from "next/link"

 
const MobileMenu  = ({open}) => {

    return(
        <div
  className={`block ${open ? 'max-h-[500px]' : 'max-h-0' } transition-max-h duration-300 overflow-hidden text-blue-gray-900 transition-max-h duration-500 ease-in-out lg:hidden  shadow`}
>
<div class="container mx-auto pb-2 ">
<ul class="mt-2 mb-4 flex flex-col items-start gap-2 p-2 px-4">
        <li className="w-full hover:bg-slate-600 bg-opacity-30 p-2 rounded">
        <Link class="block  text-sm hover:underline dark:text-white" href="/portofolio">
           Portofolio
        </Link>  
        </li>
        <li className="w-full hover:bg-slate-600 bg-opacity-50 p-2 rounded">
        <a class="block text-sm hover:underline dark:text-white" href="https://github.com/bay-s/portofolio-template" target="_blank">
            <i className="fa fa-github mr-2"></i>
           Source Code
        </a>  
        </li>
</ul>
  </div>
 </div>
    )
}

export default MobileMenu