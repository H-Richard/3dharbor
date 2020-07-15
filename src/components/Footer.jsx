import React from "react"

const Footer = () => {
  return (
    <div className="container py-12 md:flex md:items-center md:justify-between">
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-left text-sm md:text-base text-gray-700">
          &copy; 2020 3D Harbor. All rights reserved.
        </p>
        <p className="text-center text-sm md:text-base text-gray-500">
          #9 3505 Laird Rd, Missassauga, ON, Canada, L5L 5Y5
        </p>
      </div>
    </div>
  )
}

export default Footer
