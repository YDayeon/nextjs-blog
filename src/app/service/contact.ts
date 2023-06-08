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
  const { from, subject, message } = params;
  console.log('from', from, 'subject', subject, 'message', message);
  const mailOptions = {
    to: process.env.SMTP_USER,
    subject: subject,
    html: `<h1>[next-blog에서 온 e-mail]</h1>
    <p><strong>Email: </strong> ${params.from}</p><br>
        <p><strong>Subject: </strong> ${subject}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>`,
  };
  await transporter.sendMail(mailOptions);
};
