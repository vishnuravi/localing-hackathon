import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import pointsReducer from "./pointsReducer";
import locationReducer from "./locationReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  pointsData: pointsReducer,
  locationData: locationReducer
});

export default rootReducer;
