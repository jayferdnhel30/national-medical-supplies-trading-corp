import type { User } from "../types/user";

const USER_KEY = "app.user";

let accessToken: string | null = null;

async function parseJSON(response: Response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export const authService = {
  async login(username: string, password: string) {
    // POST credentials to server; server should set secure httpOnly refresh cookie
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // allow httpOnly refresh cookie
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const data = await parseJSON(res);
      throw new Error(data?.message || "Login failed");
    }

    const data = await res.json();
    // expected shape: { user, accessToken }
    accessToken = data.accessToken;
    if (data.user) localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return { user: data.user, token: data.accessToken };
  },

  async refresh() {
    // Use refresh token cookie to obtain a new access token
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      this.clear();
      return null;
    }
    const data = await res.json();
    accessToken = data.accessToken;
    if (data.user) localStorage.setItem(USER_KEY, JSON.stringify(data.user));
    return { user: data.user, token: data.accessToken };
  },

  async logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    this.clear();
  },

  clear() {
    accessToken = null;
    localStorage.removeItem(USER_KEY);
  },

  getStored(): { user: User | null; token: string | null } {
    const raw = localStorage.getItem(USER_KEY);
    const user = raw ? JSON.parse(raw) : null;
    return { user, token: accessToken };
  },

  getAccessToken() {
    return accessToken;
  },

  setAccessToken(token: string | null) {
    accessToken = token;
  },

  isAuthenticated() {
    return !!localStorage.getItem(USER_KEY);
  },

  hasRole(role: string) {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return false;
    try {
      const u: User = JSON.parse(raw);
      return u.role === role;
    } catch {
      return false;
    }
  },
};
