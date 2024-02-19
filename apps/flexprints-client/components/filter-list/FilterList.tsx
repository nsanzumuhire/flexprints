import Link from "next/link";
import { Filter } from "react-feather";

function FilterList() {

	return (
		<div className="my-12 text-[#6E6D7A]">
			<div className="flex">
				<div className=" flex-1 flex justify-center items-center">
					<div className=" text-sm">
						<Link href="" className=" mx-4 text-main border-[3px] border-main px-4 py-2 rounded font-bold">All</Link>
						<Link href="" className=" mx-4 px-4 py-2">Hoodies</Link>
						<Link href="" className=" mx-4 px-4 py-2">Sweatshirt</Link>
						<Link href="" className=" mx-4 px-4 py-2">Jackets</Link>
						<Link href="" className=" mx-4 px-4 py-2">T-Shirts</Link>
						<Link href="" className=" mx-4 px-4 py-2">Hats</Link>
						<Link href="" className=" mx-4 px-4 py-2">Head warmers</Link>
					</div>
				</div>
				<div>
          <button className=" flex items-center btn px-2 py-2 ">
            <Filter size={20}/>
            <span className=" text-lg ">Filter</span>
          </button>
        </div>
			</div>
		</div>
	);
}

export default FilterList;
