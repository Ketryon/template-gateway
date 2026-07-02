import { NextRequest, NextResponse } from "next/server";
import { api, ApiClientError } from "@/lib/api-client";

// ─── Catch-all API proxy ────────────────────────────────────────────
// Forwards requests to your external backend.
//
// Frontend calls:  POST /api/proxy/users/123
// This route hits: POST {API_BASE_URL}/users/123
//
// The api-client attaches the API_KEY automatically.
// Add auth checks, rate limiting, or transforms here as needed.

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, await params);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, await params);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, await params);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, await params);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyRequest(request, await params);
}

async function proxyRequest(
  request: NextRequest,
  params: { path: string[] },
) {
  const path = `/${params.path.join("/")}`;
  const search = request.nextUrl.search;
  const fullPath = `${path}${search}`;

  try {
    const body = request.method !== "GET" && request.method !== "DELETE"
      ? await request.json().catch(() => undefined)
      : undefined;

    const data = await api[methodKey(request.method)](fullPath, body);

    return NextResponse.json(data ?? { success: true });
  } catch (error) {
    if (error instanceof ApiClientError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }

    console.error(`Proxy error [${request.method} ${fullPath}]:`, error);
    return NextResponse.json(
      { error: "Internal proxy error" },
      { status: 502 },
    );
  }
}

function methodKey(method: string) {
  const map: Record<string, keyof typeof api> = {
    GET: "get",
    POST: "post",
    PUT: "put",
    PATCH: "patch",
    DELETE: "delete",
  };
  return map[method] ?? "get";
}
