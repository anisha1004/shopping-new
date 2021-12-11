import React, { useState } from "react";
import Product from "../components/Product";
import "../css/Products.css";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const Products = () => {
	const [pageProducts, setPageProducts] = useState([]);

	const { data: { getProducts: products } = {}, loading } =
		useQuery(GET_PRODUCTS);
	useEffect(() => {
		if (products) setPageProducts(products);
	}, [products, pageProducts]);

	return (
		<div>
			<div className='prod-row'>
				{loading ? (
					<div style={{ fontSize: "50px" }}> LOADING </div>
				) : (
					pageProducts.map((prod, idx) => (
						<div className='prod-row-container' key={idx}>
							<Product prod={prod} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Products;

const GET_PRODUCTS = gql`
	{
		getProducts {
			id
			productName
			productPrice
			productImage {
				data
				contentType
			}
			productCategory
			productStock
		}
	}
`;
