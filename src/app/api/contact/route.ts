import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, subject, message } = request.body;
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: request.body?.email,
      to: process.env.SMTP_USER,
      subject: subject,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
  } catch (error) {
    return new Response('Message sending failed. Please try again.', {
      status: 500,
    });
  }
  return new Response('✅Message delivered.', {
    status: 200,
  });
}
