
const BannerHome = () => {

 
  const w1 =  "Hi,".split("")
  const w2 =  "Im Bayu Saputra,".split("")
  const w3 = "Web Developer".split("")
 
    return(
<article class="px-1">
  <ul className="flex dark:text-teal-300 flex-col gap-2 font-roboto text-4xl sm:text-6xl">
    <li> <h3 className=" font-bold tracking-wide animated rubberBand ">
      {
        w1.map(txt => {
          return<span className="hvr-wobble-vertical transition duration-500 hover:text-teal-300" key={txt}>{txt}</span>
        })
      }
      </h3></li>
    <li> <h3 className=" font-bold tracking-wide animated rubberBand ">      {
        w2.map(txt => {
          return txt === " " ? <span> </span> : <span className="hvr-wobble-vertical transition duration-500 hover:text-teal-300" key={txt}>{txt}</span>
        })
      }</h3></li>
    <li> <h3 className="font-bold tracking-wide"> 
    {
        w3.map(txt => {
          return txt === " " ? <span> </span> : <span className="hvr-wobble-vertical transition duration-500 hover:text-teal-300"key={txt}>{txt}</span>
        })
      }
    </h3></li>
  </ul>
 
 </article>
    )
}

export default BannerHome 