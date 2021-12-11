import * as actionTypes from "../constants/cartConstants";

export const addToCart = (data, qty) => async (dispatch, getState) => {
	console.log(data);
	dispatch({
		type: actionTypes.ADD_TO_CART,
		payload: {
			product: data.id,
			name: data.productName,
			imageUrl: data.productImage.data,
			price: data.productPrice,
			countInStock: data.productStock,
			qty,
		},
	});
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: actionTypes.REMOVE_FROM_CART,
		payload: id,
	});
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
