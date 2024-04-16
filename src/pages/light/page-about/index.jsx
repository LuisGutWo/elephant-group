import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Header';
import Story from '@/components/InnerPages/About/Story';
import Services from '@/components/InnerPages/About/Services';
import Intro from '@/components/InnerPages/About/Intro';
import CallToAction from '@/components/Main/CallToAction';
import Footer from '@/components/Main/Footer';

function PageAboutLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "QUIENES SOMOS ?",
    title: "Somos Elephant Group, una agencia de publicidad y marketing establecida en Viña del Mar, Chile.",
    text: "Nosotros"
  }

  return (
    <>
      <Head>
        <title>Elephant Group - Nosotros</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main>
        <Header data={headerMetadata} />
        <Story />
        <Services lightMode />
        <Intro />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode />
    </>
  )
}

PageAboutLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default PageAboutLight;