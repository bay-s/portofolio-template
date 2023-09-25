import Footer from "./footer"
import Header from "./header/header"

const MainLayout = ({children}) => {

    return(
<div className='dark:bg-dark-gray clear 2xl:px-62 h-full bg-zinc-100'> 
 <Header />
 <main className="mx-auto px-4 min-h-screen sm:container px-2 xl:px-72 lg:px-64 my-5 font-roboto">
{children}
 </main>
<Footer />
</div>
    )
}

export default MainLayout