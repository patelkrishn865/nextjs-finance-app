import { updateSession } from "./lib/supabase/middleware";
import { createClient } from "./lib/supabase/server";

export default async function proxy(request) {
  const client = await createClient();
  const {
    data: { user },
  } = await client.auth.getUser();

  const url = new URL(request.url);

  // Redirect unauthenticated users away from dashboard
  if (!user && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/login";
    return Response.redirect(url);
  }

  // Redirect authenticated users away from login page
  if (user && url.pathname.startsWith("/login")) {
    url.pathname = "/dashboard";
    return Response.redirect(url);
  }

  // Keep Supabase session updated
  return updateSession(request);
}

// 🔥 New matcher API for proxy
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
