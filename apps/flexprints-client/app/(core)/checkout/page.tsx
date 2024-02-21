"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import Cart from "../../../components/cart/Cart";


const Checkout = () => {
	const [paymentMethod, setPaymentMethod] = useState("");

	const onPaymentMethodClick = (paymentMethod: string) => {
		setPaymentMethod(paymentMethod);
	};

	return (
		<div className=" flex w-[85%] mx-auto my-16">
			<div className=" w-3/4 ">
				{/* <div> */}

				<Formik
					initialValues={{
						firstname: "",
						lastname: "",
						phoneNumber: "",
						email: "",
						sector: "",
						streetNumber: "",
						houseNumber: "",
						otherInfo: "",
						paymentMethod: "",
						cardNumber: "",
						expiryDate: "",
						cvccvv: "",
						momoNumber: "",
					}}
					onSubmit={(values: any) => {
						console.log(values);
					}}
				>
					<Form className="   mr-28">
						<div className=" my-4">
							<p className=" font-semibold uppercase">Personal details</p>
						</div>
						{/* Firstname & Lastname */}
						<div className=" flex justify-between py-4 ">
							<div className="flex flex-col w-1/2 pr-8">
								<Field
									name="firstname"
									placeholder="First name"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>

								<ErrorMessage
									component="a"
									name="firstname"
									className=" text-main text-xs"
								/>
							</div>
							<div className=" flex flex-col w-1/2">
								<Field
									name="lastname"
									placeholder="Last name"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="lastname"
									className=" text-main text-xs"
								/>
							</div>
						</div>
						{/* Phone & Email */}
						<div className=" flex justify-between py-4">
							<div className="flex flex-col w-1/2 pr-8">
								<Field
									name="phoneNumber"
									placeholder="Phone number"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="phoneNumber"
									className=" text-main text-xs"
								/>
							</div>
							<div className="flex flex-col w-1/2">
								<Field
									name="email"
									placeholder="Email"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="email"
									className=" text-main text-xs"
								/>
							</div>
						</div>
						<div className=" my-4">
							<p className=" font-semibold uppercase">Shipping Address</p>
						</div>

						{/* Sector & House number */}

						<div className=" flex justify-between py-4">
							<div className="flex flex-col w-1/2 pr-8">
								<Field
									name="sector"
									placeholder="Sector"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="sector"
									className=" text-main text-xs"
								/>
							</div>
							<div className="flex flex-col w-1/2">
								<Field
									name="streetNumber"
									placeholder="Street number"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="streetNumber"
									className=" text-main text-xs"
								/>
							</div>
						</div>

						{/* House number & other info */}

						<div className=" flex justify-between py-4">
							<div className="flex flex-col w-1/2 pr-8">
								<Field
									name="houseNumber"
									placeholder="House number"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="houseNumber"
									className=" text-main text-xs"
								/>
							</div>
							<div className="flex flex-col w-1/2">
								<Field
									name="otherInfo"
									placeholder="Other info"
									className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
								/>
								<ErrorMessage
									component="a"
									name="otherInfo"
									className=" text-main text-xs"
								/>
							</div>
						</div>

						<div className=" my-4">
							<p className=" font-semibold uppercase">Payment Method</p>
						</div>

						{/* MoMo and Visa card */}

						<div className=" flex justify-between py-4">
							<div className="  w-1/2 pr-8">
								<div className=" border border-grayMain/10 flex justify-between p-4 rounded-md">
									<div className="flex flex-1 items-center">
										<img src="/assets/airtel.png" alt="" className=" mr-2" />
										<img src="/assets/mtn.png" alt="" className=" mr-4" />
										<p className=" text-grayMain text-xs">
											Mobile Money (Airtel/MTN)
										</p>
									</div>
									<div>
										<Field
											type="radio"
											name="paymentMethod"
											id=""
											className=" cursor-pointer text-main border-main"
											value="momo"
											onClick={() => onPaymentMethodClick("momo")}
										/>
									</div>
								</div>
							</div>
							<div className=" border border-grayMain/10 w-1/2 rounded-md p-4 flex">
								<div className="flex flex-1 items-center">
									<img src="/assets/visacard.png" alt="" className=" mr-2" />
									<img src="/assets/creditcard.png" alt="" className=" mr-2" />
									<p className=" text-grayMain text-xs">
										Credit card / Debit card
									</p>
								</div>
								<div>
									<Field
										type="radio"
										name="paymentMethod"
										id=""
										className=" cursor-pointer text-main border-main"
										value="visa"
										onClick={() => onPaymentMethodClick("visa")}
									/>
								</div>
							</div>
						</div>

						{/* MoMo number */}
						<div>
							{paymentMethod === "momo" && (
								// <div className=" flex justify-between">
								<div className="flex flex-col flex-1 ">
									<Field
										name="momoNumber"
										placeholder="078..."
										className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
									/>
									<ErrorMessage
										component="a"
										name="momoNumber"
										className=" text-main text-xs "
									/>
								</div>
								// </div>
							)}
						</div>

						{/* Visa card */}

						<div>
							{paymentMethod === "visa" && (
								<div className=" ">

                                        {/* Card number */}

									<div className="flex flex-col flex-1 ">
										<Field
											name="cardNumber"
											placeholder="Card number"
											className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
										/>
										<ErrorMessage
											component="a"
											name="cardNumber"
											className=" text-main text-xs "
										/>
									</div>

                                        {/* Expiry date & CVC */}

									<div className=" flex justify-between py-4">
										<div className="flex flex-col w-1/2 pr-8">
											<Field
												type="date"
												name="expiryDate"
												placeholder="Expiry date"
												className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
											/>
											<ErrorMessage
												component="a"
												name="expiryDate"
												className=" text-main text-xs"
											/>
										</div>
										<div className="flex flex-col w-1/2">
											<Field
												name="cvccvv"
												placeholder="CVC/CVV"
												className=" bg-grayMain/10 p-2 rounded-full  placeholder:text-xs border-0"
											/>
											<ErrorMessage
												component="a"
												name="cvccvv"
												className=" text-main text-xs"
											/>
										</div>
									</div>
								</div>
							)}
						</div>
					</Form>
				</Formik>
				{/* </div> */}
			</div>

			<div className=" w-[520px]">
				<div className=" w-[100%]">
					<Cart />
				</div>
			</div>
		</div>
	);
};

export default Checkout;
