import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-veiw/layout";
import AdminDashboard from "./pages/admin-veiw/dashboard";
import AdminProducts from "./pages/admin-veiw/products";
import AdminOrders from "./pages/admin-veiw/orders";
import AdminFeatures from "./pages/admin-veiw/features";
import ShoppingLayout from "./components/shopping-veiw/layout";
import ShoppingHome from "./pages/shopping-veiw/home";
import ShoppingListing from "./pages/shopping-veiw/listing";
import ShoppingCheckout from "./pages/shopping-veiw/checkout";
import ShoppingAccount from "./pages/shopping-veiw/account";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import { useEffect } from "react";
// import NotFound from "./pages/not-found";

function App() {
  // const user = null;
  const{user, isAuthenticated} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* <h1>Header component</h1> */}
      <Routes>
        {/* Routing for the Login and Register÷ */}
        <Route
          path="/auth" 
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        {/* Routing for the Admin Layout */}
        <Route path="admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
          </CheckAuth>
          }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        {/* Routing for the Shopping Layout   */}
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
             <ShoppingLayout />
          </CheckAuth>
          }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage/>} />
      </Routes>
    </div>
  );
}

export default App;
