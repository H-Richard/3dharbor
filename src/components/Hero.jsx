import React from "react"

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight text-gray-900">
      3D Virtual Tour Special Offer{" "}
      <span role="img" aria-label="waving hand">
        🔥
      </span>
      <br />
    </h2>
    <h3 className="text-xl sm:text-2xl font-medium leading-tight tracking-tight text-gray-900 sm:w-4/5 md:w-3/5">
      <div
        className="flex flex-row justify-between w-full"
      >
        <span>Under 1500 Sq. Ft</span>
        <span className="text-blue-600">
          $70
        </span>
      </div>
      <div
        className="flex flex-row justify-between w-full"
      >
        <span>1500 - 3000 Sq. Ft</span>
        <span className="text-blue-600">
          $120
        </span>
      </div>
      <div
        className="flex flex-row justify-between w-full"
      >
        <span>3000 - 5000 Sq. Ft</span>
        <span className="text-blue-600">
          $180
        </span>
      </div>
      <div
        className="flex flex-row justify-between w-full"
      >
        <span>Over 5000 Sq. Ft</span>
        <span className="text-blue-600">
          Please Inquire
        </span>
      </div>
    </h3>
    <br />
    <h3 className="text-xl">
      <span>
        1. The 3D Virtual Tour will be hosted on the Matterport Cloud System for
        $10 / month.
      </span>
      <br/>
      <span>
        2. All prices include Branded/Unbranded Matterport 3D Virtual Tour Link
        and Up to 40 HDR Photos.
      </span>
      <br/>
      <span>
        3. All prices may be subject to change without notice.
      </span>
    </h3>
    <br />
    <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-blue-600">
      Book Now: 
    </h3>
    <div className="text-xl leading-tight tracking-tight">
        (647)-333-7360
      <br />
        3dharbor@gmail.com
    </div>

  </div>
)

export default Hero
