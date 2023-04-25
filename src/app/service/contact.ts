import { TContactForm } from '@/components/ContactForm';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendMail = async (params: TContactForm) => {
  const { email, subject, message } = params;
  console.log('email', email, 'subject', subject, 'message', message);
  await transporter.sendMail({
    from: params.email,
    to: process.env.SMTP_USER,
    subject: params.subject,
    html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${params.email}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
  });
};
