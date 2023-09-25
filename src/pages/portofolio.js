import PortofolioCard from "@/component/card/portofolio-card";
import MetaHead from "@/component/header/meta-head";
import { GET_PORTOFOLIO } from "@/lib/get-portofolio";
import axios from "axios";
import { Fragment, useContext } from "react";
import { ValueContext } from "./value-context";
import Animation from "@/component/homepage/animation";


const Portofolio = ({works}) => {
  const  siteInfo   = useContext(ValueContext)
    return(
      <Fragment>
        <MetaHead title={`${siteInfo.site?.siteName} - Portofolio`} description={`${siteInfo.site?.siteName} - List of Portofolio`} />
        <section className="flex flex-col gap-7 px-1 items-start">
          <Animation />
          <PortofolioCard works={works} />
       </section>
      </Fragment>
    )
}

export default Portofolio

export const getServerSideProps  = async () => {
    const token = process.env.NEXT_PUBLIC_API_KEY
    const url = process.env.NEXT_PUBLIC_CMS_URL
    const response = await axios.post(
        url,
        {
          query: GET_PORTOFOLIO
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      );

      const works = response?.data?.data
 
    return{
        props:{
           works
        }
    }
}