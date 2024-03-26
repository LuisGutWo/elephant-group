import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/InnerPages/Blog/Header';
import ImageOutFrame from '@/components/InnerPages/Blog/ImageOutFrame';
import Marq from '@/components/CreativeAgency/Marq';
import Intro from '@/components/CreativeAgency/Intro';
import SectionImage from '@/components/CreativeAgency/SectionImage';
import Services from '@/components/CreativeAgency/Services';
import Portfolio from '@/components/CreativeAgency/Portfolio';
import Testimonials from '@/components/CreativeAgency/Testimonials';
import Team from '@/components/CreativeAgency/Team';
import HzScroll from '@/components/CreativeAgency/HorizontalScroll';
import Blog from '@/components/CreativeAgency/Blog';
import Footer from '@/components/Startup/Footer';


function BlogImageOutFrameLight() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News."
  }

  return (
    <>
      <Head>
        <title>Geekfolio - Image Out Frame</title>
      </Head>

      <Loader />
      <Navbar mainBg lightMode />
      <main className="main-bg">
        <Header lightMode data={metadata} />
        <Marq />
        <Intro />
        <SectionImage />
        <Services lightMode />
        <Portfolio />
        <Testimonials lightMode />
        <Team />
        <HzScroll />
        <Blog />
      </main>
      <Footer lightMode />
    </>
  )
}

BlogImageOutFrameLight.getLayout = page => <Layout lightMode>{page}</Layout>

export default BlogImageOutFrameLight;