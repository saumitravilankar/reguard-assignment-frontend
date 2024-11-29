import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/Mainlayout";
import Dashboard from "./routes/Dashboard";
import Customers from "./routes/Customers";
import ErrorPage from "./routes/ErrorPage";
import CustomerTable from "./components/CustomerTable";
import Claims from "./components/Claims";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />}>
          <Route index element={<CustomerTable />} />
          <Route path="/customers/:id/claims" element={<Claims />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
