import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  category: [
    { title: "burger", rus: "Бургеры", image: "/img/burger.png" },
    { title: "snack", rus: "Закуски", image: "/img/snack.png" },
    { title: "hot-dog", rus: "Хот-доги", image: "/img/hot-dog.png" },
    { title: "combo", rus: "Комбо", image: "/img/combo.png" },
    { title: "shawarma", rus: "Шаурма", image: "/img/shawarma.png" },
    { title: "pizza", rus: "Пицца", image: "/img/pizza.png" },
    { title: "wok", rus: "Вок", image: "/img/wok.png" },
    { title: "dessert", rus: "Десерты", image: "/img/dessert.png" },
    { title: "sauce", rus: "Соусы", image: "/img/sauce.png" },
  ],
  error: "",
  activeCategory: 0,
};
export const categoryRequestAsync = createAsyncThunk("category/fetch", () =>
  fetch(`${API_URI}${POSTFIX}/category`)
    .then((req) => req.json())
    .catch((error) => ({ error }))
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      console.log("state", state, "action", action);
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: {
    [categoryRequestAsync.pending.type]: (state) => {
      state.error = "";
    },
    [categoryRequestAsync.fulfilled.type]: (state, action) => {
      state.error = "";
      state.category = action.payload;
    },
    [categoryRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
