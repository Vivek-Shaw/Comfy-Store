import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
