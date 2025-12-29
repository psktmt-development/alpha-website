import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const {
      fullName,
      email,
      mobileNumber,
      location,
      companyName,
      role,
      linkedInProfile,
      companyTurnover,
      motivation,
      expectations,
    } = body;

    // Validate required fields
    if (!fullName || !email || !mobileNumber || !location || !companyName || !role || !companyTurnover || !motivation || !expectations) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || "info@thealphacircle.world";

    // Validate environment variables
    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Create HTML email body
    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #af2324; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #af2324; }
            .value { margin-top: 5px; padding-left: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Join The Circle Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Mobile Number:</div>
                <div class="value">${mobileNumber}</div>
              </div>
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${location}</div>
              </div>
              <div class="field">
                <div class="label">Company Name:</div>
                <div class="value">${companyName}</div>
              </div>
              <div class="field">
                <div class="label">Role:</div>
                <div class="value">${role}</div>
              </div>
              ${linkedInProfile ? `
              <div class="field">
                <div class="label">LinkedIn Profile:</div>
                <div class="value"><a href="${linkedInProfile}" target="_blank">${linkedInProfile}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Company Turnover:</div>
                <div class="value">${companyTurnover}</div>
              </div>
              <div class="field">
                <div class="label">Motivation:</div>
                <div class="value">${motivation.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <div class="label">Expectations:</div>
                <div class="value">${expectations.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from The Alpha Circle website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Create plain text version
    const textBody = `
New Join The Circle Submission

Full Name: ${fullName}
Email: ${email}
Mobile Number: ${mobileNumber}
Location: ${location}
Company Name: ${companyName}
Role: ${role}
${linkedInProfile ? `LinkedIn Profile: ${linkedInProfile}\n` : ''}Company Turnover: ${companyTurnover}

Motivation:
${motivation}

Expectations:
${expectations}
    `;

    // Send email
    const mailOptions = {
      from: `"Alpha Circle" <${smtpUser}>`,
      to: receiverEmail,
      subject: "New Join The Circle Submission",
      text: textBody,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Failed to send email" 
      },
      { status: 500 }
    );
  }
}

