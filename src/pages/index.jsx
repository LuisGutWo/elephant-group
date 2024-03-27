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
import Clients from '@/components/MarketingAgency/Clients';
import Intro from "@/components/CreativeAgency/Intro";
import SectionImage from "@/components/CreativeAgency/SectionImage";
import Services from "@/components/CreativeAgency/Services";
import Portfolio from "@/components/CreativeAgency/Portfolio";
import Footer from "@/components/CreativeAgency/Footer";

function HomeCreativeAgencyLight() {
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
      <Navbar mainBg lightMode />
      <main className="main-bg position-re">
        <Header lightMode />
        <Marq />
        <Intro />
        <Clients lightMode />
        <SectionImage />
        <Services lightMode />
        <Portfolio />
      </main>
      <Footer lightMode />
    </>
  );
}

HomeCreativeAgencyLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeCreativeAgencyLight;
