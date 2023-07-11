import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate("ordersummary")}>Place Order</button>
    </>
  );
};
