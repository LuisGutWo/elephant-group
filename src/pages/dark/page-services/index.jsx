import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/InnerPages/Header";
import Services from "@/components/InnerPages/About/Services";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";

function PageServices() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "QUE PODEMOS HACER ?",
    title: "Combinamos nuestra pasión por el diseño y las artes gráficas.",
    text: "SERVICIOS",
  };

  return (
    <>
      <Head>
        <title>Elephant Group - Servicios</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Services />
        <ServicesTab />
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  );
}

PageServices.getLayout = (page) => <Layout>{page}</Layout>;

export default PageServices;
