import { NextResponse } from "next/server"

export async function GET() {
  // Instead of reading the file, redirect to it with proper headers
  return NextResponse.redirect(new URL("/files/mardhiyatul_utami_resume.pdf", "https://v0.dev"))
}
