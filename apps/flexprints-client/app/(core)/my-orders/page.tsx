
import React from 'react'
import { Filter, Search } from 'react-feather'
import MyOrdersShoppingListCard from '../../../components/my-orders-card/MyOrdersShoppingListCard'

const MyOrders = () => {

  return (
    <div className=' w-[60%] mx-auto my-12'>
        <div className=' flex justify-between items-center'>
                <div>
                    <p className=' font-bold text-lg'>
                        ORDERS
                    </p>
                </div>
				{/* <div> */}
				<div className="flex items-center bg-gray-100 px-2 py-1 w-[500px] rounded">
					<div className=" text-gray-400 mr-2">
						<Search size={18} />
					</div>
					<input
						type="text"
						placeholder="Search"
						name=""
						id=""
						className="bg-inherit outline-none w-full focus:ring-transparent border-0"
					/>
				</div>
				{/* </div> */}
				<div>
                <button className=" flex items-center btn px-2 py-2 ">
            <Filter size={20}/>
            <span className=" text-lg ">Filter</span>
          </button>
				</div>
			</div>
        <MyOrdersShoppingListCard type={'myOrders'}/>
        <MyOrdersShoppingListCard type={'myOrders'}/>
        <MyOrdersShoppingListCard type={'myOrders'}/>
        <MyOrdersShoppingListCard type={'myOrders'}/>
        <MyOrdersShoppingListCard type={'myOrders'}/>
        <MyOrdersShoppingListCard type={'myOrders'}/>


        <div className=' text-center'>
            <button className=' btn text-grayMain'> Load more... </button>
        </div>

    </div>
  )
}

export default MyOrders
