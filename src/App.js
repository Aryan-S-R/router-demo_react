import "./App.css";
import { Users } from "./Components/Users";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { OrderSummary } from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import { Product } from "./Components/Product";
import { FeatureProduct } from "./Components/FeatureProducts";
import { NewProduct } from "./Components/NewProduct";
import { UserDeatils } from "./Components/UserDetails";
import { Admin } from "./Components/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="ordersummary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="products" element={<Product />}>
          <Route index element={<FeatureProduct />} />
          <Route path="featured" element={<FeatureProduct />}></Route>
          <Route path="new" element={<NewProduct />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDeatils />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
