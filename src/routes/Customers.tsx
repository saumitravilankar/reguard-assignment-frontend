import { Outlet } from "react-router-dom";

const Customers = () => {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
};

export default Customers;
