import React, { useState } from "react";
import Product from "../components/Product";
import "../css/Products.css";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import ProductsLoader from "../images/cart-loader.gif";

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
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "100%",
							width: "100%",
							flexDirection: "column",
						}}>
						{" "}
						<img src={ProductsLoader} alt='products-loader' />{" "}
						<div
							style={{
								fontSize: "30px",
								fontFamily: "Nunito",
								fontWeight: "800",
							}}>
							PLEASE WAIT WHILE WE FETCH THE RESULTS FOR YOU!
						</div>
					</div>
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
