import React, { useEffect, useState } from "react";
import "../css/Cartrow.css";
import Item1 from "../images/item1.svg";
import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";
import Delete from "../images/delete.svg";
import Line from "../images/line.svg";
import ProductImg from "../images/product.svg";
import { gql, useQuery } from "@apollo/client";

const Cartrow = ({ cartItem, qtyChangeHandler, removeHandler }) => {
	const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
		variables: {
			getProductDetailId: cartItem.id,
		},
	});

	const [productImage, setProductImage] = useState(null);

	const getTotalPrice = () => {
		return cartItem.productPrice * cartItem.qty;
	};

	useEffect(() => {
		data && setProductImage(data.getProductDetail.productImage.data);
	}, [productImage]);

	return (
		<div className='cartrow'>
			{/* <div className='item'>
				<div className='item-left'>
					<img src={Item1} />
					<div className='details'>
						<div className='name'>Watch</div>
						<div className='price'>&#8377;1000</div>
					</div>
				</div>
				<div className='item-right'>
					<div className='quantity'>
						<button>+</button>
						<button>-</button>
					</div>
					<div className='total'>&#8377;2000</div>
					<div className='delete'>
						<img src={Delete} />
					</div>
				</div>
			</div> */}
			{/* START OF INTEGRATION */}
			<div className='item'>
				<div className='item-left'>
					{loading ? (
						"IMAGE IS LOADING"
					) : (
						<img
							className='obj-img'
							alt='product-img'
							src={`data:image/svg+xml;base64,${data.getProductDetail.productImage.data}`}
						/>
					)}
				</div>
				<div className='item-right'>
					<div className='row-1'>
						<div className='name'>{cartItem.productName}</div>
					</div>
					<div className='row-2'>
						<div className='price'>&#8377; {cartItem.productPrice}</div>
						<div className='row-2-right'>
							<img
								src={Minus}
								className='plus'
								alt='minus'
								onClick={() => qtyChangeHandler(cartItem, cartItem.qty - 1)}
							/>
							<span>{cartItem.qty}</span>
							<img
								src={Plus}
								className='plus'
								alt='plus'
								onClick={() => qtyChangeHandler(cartItem, cartItem.qty + 1)}
							/>

							<div className='total'>&#8377; {getTotalPrice()}</div>
							<div className='delete'>
								<img
									src={Delete}
									className='plus'
									alt='delete'
									onClick={() => removeHandler(cartItem.id)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FRONTEND TEST CODE */}

			{/* <div className='item'>
				<div className='item-left'>
					<img className='obj-img' alt='product-img' src={ProductImg} />
				</div>
				<div className='item-right'>
					<div className='row-1'>
						<div className='name'>Watch</div>
					</div>
					<div className='row-2'>
						<div className='price'>&#8377; 1700</div>
						<div className='row-2-right'>
							<img src={Minus} className='plus' alt='minus' />
							<span>2</span>
							<img src={Plus} className='plus' alt='plus' />

							<div className='total'>&#8377; 3400</div>
							<div className='delete'>
								<img src={Delete} className='plus' alt='delete' />
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<img src={Line} alt='horizontal line' />
		</div>
	);
};

export default Cartrow;

const GET_PRODUCT_DETAILS = gql`
	query getProductDetail($getProductDetailId: ID!) {
		getProductDetail(id: $getProductDetailId) {
			id
			productImage {
				data
				contentType
			}
		}
	}
`;
