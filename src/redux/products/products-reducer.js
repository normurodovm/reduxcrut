import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/storage";

const initialState = loadState("products") || {
  productList: [],
  totalPrice: 0,
  totalCount: 0,
};

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.productList.find(
        (product) => product.id == action.payload.id
      );

      if (!item) {
        return {
          ...state,
          totalCount: state.totalCount + 1,
          productList: [
            ...state.productList,
            {
              ...action.payload,
              userPrice: action.payload.price,
              userCount: 1,
            },
          ],
        };
      }

      return state;
    },
    toggleAmount: (state, action) => {
      if (action.payload.type === "add") {
        return {
          ...state,
          productList: state.productList.map((item) => {
            if (item.id == action.payload.id && item.userCount < item.count) {
              return {
                ...item,
                userCount: item.userCount + 1,
                userPrice: (item.userCount + 1) * item.price,
              };
            }
            return item;
          }),
        };
      }

      return {
        ...state,
        productList: state.productList.map((item) => {
          if (item.id == action.payload.id && item.userCount > 0) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        }),
      };
    },

    removeProduct: (state, action) => {
      return {
        ...state,
        totalCount: state.totalCount - 1,
        productList: state.productList.filter(
          (item) => item.id != action.payload
        ),
      };
    },
  },
});

export default productReducer.reducer;

export const { addProduct, toggleAmount, removeProduct } =
  productReducer.actions;
