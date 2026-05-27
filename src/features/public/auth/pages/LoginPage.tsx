import React, { useState } from "react";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await login(username, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err?.message || "Login failed");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>
        Try: <strong>admin / password</strong> for admin access.
      </p>
    </div>
  );
}
