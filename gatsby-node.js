const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ContentfulPortfolio implements Node {
      id: ID!
      name: String!
      agency: String!
      url: String!
    }
  `
  createTypes(typeDefs)
}
