import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title = 'Ethnos scan - Ethnos vulnerability scanner'}) => {
  return (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>

        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout