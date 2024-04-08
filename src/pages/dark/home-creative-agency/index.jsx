import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/CreativeAgency/Header";
import Marq from "@/components/CreativeAgency/Marq";
import Intro from "@/components/CreativeAgency/Intro";
import Clients from "@/components/MarketingAgency/Clients";
import Services from "@/components/CreativeAgency/Services";
import Portfolio from "@/components/Architecture/Portfolio";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";

function HomeCreativeAgency() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Elephant Group</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg position-re">
        <Header />
        <Services />
        <Intro />
        <Marq />
        <Portfolio />
        <Clients />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

HomeCreativeAgency.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeCreativeAgency;
