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
	type Image {
		data: String!
		contentType: String!
	}
	type Product {
		productName: String!
		productPrice: Int!
		productImage: Image!
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
		getProducts: [Product]
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
	}
`;
