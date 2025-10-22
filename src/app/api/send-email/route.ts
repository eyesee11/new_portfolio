import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Log the attempt
    console.log("Attempting to send email from:", name, email);

    // Check if environment variables are set
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
      console.error("Environment variables missing:");
      console.error("EMAIL_USER:", emailUser ? "Set" : "Not set");
      console.error("EMAIL_PASSWORD:", emailPassword ? "Set" : "Not set");

      return NextResponse.json(
        {
          error:
            "Email service not configured. Please add EMAIL_USER and EMAIL_PASSWORD to .env.local file.",
        },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("✓ Email transporter verified successfully");
    } catch (verifyError: any) {
      console.error("✗ Transporter verification failed:", verifyError.message);
      return NextResponse.json(
        {
          error:
            "Email authentication failed. Please check your Gmail credentials and app password.",
          details: verifyError.message,
        },
        { status: 500 }
      );
    }

    // Email to you (website owner)
    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send to yourself
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #333;">
              <strong>Message:</strong>
              <p style="margin-top: 10px; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #888; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email, // Allow easy reply
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✓ Main email sent successfully:", info.messageId);
    } catch (mailError: any) {
      console.error("✗ Failed to send main email:", mailError.message);
      throw mailError;
    }

    // Optional: Send confirmation email to the sender
    const confirmationEmail = {
      from: emailUser,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thanks for your message!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          <p>Here's a copy of your message:</p>
          <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #333;">
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <p>Best regards,<br/>Ayush Chauhan</p>
        </div>
      `,
    };

    try {
      const confirmInfo = await transporter.sendMail(confirmationEmail);
      console.log(
        "✓ Confirmation email sent successfully:",
        confirmInfo.messageId
      );
    } catch (confirmError: any) {
      console.error(
        "⚠ Failed to send confirmation email:",
        confirmError.message
      );
      // Don't fail if confirmation email fails
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("✗ Error in send-email API:", error);
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
