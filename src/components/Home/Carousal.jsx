import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => (
  <form className="w-full flex justify-center items-center rounded-xl overflow-hidden mx-auto">
    <input
      type="email"
      className="bg-white px-7 py-3 grow focus:outline-none"
      placeholder="Enter Email"
    />
    <button className="flex justify-center items-center text-white text-[22px] py-3 px-7 h-12 border border-blue-600 bg-blue-600 hover:bg-opacity-90 hover:border-opacity-90 duration-300">
      <i className="fas fa-search"></i>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </form>
);


const Carousal = () => {
  
  return (
    <section
      className="ezy__header29 light py-32 md:py-52 text-white bg-red-500 bg-cover bg-center bg-no-repeat relative"
      style={{
      	backgroundImage:
      		"url(/hero3.webp)",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto flex justify-center items-center text-center">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-[62px] mb-2">
              Virtual Visit To Indinan Pilgrimage
            </h1>
            <p className="text-xl opacity-80 leading-snug px-12 py-6">
              Discover the beauty of Indian Pilgrimage with our Virtual Visit
            </p>
            <div className="sm:max-w-lg mx-auto flex justify-center">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Carousal;
