import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-veiw/layout";
import AdminDashboard from "./pages/admin-veiw/dashboard";
import AdminProducts from "./pages/admin-veiw/products";
import AdminOrders from "./pages/admin-veiw/orders";
import AdminFeatures from "./pages/admin-veiw/features";

function App() {
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="products" element={<AdminProducts/>}/>
        <Route path="orders" element={<AdminOrders/>}/>
        <Route path="features" element={<AdminFeatures/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
