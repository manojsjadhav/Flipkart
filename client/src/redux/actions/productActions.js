import axios from "axios";
import * as actionTypes from "../constant/productConstant";

// const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://localhost:8000/product/${id}`);
    console.log(data);

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: err.response,
    });
  }
};


