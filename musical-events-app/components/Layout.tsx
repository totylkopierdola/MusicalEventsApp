import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  title: string,
  keywords: string,
  description: string,
  children: React.ReactNode
}

const Layout: React.FC<Partial<LayoutProps>> = ({title, keywords, description, children}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
      </Head>
        
      <Header/>

    <div className={styles.container}>
      {children}
    </div>

      <Footer/>
    </div>

  )
}

export default Layout

Layout.defaultProps = {
  title: 'Musical Events',
  description: 'Find the latest musical events',
  keywords: 'music, musical, events'
}
