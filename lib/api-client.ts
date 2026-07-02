// ─── Server-side API client for proxying to external backends ────────
// Used inside Next.js API routes (app/api/) to call your existing
// backend providers. Frontend consumers never talk to the backend
// directly — they go through your Next.js API layer.
//
// Usage in a route handler:
//   const data = await api.get("/users/123");
//   const created = await api.post("/items", { name: "file.pdf" });

const BASE_URL = process.env.API_BASE_URL ?? "";
const API_KEY = process.env.API_KEY ?? "";

interface RequestOptions extends Omit<RequestInit, "method" | "body"> {
  timeout?: number;
}

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
  options: RequestOptions = {},
): Promise<T> {
  const { timeout = 30_000, headers: extraHeaders, ...rest } = options;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(API_KEY && { Authorization: `Bearer ${API_KEY}` }),
        ...extraHeaders,
      },
      ...(body !== undefined && { body: JSON.stringify(body) }),
      ...rest,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new ApiClientError(response.status, text, path);
    }

    if (response.status === 204) return undefined as T;
    return response.json() as Promise<T>;
  } finally {
    clearTimeout(timer);
  }
}

export class ApiClientError extends Error {
  constructor(
    public status: number,
    public body: string,
    public path: string,
  ) {
    super(`API ${status} on ${path}: ${body.slice(0, 200)}`);
    this.name = "ApiClientError";
  }
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>("GET", path, undefined, options),

  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("POST", path, body, options),

  patch: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PATCH", path, body, options),

  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PUT", path, body, options),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>("DELETE", path, undefined, options),
};
