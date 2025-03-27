import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative p-2">
      <Header />

      <div className="container mx-auto px-[40px] flex px-5 py-24 md:flex-row flex-col items-center bg-gray-900">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="">
            A better way to
            <span className="">ship web apps</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
          <div className="flex justify-center">
            <a
              href=""
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg"
            >
              Read
            </a>
            <a
              href=""
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              About me
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero/hero-illustration.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
