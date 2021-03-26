import types from "./types";

const fetchShop = () => ({
  type: types.FETCH_SHOP
});

const fetchShopSuccess = data => ({
  type: types.FETCH_SHOP_SUCCESS,
  payload: { data }
});

const fetchShopFailure = error => ({
  type: types.FETCH_SHOP_FAILURE,
  payload: { error }
});

const actions = {
  fetchShop,
  fetchShopSuccess,
  fetchShopFailure
};

export default actions;
