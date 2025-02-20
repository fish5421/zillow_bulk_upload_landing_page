import { NextResponse } from "next/server";
import sgMail, { ResponseError } from "@sendgrid/mail";

// Log environment variables (safely)
console.log('Environment variables check:');
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Set' : 'Not set');
console.log('CONTACT_TO_EMAIL:', process.env.CONTACT_TO_EMAIL || 'Not set');
console.log('CONTACT_FROM_EMAIL:', process.env.CONTACT_FROM_EMAIL || 'Not set');

// Validate environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
  const missingVars = [];
  if (!SENDGRID_API_KEY) missingVars.push('SENDGRID_API_KEY');
  if (!CONTACT_TO_EMAIL) missingVars.push('CONTACT_TO_EMAIL');
  if (!CONTACT_FROM_EMAIL) missingVars.push('CONTACT_FROM_EMAIL');
  
  console.error(`Missing environment variables: ${missingVars.join(', ')}`);
  throw new Error(
    `Missing required environment variables: ${missingVars.join(', ')}`
  );
}

// Initialize SendGrid with API key
try {
  sgMail.setApiKey(SENDGRID_API_KEY);
  console.log('SendGrid initialized successfully');
} catch (error) {
  console.error('Failed to initialize SendGrid:', error);
  throw error;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const content = {
      to: CONTACT_TO_EMAIL!,
      from: CONTACT_FROM_EMAIL!,
      subject: `New Message From ${name} - ${email}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <strong>From:</strong> ${name} (${email})
          </p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from your website contact form
          </p>
        </div>
      `,
    };

    console.log('Attempting to send email with content:', {
      to: content.to,
      from: content.from,
      subject: content.subject,
      // Omit message content for privacy
    });

    const result = await sgMail.send(content);
    console.log('SendGrid response:', result);
    return NextResponse.json({ status: "success", result });
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    
    if (error instanceof ResponseError && error.response) {
      console.error("SendGrid error response:", {
        headers: error.response.headers,
        body: error.response.body,
      });
      return NextResponse.json(
        { 
          error: "Failed to send message",
          details: error.message,
          code: error.code,
          response: error.response.body
        },
        { status: 500 }
      );
    }
    
    // Handle other types of errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { 
        error: "Failed to send message",
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
