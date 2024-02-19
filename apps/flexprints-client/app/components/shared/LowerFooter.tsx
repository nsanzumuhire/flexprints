import React from 'react'

const LowerFooter = () => {
  return (
    <div className='bg-gray-100'>
        <div className="  text-center py-6 text-[#6E6D7A] text-xs">
				© {new Date().getFullYear()} Flexprints. All rights reserved.
			</div>
    </div>
  )
}

export default LowerFooter
