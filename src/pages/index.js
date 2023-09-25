import axios from 'axios'
import { GET_ALL_POSTS } from '@/lib/get-all-post'
import BannerHome from '@/component/homepage/banner-home'
import { GET_ABOUT } from '@/lib/get-about'
import About from '@/component/homepage/about'
import ContactForm from '@/component/homepage/contact-form'
import { Fragment, useContext } from 'react'
import { NextSeo } from 'next-seo'
import { ValueContext } from './value-context'
import Animation from '@/component/homepage/animation'
 
export default function Home({about,posts}) {
  const  siteInfo   = useContext(ValueContext)
  return (
<Fragment>
<NextSeo
       title={`${siteInfo.site?.siteName} - Homepage`}
       description={siteInfo.site?.siteName + "Front ent and wordpress developer freelancer"}
        openGraph={{
          type: 'website',
          url: `https://www.tutturunime.my.id/`,
          title:`${siteInfo.site?.siteName}- Homepage`,
          description:siteInfo.site?.siteName + "Front ent and wordpress developer freelancer",
          images: [
            {
              url:siteInfo?.menus?.favicon?.url,
              width: 1200,
              height: 630,
              alt: 'Featured image',
            },
          ],
          site_name:siteInfo?.header?.siteTitle,
        }}
/>
<section className='flex flex-col gap-10'>
   <BannerHome />
   <Animation />
   <About about={about} />
   <ContactForm />
 </section>
</Fragment>
 
  )
}


export const getServerSideProps = async () => {
  const token = process.env.NEXT_PUBLIC_API_KEY
  const url = process.env.NEXT_PUBLIC_CMS_URL
  const response = await axios.post(
    url,
    {
      query: GET_ABOUT
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
  );
  
  const getPost = await axios.post(
    url,
    {
      query: GET_ALL_POSTS
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
  );
  const data = response.data?.data?.about
  const posts = getPost.data?.data
 
  return{
    props:{
    about:data,
     posts
    }
  }
}