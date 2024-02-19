import Image from "next/image"
import { X, Target } from "react-feather"

function Notification({handleShowNotifications}:any) {
  return (
    <div className=" absolute bg-white z-10 shadow-md top-[6rem] right-[18rem] w-[520px] h-[546px] rounded border py-8  overflow-y-auto ">
			<div className=" mb-6 px-6 flex items-center justify-between">
				<p className=" uppercase font-bold text-2xl">Notifications</p>
				<p className=" cursor-pointer" onClick={handleShowNotifications}> <X/> </p>
			</div>
			
			<div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className=" text-sm">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
            <div className=" flex items-center my-2 cursor-pointer hover:bg-red-100 py-2 px-6">
                <div className=" bg-main w-[5px] h-[5px] rounded-full mr-2">
                    {/* <Target/> */}
                </div>
                <div className=" mr-4">
                    <Image src='/assets/images/dannyeli1.jpg' width={50} height={0} alt="" className=" rounded-full"/>
                </div>
                <div className=" flex-1 mr-2">
                    <p className="text-sm ">Ishaza Thursday Summer Collection</p>
                    <p className=" text-sm text-grayMain/60">2 hours ago</p>
                </div>
                <div className=" rounded-md">
                    <Image src='/assets/images/imgSample1.png' width={80} height={0} alt="" className=" rounded-md"/>
                </div>
            </div>
		</div>
  )
}

export default Notification