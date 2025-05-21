import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarIcon from "./StarIcon.jsx";
const Testimonials = () => {

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#F5F7FF] pt-20 pb-8">
            <Title title='What Our Guests Say' subTitle='Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.' aline='text-center' />
            <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <StarIcon key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials