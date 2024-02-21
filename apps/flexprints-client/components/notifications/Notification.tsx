import Image from "next/image"

function Notification() {
  return (
    <div className="w-full h-auto">
			<div className="mb-6 px-6 flex items-center justify-between">
				<p className="uppercase font-bold text-lg">Notifications</p>
			</div>

			<div className="flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6 text-sm">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className="rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
            <div className="flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6">
                <div className="bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className="rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
            <div className="flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
            <div className="flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6">
                <div className="bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className="rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className="rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
            <div className="flex items-center my-2 cursor-pointer hover:bg-main-50 py-2 px-6">
                <div className="bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className="mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className="rounded-full"/>
                </div>
                <div className="flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className="text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className="rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className="rounded-md"/>
                </div>
            </div>
		</div>
  )
}

export default Notification
