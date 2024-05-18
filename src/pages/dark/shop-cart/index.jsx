import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Header from '@/components/Main/Header';
import Cart from '@/components/Shop/Cart';
import Footer from '@/components/Main/Footer';

function ShopCart() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    // Smooth Scroll of Page
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    return () => document.body.classList.remove('main-bg');
  }, []);

  const metadata = {
    subTitle: "PRODUCTOS",
    title: "Tienda Virtual"
  }

  return (
    <>
      <Head>
        <title>Elephant Group - shop cart</title>
      </Head>

      <Loader />
      <div id="smooth-wrapper">
        <Navbar mainBg noStatic />
        <div id="smooth-content">
          <main className="main-bg">
            <Header data={metadata} />
            <Cart />
          </main>
          <Footer subBg />
        </div>
      </div>
    </>
  )
}

ShopCart.getLayout = page => <Layout>{page}</Layout>

export default ShopCart;