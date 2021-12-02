const { gql } = require("apollo-server");

module.exports = gql`
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		username: String!
		email: String!
		token: String!
		createdAt: String!
	}
	input RegisterInput {
		firstName: String!
		lastName: String!
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}

	type Query {
		getUser(username: String): User
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
	}
`;
