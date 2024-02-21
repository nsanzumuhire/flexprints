// import React from 'react'

import Link from "next/link";
import { Eye } from "react-feather";

const ProductCard = ({images, id, title, price, thumbnail}:any) => {
	return (
		<Link href={`/product/${id}`} className="w-full">
		<div >
			<div className="rounded-md  w-full">
				<img src={thumbnail} className="h-[260px] sm:h-[220px] lg:h-[320px] 2xl:h-[270px] w-full rounded-md object-cover" />
			</div>
			<div className="flex justify-between my-4 text-sm">
				<div className="flex items-center">
					<img src={images[1]} alt=""  className="w-[24px] h-[24px] rounded-full mr-2 border border-0.5"/>
					<p className="mr-4">{title}</p>
					<p className="text-gray-600 bg-main-50 px-2 py-1 rounded-full font-bold text-xs">New</p>
				</div>
				<div className="flex items-center">
					<p className="mr-4">Rwf {price}</p>
					<p className="flex items-center">
						{" "}
						<span className="text-grayMain/70 mr-1"><Eye width={15} /></span> <span className=" text-sm">6.3k</span>{" "}
					</p>
				</div>
			</div>
		</div>
		</Link>
	);
};

export default ProductCard;
