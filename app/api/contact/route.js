import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, email, whatsapp, service } = await request.json();

    const mailOptions = {
      from: process.env.BREVO_USER,
      to: process.env.RECIPIENT_EMAIL, // Your email where you want to receive contacts
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}