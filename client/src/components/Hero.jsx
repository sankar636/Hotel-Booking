import React from "react";
import Form from "./Form";

const Hero = () => {

    return (
        <>
            <div className={`flex flex-col items-start justify-center ps-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center h-screen`}>
            <p className="bg-[#49B9FF] rounded-full px-4 py-1">The Ultimate Hotel Experience</p>
            <p className="text-2xl md:text-5xl md:leading-[56px] max-w-xl font-bold md:font-extrabold mt-4">Discover Your Perfect
            Getaway Destination</p>
            <p className="max-w-130 mt-2 mb-4 text-sm md:text-base">Unparalleled luxury and comfort await at the world's most exclusive
            hotels and resorts. Start your journey today.</p>
            <Form/>
            </div>

        </>
    );
}

export default Hero