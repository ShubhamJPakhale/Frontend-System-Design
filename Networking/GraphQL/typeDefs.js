// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Mobile" type defines the queryable fields for every mobile in our data source.

  type Mobile {
    id: ID
    mobileName: String
    price: String
    company: Company
  }

  type Company {
    id: ID
    companyName: String
    headQuarter: String
    founded: String
    mobile: [Mobile]
  }

  type Query {
    mobile: [Mobile]
    company: [Company]
  }

  type Mutation {
        addMobile(mobileName: String!, price: String!): Mobile!
    }
`;
