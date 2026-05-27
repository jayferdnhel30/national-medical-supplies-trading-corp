import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./features/admin/layout/AdminLayout";
import DashboardPage from "./features/admin/dashboard/pages/DashboardPage";
import ProductsListPage from "./features/admin/products/pages/ProductsListPage";
import OrdersPage from "./features/admin/orders/pages/OrdersPage";
import ProtectedAdminRoute from "./shared/components/common/ProtectedAdminRoute";

export default function AdminRoutes() {
  return (
    <ProtectedAdminRoute>
      <AdminLayout>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </AdminLayout>
    </ProtectedAdminRoute>
  );
}
