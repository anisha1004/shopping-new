import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import React from "react";

function Demopage() {
	const { data: { getProducts: products } = {} } = useQuery(GET_PRODUCTS);
	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<div>
			<img
				src={`data:image/png;base64,${
					products && products[0].productImage.data
				}`}
			/>
		</div>
	);
}

export default Demopage;

const GET_PRODUCTS = gql`
	{
		getProducts {
			productName
			productPrice
			productImage {
				data
				contentType
			}
		}
	}
`;
