import { createSelector } from "reselect";
import { get, isEmpty } from "lodash";

const getShop = state => get(state, "shop.data");
const getShopLoading = state => get(state, "shop.loading");
const getShopReady = state => get(state, "shop.ready");
const getShopError = state => get(state, "shop.error");
const getShopHasError = createSelector(
  getShopError,
  error => !isEmpty(error)
);

export {
  getShop,
  getShopLoading,
  getShopReady,
  getShopError,
  getShopHasError
};
