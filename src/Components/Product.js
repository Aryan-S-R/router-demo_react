import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="New">New</Link>
      </nav>
      <Outlet />
    </>
  );
};
