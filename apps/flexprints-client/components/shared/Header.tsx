"use client";
import Image from "next/image";
import { useState } from "react";
import { Search, Bell, ShoppingCart, X } from "react-feather";
import Link from "next/link";
import Cart from "../cart/Cart";
import Notification from "../notifications/Notification";

function Header() {
	const [showCart, setShowCart] = useState(false);
	const [showNotifications, setShowNotifications] = useState(false);
	const [showProfileDrpdwn, setShowProfileDrpdwn] = useState(false);

	const handleShowCart = () => {
		if (showNotifications) setShowNotifications(!showNotifications);
		if (showProfileDrpdwn) setShowProfileDrpdwn(!showProfileDrpdwn);
		setShowCart(!showCart);
	};

	const handleShowNotifications = () => {
		if (showCart) setShowCart(!showCart);
		if (showProfileDrpdwn) setShowProfileDrpdwn(!showProfileDrpdwn);
		setShowNotifications(!showNotifications);
	};

	const handleShowProfileDropdwn = () => {
		if (showCart) setShowCart(!showCart);
		if (showNotifications) setShowNotifications(!showNotifications);
		setShowProfileDrpdwn(!showProfileDrpdwn);
	};

	return (
		<div className="flex justify-between px-8 py-4 border-b border-gray-100 text-sm">
			<Link href="/" className=" w-fit">
				<Image src="/assets/andikahoIcon.png" width={200} height={0} alt="" />
			</Link>
			<div className="flex justify-between items-center flex-1 ml-8 ">
				<div className=" flex text-gray-600">
					<div className=" mr-8">
						{" "}
						<Link href="/dashboard"> Discover creators </Link>{" "}
					</div>
					<div className=" mr-8">
						{" "}
						<Link href="/dashboard"> Products </Link>
					</div>
					<div>
						{" "}
						<Link href="/dashboard"> Go Pro </Link>
					</div>
				</div>
				<div className="flex items-center bg-gray-100 py-1  px-2 w-[500px] rounded-full">
					<div className=" text-gray-400 mr-2">
						<Search size={18} />
					</div>
					<input
						type="text"
						placeholder="Search"
						name=""
						id=""
						className="bg-inherit outline-none focus:ring-transparent border-0 outline-0 w-full  "
					/>
				</div>
				<div className="flex items-center">

          <div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="mr-8 relative  bg-transparent shadow-none border-0"
						>
							<Bell />
						<span className="absolute -top-2 -right-2 pt-2 bg-main text-white p-1 w-5 h-5 text-xs flex justify-center items-center rounded-full">
							2
						</span>
						</div>
						<div
							tabIndex={0}
							className="dropdown-content z-[1]  w-[430px]  p-2 shadow bg-white overflow-hidden right-0"
						>
							<div className="p-4 h-[460px] overflow-y-scroll">
              <Notification/>
							</div>
						</div>
					</div>

					<div className="dropdown">
						<div
							tabIndex={1}
							role="button"
							className="mr-8 relative  bg-transparent shadow-none border-0"
						>
							<ShoppingCart />
							<span className="absolute -top-2 -right-2 pt-2 bg-main text-white p-1 w-5 h-5 text-xs flex justify-center items-center rounded-full">
								4
							</span>
						</div>
						<div
							tabIndex={1}
							className="dropdown-content z-[1]  w-[460px]  p-2 shadow bg-white overflow-hidden right-0"
						>
							<div className="p-4 h-[460px] overflow-y-scroll">
								<Cart />
							</div>
						</div>
					</div>
          <div className="dropdown">
						<div
							tabIndex={1}
							role="button"
							className="mr-8 relative  bg-transparent shadow-none border-0"
						>
                <div className="w-[45px]">
                    <Image
                      src="/assets/images/dannyeli2.jpg "
                      width={45}
                      height={50}
                      alt=""
                      className="rounded-full cursor-pointer"
                    />
              </div>
          </div>
						<div
							tabIndex={1}
							className="dropdown-content z-[1]  w-[300px]  p-2 shadow-md bg-white overflow-hidden right-0"
						>

						<ul>
							<li className="py-4 hover:bg-main-50 px-6">
								<Link
									href={`/my-orders`}
									onClick={() => setShowProfileDrpdwn(false)}
								>
									{" "}
									My Orders
								</Link>
							</li>
							<li className="py-4 hover:bg-main-50  px-6">
								<Link
									href={`/my-shopping-list`}
									onClick={() => setShowProfileDrpdwn(false)}
								>
									My Shopping List
								</Link>
							</li>
							<li className="py-4 hover:bg-main-50  px-6">
								<Link href={""}>Go Pro</Link>
							</li>
							<li className="py-4 hover:bg-main-50  px-6">
								<Link href={""}>Account Settings</Link>
							</li>
							<li className="py-4 hover:bg-main-50  px-6">
								<Link href={""}>Logout</Link>
							</li>
						</ul>
						</div>
					</div>

					<div>
						<Link href={"/create"}>
							<button className="bg-main text-white px-6 py-3 rounded-full">
								Create
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
