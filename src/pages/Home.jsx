import React from "react";
import Carousel from "../Components/Carousel";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Seh from "../Components/Seh";
import Section from "../Components/Section";
import Btn from "../Components/Btn";
import Sih from "../Components/Sih";

function Home() {
  window.scrollTo(0, 0)
  return (
    <>
      <div className="fixed top-0 w-[100%] m-auto z-50">
        <NavBar />
      </div>
      <div className="mt-14">
        <Carousel />
      </div>
      <div>
        <Sih/>
      </div>
      <div>
        <Seh />
      </div>
      {/* <div className="">
      <Cards/>
  </div>*/}
      <div className="mt-36">
        <Section />
      </div>
      <div>
        <Btn/>
      </div>
      <div className="bottom-0 w-[100%] m-auto mt-28">
        <Footer />
      </div>
    </>
  );
}

export default Home;
