import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, to } = body

    // Validate input
    if (!name || !email || !message || !to) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would use a service like SendGrid, Nodemailer, etc.
    // to send the email to mardhiyatul.utami@gmail.com

    // For demonstration purposes, we'll just log the data and return a success response
    console.log("Email would be sent to:", to)
    console.log("From:", email)
    console.log("Name:", name)
    console.log("Message:", message)

    // Return success response
    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
