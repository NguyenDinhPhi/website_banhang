import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/layout/Layout";
import productReducer from "./store/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
