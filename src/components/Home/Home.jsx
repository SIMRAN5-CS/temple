import React from "react";
import { Link } from "react-router-dom";
// import AutoCarousel from "./AutoCarousel";
import PopularDestination from "../PopularTemple";
import MostValuedTemple from "../MostValuedTemple";
import Imp from "../Imp";

import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
// import Carousal from "./Carousal";
import AutoSliderCarousel from "./AutoSliderCarousel";
import AutoCarousel from "./AutoCarousel";
export default function Home() {
  return (
   <div className="  ">
    <AutoCarousel/>
    <AutoSliderCarousel/>
    <PopularDestination/>
    <MostValuedTemple/>
    <Imp/>
    <div className="mx-auto w-full ">
        {/* home2 page */}
        <div>
          <div className="relative w-full bg-white">
            <div className="mx-auto  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
              <div className="flex flex-col justify-center px-2 py-6 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-4 lg:py-6 xl:col-span-6">
                <div className="cursor-pointer mt-4 flex max-w-max items-center space-x-2 rounded-full bg-red-950 p-1">
                  <div className="rounded-full bg-white p-1 px-3">
                    <p className="text-sm font-medium mt-3 ">EXPLORE→</p>
                  </div>
                  <p className="text-sm font-medium mt-3 text-white px-1">
                    Join our team{" "}
                  </p>
                </div>
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                  Virtual Visit To Indinan Pilgrimage
                </h1>
                <p className="mt-8 text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur modi blanditiis dolores quasi eaque explicabo!
                </p>
                <form action="" className="mt-8 flex items-start space-x-2">
                  <div>
                    <input
                      className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      We care about your privacy
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="  rounded-3xl mt-12 relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                <CCarousel controls indicators dark >
                  <CCarouselItem>
                    <CImage
                      NameName=" d-block w-100"
                      src="hero1.webp"
                      alt="slide 1"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src="hero1.webp"
                      alt="slide 2"
                    />
                    <CCarouselCaption className="text-white  d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                  <CCarouselItem>
                    <CImage
                      className="d-block w-100"
                      src="hero3.webp"
                      alt="slide 3"
                    />
                    <CCarouselCaption className="text-white d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </CCarouselCaption>
                  </CCarouselItem>
                </CCarousel>

                {/* <img
          class="aspect-[3/2] rounded-3xl bg-black object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="https://images.pexels.com/photos/20767292/pexels-photo-20767292/free-photo-of-ganesha-head-on-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="ganesh"
        /> */}
              </div>
            </div>
          </div>
          <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-9 w-9 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                     strokeLinejoin="round"
strokeWidth="1.5"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Secured Payments
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                  <svg
                    className="h-9 w-9 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                     strokeLinejoin="round"
strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Fast &amp; Easy to Load
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-9 w-9 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                     strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Light &amp; Dark Version
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                  <svg
                    className="h-9 w-9 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="1.5"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Filter Blocks
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
