import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not set");
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            );
        }

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "masonmaeder19@gmail.com",
            subject: `New Contact Form Submission: ${subject}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        });

        if (data.error) {
            console.error("Resend error:", data.error);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data.data?.id });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}