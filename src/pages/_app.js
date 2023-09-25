import 'node_modules/font-awesome/css/font-awesome.min.css'; 
import { GET_SITE_INFO } from '@/lib/get-site-info';
import '@/styles/globals.css'
import '@/styles/aos.css'
import '@/styles/bubble.css'
import Aos from 'aos';
import axios from 'axios';
import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import ValueProvider from './value-context';
import MainLayout from '@/component/main-layout';
 

export default function App({ Component, pageProps ,siteInfo}) {
 
  useEffect(() => {
    Aos.init();
  },[])
  return(
  <Fragment>
  <Head>
  <link rel="icon" href={siteInfo?.menu?.favicon?.url}></link>
</Head>
<ValueProvider siteInfo={siteInfo}>
      <MainLayout>
           <Component {...pageProps} />
      </MainLayout>
</ValueProvider>
  </Fragment>
  )
}


App.getInitialProps = async () => {
  const token = process.env.NEXT_PUBLIC_API_KEY
  const response = await axios.post(
    'https://graphql.datocms.com/',
    {
      query: GET_SITE_INFO
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }
  );
  
    const data = response.data?.data
 
  return {siteInfo : {menu:data?._site}  }
};
