import React from "react";
import { Filter, Search } from "react-feather";

const MyOrdersShoppingListCard = ({type}: any) => {
	// console.log(type);
	return (
		<div className=" flex items-center justify-between my-12">

			<div className=" flex items-center">
				<div className=" w-[250px] h-[130px]">
					<img
						src="/assets/images/imgSample1.png"
						alt=""
						className=" h-full w-full object-cover rounded-md"
					/>
				</div>
				<div className=" flex flex-col justify-around self-stretch ml-8">
					<div className="text-sm">
						<p className=" font-semibold">Ishaza Thursday Collection</p>
						<p className=" text-grayMain/80 ">
							<span className=" mr-4">
								{" "}
								<span className=" font-semibold">Color:</span> White,
							</span>
							<span>
								{" "}
								<span className=" font-semibold">Size:</span> M(1), L(6)
							</span>
							{/* <span>Color: White</span> */}
						</p>
					</div>
					<div className=" flex items-center text-sm">
						<p className=" mr-4">Rwf 42,000</p>
						<p className=" text-grayMain/80">July 25, 2021</p>
					</div>
				</div>
			</div>

			<div className=" flex flex-col self-stretch justify-around">
				<button className=" btn bg-main text-white hover:bg-main">
					{type === 'myOrders' ? 'Buy again' : 'Add to cart'}
				</button>
				<button className="btn bg-transparent border-0 shadow-none text-main hover:bg-grayMain/30 hover:text-black">
					{" "}
					{type === 'myOrders' ? 'View order details' : 'Delete item'}
				</button>
			</div>
		</div>
	);
};

export default MyOrdersShoppingListCard;
