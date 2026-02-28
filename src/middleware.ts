// Middleware disabled for static export
// export { auth as middleware } from "@/auth"

export function middleware() {
  // no-op for static export
}

export const config = {
  matcher: [],
};