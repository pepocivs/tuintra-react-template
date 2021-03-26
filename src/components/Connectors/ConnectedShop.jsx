import { connect } from "react-redux";

import Shop from "components/Containers/ShopContainer";

/** ACTIONS */
import actionsShop from "../../redux/shop/actions";

/** SELECTORS */
import {
  getShop,
  getShopLoading,
  getShopReady,
  getShopError,
  getShopHasError
} from "../../redux/shop/selectors";


const mapStateToProps = (state, props) => ({
  shop: {
    data: getShop(state),
    loading: getShopLoading(state),
    ready: getShopReady(state),
    error: getShopError(state),
    hasError: getShopHasError(state)
  },
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(actionsShop.fetchShop()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);