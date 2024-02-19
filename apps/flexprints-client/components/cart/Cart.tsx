import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { X } from "react-feather";

function Cart({handleShowCart}:any) {

	const [itemsNumber, setItemsNumber] = useState(1)

	const increaseDecrease = (operation:string) => {
		if(operation === 'reduce' && itemsNumber !== 0) {
			setItemsNumber(itemsNumber - 1)
		}
		else if (operation === 'reduce' && itemsNumber === 0) {
			setItemsNumber(0)
		}
		else setItemsNumber (itemsNumber + 1)
	}

	return (
		<div className="w-[100%]">
			<div className=" mb-6 flex items-center justify-between">
				<p className=" uppercase font-bold text-2xl">Order summary</p>
				{/* <p className=" cursor-pointer" onClick={handleShowCart}> <X/> </p> */}
			</div>
			<div className=" flex justify-between h-[180px] object-fill border-b py-8">
				<div className=" rounded">
					<img src="/assets/images/imgSample1.png"  alt="" className="w-[150px] h-full rounded"/>
				</div>
				<div className="  flex flex-col items-end">
					<div className="  flex flex-col items-end  mb-2">
						<p className=" font-semibold">Ishaza Thursday Summer Collection</p>
					</div>
					<div className=" flex w-full justify-start text-sm mb-5">
						<p className=" text-grayMain">Color: White, Size: M</p>
					</div>
					<div className=" flex w-full justify-between font-semibold items-center">
						<span>Rwf 12,000</span>
						<div className=" flex  justify-between">
							<button className=" py-1 px-4 bg-gray-100 rounded" onClick={() => increaseDecrease('reduce')}>-</button>
							<p className=" py-1 px-4  rounded">8</p>
							<button className=" py-1 px-4 bg-gray-100 rounded" onClick={() => increaseDecrease('increase')}>+</button>
						</div>
					</div>
				</div>
			</div>

			<div className=" flex justify-between h-[180px] object-fill border-b py-8">
				<div className=" rounded">
					<img src="/assets/images/imgSample2.png"  alt="" className="w-[150px] h-full rounded"/>
				</div>
				<div className="  flex flex-col items-end">
					<div className="  flex flex-col items-end  mb-2">
						<p className=" font-semibold">Ishaza Thursday Summer Collection</p>
					</div>
					<div className=" flex w-full justify-start text-sm mb-5">
						<p className=" text-grayMain">Color: White, Size: M</p>
					</div>
					<div className=" flex w-full justify-between font-semibold items-center">
						<span>Rwf 12,000</span>
						<div className=" flex  justify-between">
							<button className=" py-1 px-4 bg-gray-100 rounded" onClick={() => increaseDecrease('reduce')}>-</button>
							<p className=" py-1 px-4  rounded">{itemsNumber}</p>
							<button className=" py-1 px-4 bg-gray-100 rounded" onClick={() => increaseDecrease('increase')}>+</button>
						</div>
					</div>
				</div>
			</div>
			<div className=" text-grayMain mt-6">
				<div className=" flex justify-between mb-2">
					<p>Subtotal</p>
					<p className=" font-semibold text-black">Rwf 38,000</p>
				</div>
				<div className=" flex justify-between mb-2">
					<p>Shipping Cost</p>
					<p className=" font-semibold text-black">Rwf 3,000</p>
				</div>
				<div className=" flex justify-between mb-2">
					<p>Discount (-10%)</p>
					<p className=" text-main font-semibold">- Rwf 3,800</p>
				</div>
				<div className=" flex justify-between mt-6">
					<p>Total</p>
					<p className=" font-semibold text-black">Rwf 34,200</p>
				</div>
				<div>
					<Link href='/checkout' onClick={handleShowCart}>
					<button className=" bg-main text-white w-full p-3 rounded-lg mt-8 mb-2">
						Checkout
					</button></Link>
				</div>
			</div>
		</div>
	);
}

export default Cart;
