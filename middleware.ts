import { NextRequest, NextResponse } from "next/server";
import { createClient } from "./lib/supabase/supabaseClient";

export async function middleware(request: NextRequest) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user === null) {
    return NextResponse.redirect(
      new URL(
        "/login?error=Please login first to acces this route.",
        request.url
      )
    );

    return NextResponse.next();
  }
}

export const config = {
  matcher: [],
};
