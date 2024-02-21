import Link from "next/link";
import { Filter } from "react-feather";

function FilterList() {

	return (
		<div className="my-12 text-[#6E6D7A]">
			<div className="flex">
				<div className=" flex-1 flex justify-center items-center">
					<div className="text-sm">
						<Link href="/" className="mx-4 bg-main-50 px-4 py-2 rounded-full">All</Link>
						<Link href="/prints/hoodies" className="mx-4 px-4 py-2">Hoodies</Link>
						<Link href="/prints/Sweatshirt" className="mx-4 px-4 py-2">Sweatshirt</Link>
						<Link href="/prints/Jackets" className="mx-4 px-4 py-2">Jackets</Link>
						<Link href="/prints/>t-Shirts" className="mx-4 px-4 py-2">T-Shirts</Link>
						<Link href="/prints/hats" className="mx-4 px-4 py-2">Hats</Link>
						<Link href="/prints/head-warmers" className="mx-4 px-4 py-2">Head warmers</Link>
					</div>
				</div>

        <div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="relative  bg-transparent shadow-none border-0"
						>
         <div className="flex gap-2 items-center px-4 py-2 sm:mr-4 md:mr-8 rounded-full border border-0.5 cursor-pointer">
            <Filter size={14}/>
            <span className="text-sm">Filters</span>
          </div>
          </div>
						<div
							tabIndex={0}
							className="dropdown-content z-[1]  w-[260px]  p-2 shadow-md bg-white overflow-hidden right-0 text-sm"
						>

						<ul>
							<li className="py-4 hover:bg-main-50 px-6">
								<Link
									href=""
								>
									{" "}
									Popular
								</Link>
							</li>
              <li className="py-4 hover:bg-main-50 px-6">
								<Link
									href=""
								>
									{" "}
									New
								</Link>
							</li>
              <li className="py-4 hover:bg-main-50 px-6">
								<Link
									href=""
								>
									{" "}
									Promotion
								</Link>
							</li>
						</ul>
						</div>
					</div>
			</div>
		</div>
	);
}

export default FilterList;
