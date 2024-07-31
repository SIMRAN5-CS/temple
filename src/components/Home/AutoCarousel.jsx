import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const imageSlider = [
    { url: "hero1.webp" },
    { url: "hero2.webp" },
    { url: "hero3.webp" }
];

const SearchForm = () => (
    <form className="w-full flex justify-center items-center rounded-xl overflow-hidden mx-auto">
        <input
            type="email"
            className="bg-white px-7 py-3 grow focus:outline-none"
            placeholder="Enter Email"
        />
        <button className="flex justify-center items-center text-white text-[22px] py-3 px-7 h-12 border border-blue-600 bg-blue-600 hover:bg-opacity-90 hover:border-opacity-90 duration-300">
            <FontAwesomeIcon icon={faSearch} />
        </button>
    </form>
);

const AutoCarousel = () => {
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState + 1);
            }
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [currentState]);

    const bgImg = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition: "top",
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        position: 'relative'
    };

    const goToNext = (index) => {
        setCurrentState(index);
    };

    return (
        <div className="h-[80vh] bg-slate-800 text-white relative">
            <div className="" style={bgImg}></div>
            <div className="absolute top-[50%] left-0 w-full transform -translate-y-1/2 z-10">
                <div className="container mx-auto flex justify-center items-center text-center">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight md:text-[62px] mb-2">
                            Virtual Visit To Indian Pilgrimage
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex justify-center">
                {imageSlider.map((imgSlide, index) => (
                    <span
                        key={index}
                        className={`w-[45px] h-[12px] bg-slate-500 ml-2 cursor-pointer shadow-xl ${currentState === index ? 'bg-orange-500' : ''}`}
                        onClick={() => goToNext(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default AutoCarousel;
