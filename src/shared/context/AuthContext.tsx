import {
  createContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { User } from "../types/user";
import { authService } from "../services/authService";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function init() {
      setLoading(true);
      // Try to refresh using refresh token cookie (secure)
      const res = await authService.refresh();
      if (!mounted) return;
      if (res) {
        setUser(res.user);
        setToken(res.token);
      } else {
        // fallback to stored user if any (no access token)
        const stored = authService.getStored();
        if (stored) {
          setUser(stored.user);
          setToken(stored.token);
        }
      }
      setLoading(false);
    }

    init();

    return () => {
      mounted = false;
    };
  }, []);

  async function login(username: string, password: string) {
    setLoading(true);
    const res = await authService.login(username, password);
    setUser(res.user);
    setToken(res.token);
    setLoading(false);
  }

  async function logout() {
    await authService.logout();
    setUser(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
