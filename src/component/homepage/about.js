
const About = ({about}) => {
    console.log(about);
    return(
    <article className="flex flex-col gap-7 px-1  ">
       <ul className="flex flex-col gap-3 items-start" data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true">
         <li> <h3 className="font-bold text-xl capitalize border-b-4 pb-2 rounded  border-purple-400 dark:text-teal-300">about</h3></li>
         <li  className="prose prose-a:hover:underline prose-a:dark:text-teal-300 prose-p:dark:text-slate-50 prose-li:dark:text-slate-100 dark:marker:text-teal-300 prose-list leading-7 tracking-wide" dangerouslySetInnerHTML={{__html:about?.description}}/>   
       </ul>

       <ul className="flex flex-col gap-3 items-start" data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true">
         <li> <h3 className="font-bold text-xl capitalize border-b-4 pb-2 rounded  border-purple-400 dark:text-teal-300">i <i className="fa fa-heart px-2"></i></h3></li>
         <li   className="prose dark:text-slate-50 sm:text-sm text-xs" dangerouslySetInnerHTML={{__html:about?.hobby}}/>   
       </ul>
 
    </article>
    )
}

export default About