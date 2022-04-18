// import the gql tagged template function 
const {gql} = require('apollo-server-express');

// create type defs
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    CreatedAt: String
    username: String
    reactionCount: Int
}

type Query { 
    thoughts: [thoughts]
}
`
// export the typeDefs
module.exports = typeDefs;

