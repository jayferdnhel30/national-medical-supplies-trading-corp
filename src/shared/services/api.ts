// Minimal fetch wrapper that attaches access token and refreshes when needed.
import { authService } from "./authService";

let refreshing: Promise<any> | null = null;

async function fetchWithAuth(input: RequestInfo, init: RequestInit = {}) {
  const token = authService.getAccessToken();
  const headers = new Headers(init.headers || {});
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(input, {
    ...init,
    headers,
    credentials: init.credentials ?? "include",
  });

  if (res.status !== 401) return res;

  // attempt refresh once
  if (!refreshing) {
    refreshing = authService.refresh().finally(() => {
      refreshing = null;
    });
  }

  const refreshed = await refreshing;
  if (!refreshed) {
    // refresh failed
    return res;
  }

  // retry original request with new token
  const newToken = authService.getAccessToken();
  if (newToken) headers.set("Authorization", `Bearer ${newToken}`);

  return fetch(input, {
    ...init,
    headers,
    credentials: init.credentials ?? "include",
  });
}

export default fetchWithAuth;
