import React from "react";
import { Link } from "react-router-dom";

const AdminLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 240, padding: 16, borderRight: "1px solid #eee" }}>
        <h3>Admin</h3>
        <nav>
          <div>
            <Link to="/admin">Dashboard</Link>
          </div>
          <div>
            <Link to="/admin/products">Products</Link>
          </div>
          <div>
            <Link to="/admin/orders">Orders</Link>
          </div>
        </nav>
      </aside>

      <section style={{ flex: 1, padding: 16 }}>{children}</section>
    </div>
  );
};

export default AdminLayout;
