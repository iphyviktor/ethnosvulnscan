import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout/Layout'
import Home from '../components/layout/Home'


export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}