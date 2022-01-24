import * as actionTypes from "../constant/cartConstants";
import axios from "axios";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/product/${id}`);
    console.log(data);
    dispatch({ type:actionTypes.ADD_TO_CART, payload: data });

  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removFromCart = (id) => (dispatch) => {
    console.log(id);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
};
