import { Fragment } from "react"

const Animation = () => {
    const dummyArray = Array.from({ length: 30});  
    return(
    <Fragment>
     <div className="overflow-hidden sm:block hidden">
            {
      dummyArray.map((_, index) => {
        // Perform the operation here
        return <div  className={`bubble bubble-${index + 1} dark:bg-teal-300 bg-sky-300`} key={index + 1}></div>
      })
    }
     </div>
    </Fragment>
    )
}

export default Animation