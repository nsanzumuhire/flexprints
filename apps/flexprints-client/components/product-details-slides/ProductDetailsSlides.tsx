"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const ProductDetailsSlides = ({ images }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className=" pb-16 pt-6  relative w-full">
			{/* <div style={{backgroundImage: `url(${images[currentIndex]})`}} className=" rounded-2xl h-full bg-center bg-cover duration-500"></div> */}
			<div className=" h-[500px] w-full rounded-lg">
				<img
					src={images[currentIndex]}
					alt=""
					className=" h-full w-full object-contain rounded-lg "
				/>
			</div>
			{/* left arrow */}
			<div
				className=" absolute top-[45%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full  bg-white/60 text-black cursor-pointer"
				onClick={prevSlide}
			>
				<ChevronLeft size={15} />
			</div>

			{/* right arrow */}
			<div
				className=" absolute top-[45%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full  bg-white/60 text-black cursor-pointer"
				onClick={nextSlide}
			>
				<ChevronRight size={15}/>
			</div>
			<div className=" flex  justify-center py-4">
				{images.map((image: any, index: any) => (
					<img
						src={image}
						alt=""
						key={index}
						onClick={() => setCurrentIndex(index)}
						className=" w-8 h-8 mr-4 rounded cursor-pointer object-cover"
					/>
				))}
			</div>
		</div>
	);
};

export default ProductDetailsSlides;
