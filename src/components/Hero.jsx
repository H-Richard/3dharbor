import React from "react"

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <h2 className="text-3xl sm:text-4xl font-medium leading-tight tracking-tight text-gray-900">
      Realtor Special Offer{" "}
      <span role="img" aria-label="waving hand">
        🔥
      </span>
      <br />
    </h2>
    <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-gray-900">
      <div
        style={{
          justifyContent: "space-between",
          width: "60%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <span>Under 1500 Sq. Ft</span>
        <span className="text-blue-600" style={{ marginLeft: "20%" }}>
          $70
        </span>
      </div>
      <div
        style={{
          justifyContent: "space-between",
          width: "60%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <span>1500 - 5000 Sq. Ft</span>
        <span className="text-blue-600" style={{ marginLeft: "20%" }}>
          $120
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
    </h3>
    <br />
    <h3 className="text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-blue-600">
      Book Now: 
    </h3>
    <div className="text-xl leading-tight tracking-tight">
        (647)-957-5939
      <br />
        3dharbor@gmail.com
    </div>

  </div>
)

export default Hero
