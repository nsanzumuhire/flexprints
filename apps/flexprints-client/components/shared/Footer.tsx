import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Facebook } from "react-feather";

function Footer() {
	return (
		<div className="bg-gray-100 px-40 text-[#6E6D7A] text-sm">
			<div className=" flex justify-between border-b border-gray-200 py-16 ">
				<div className=" w-1/4">
					<p className=" font-bold mb-8">Creators</p>
					<p className="mb-8">Discover creators</p>
					<p className="mb-8">Get started</p>
					<p className="mb-8">How to be a creator</p>
					<p className="">Partner with us</p>
				</div>
				<div className=" w-1/4">
					<p className=" font-bold mb-8">Company</p>
					<p className="mb-8"> About</p>
					<p className="mb-8">Support us</p>
					<p className="mb-8">Terms of service</p>
					<p className="mb-8">Privacy policy</p>
					<p>Q&A</p>
				</div>
				<div className=" w-1/4">
					<p className=" font-bold mb-8">Resources</p>
					<p className="mb-8">Hire us</p>
					<p>Get hired</p>
				</div>
				<div className=" w-1/4">
					<div className=" mb-8">
						<Image
							src="/assets/andikahoIcon.png"
							width={150}
							height={0}
							alt=""
						/>
					</div>
					<div className=" mb-8">
						Andikaho is the rwandan one and only community for custom fashion
						printing and fashion designers to create and shop seamlessly.
					</div>
					<div className=" flex items-center ">
						<Link href="https" className=" text-main mr-6 cursor-pointer">
							<Twitter />
						</Link>
						<span className=" text-main mr-6 cursor-pointer">
							<Instagram />
						</span>
						<span className=" text-main cursor-pointer">
							<Facebook />
						</span>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Footer;
