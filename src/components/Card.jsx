import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const { name, agency, url } = props

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <iframe src={url} className="h-64 w-full pointer-events-none" title={name}/>
        </a>
      </div>
      <div className="p-4 sm:p-5">
        <h1 className="sm:text-lg text-gray-900 font-semibold">MLS: {name}</h1>
        <p className="text-sm sm:text-base text-gray-700">{agency}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  agency: PropTypes.string.isRequired,
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    agency
    url
  }
`
