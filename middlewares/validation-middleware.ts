import { NextRequest, NextResponse } from "next/server";

export const validationMiddleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname.replace(/^\/(uz|ru|en|kr)/, "");

  // const token = req.cookies.get("token")?.value || "";

  const token = true;

  if (path.includes("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
};
