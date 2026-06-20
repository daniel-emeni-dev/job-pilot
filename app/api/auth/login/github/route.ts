import { NextRequest, NextResponse } from "next/server";
import { createAuthActions } from "@insforge/sdk/ssr";

export async function POST(req: NextRequest) {
  try {
    const origin = req.nextUrl.origin;
    const callbackUrl = new URL("/api/auth/callback", origin).toString();
    const response = NextResponse.redirect("/", 303);
    const auth = createAuthActions({
      requestCookies: req.cookies,
      responseCookies: response.cookies,
    });

    const { data, error } = await auth.signInWithOAuth("github", {
      redirectTo: callbackUrl,
      skipBrowserRedirect: true,
    });

    if (error || !data.url || !data.codeVerifier) {
      console.error("[api/auth/login/github]", error);
      return NextResponse.json({ success: false, error: error?.message ?? "Unable to start GitHub sign-in." }, { status: 500 });
    }

    response.cookies.set("insforge_code_verifier", data.codeVerifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 600,
    });
    response.headers.set("location", data.url);
    response.status = 303;
    return response;
  } catch (error) {
    console.error("[api/auth/login/github]", error);
    return NextResponse.json({ success: false, error: "Unable to start GitHub sign-in." }, { status: 500 });
  }
}
