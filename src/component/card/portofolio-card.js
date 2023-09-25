import Image from "next/image"

const PortofolioCard = ({works}) => {
    const noImg = '/img/no-image.png'
    return(
       <article className="flex flex-col gap-8 items-start my-5">
          <h3 className="font-bold text-2xl capitalize border-b-4 pb-2 rounded  border-purple-400 dark:text-teal-300">portofolio</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {
                works?.allPortofolios?.map(work => {
                    return  <div data-aos="fade-up"
                    key={work?.id}
                    data-aos-duration="3000" data-aos-once="true" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href={work?.demoUrl}  target="_blank">
                            <Image
                             alt="Project thumbnail"
                             src={!work?.thumbnail?.url ? noImg : work?.thumbnail?.url}
                             unoptimized
                             width={100}
                             height={100}
                             className="rounded-t-lg w-full h-[215px] object-cover"
                            />
                        </a>

                        <div class="p-5">
                         <ul className="flex justify-between items-center mb-2">
                         <h5 class="capitalize text-xl sm:text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{work?.title}</h5>
                           <a href={work?.demoUrl} className="dark:text-teal-300 text-blue-500 sm:text-sm text-xs hover:underline"  target="_blank">Link demo</a>
                         </ul>
                         <p class="tracking-wide leading-6 mb-3 sm:text-sm text-xs font-normal text-gray-700 dark:text-slate-200">{work?.description}</p>
 
                        </div>
                    </div>                    
                })
             }
           </div>
       </article>
    )
}
export default PortofolioCard