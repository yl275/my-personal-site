import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(new URL("/Yuan%20Li.pdf", request.url));
}

