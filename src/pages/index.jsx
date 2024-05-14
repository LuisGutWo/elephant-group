import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import Marq from "@/components/Main/Marq";
import Clients from "@/components/Main/Clients";
import Intro from "@/components/Main/Intro";
import Services from "@/components/Main/Services";
import Portfolio from "@/components/Main/Portfolio";
import Contact from "@/components/Main/Contact";
import Footer from "@/components/Main/Footer";

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
        <Services lightMode />
        <Portfolio />
        <Clients lightMode />
        <Contact />
      </main>
      <Footer lightMode />
    </>
  );
}

HomeCreativeAgencyLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default HomeCreativeAgencyLight;
