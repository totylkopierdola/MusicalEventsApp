import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Layout.module.css'

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

    <div className={styles.container}></div>
      {children}

    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Musical Events',
  description: 'Find the latest musical events',
  keywords: 'music, musical, events'
}
