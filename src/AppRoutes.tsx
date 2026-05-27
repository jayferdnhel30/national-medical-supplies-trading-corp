import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./shared/components/layout/PublicLayout";
import HomePage from "./features/public/pages/home/HomePage";
import ProductListPage from "./features/public/products/pages/ProductListPage";
import ProductDetailPage from "./features/public/products/pages/ProductDetailPage";
import CartPage from "./features/public/cart/pages/CartPage";
import CheckoutPage from "./features/public/checkout/pages/CheckoutPage";
import AboutPage from "./features/public/pages/about/AboutPage";
import FeedbackPage from "./features/public/pages/feedback/FeedbackPage";
import LoginPage from "./features/public/auth/pages/LoginPage";
import RegisterPage from "./features/public/auth/pages/RegisterPage";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoute from "./shared/components/common/ProtectedRoute";
import OrdersPage from "./features/public/orders/pages/OrdersPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/admin/*" element={<AdminRoutes />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
