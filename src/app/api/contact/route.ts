import { sendMail } from '@/app/service/contact';

export async function POST(request: Request) {
  console.log('body', request);
  return new Response('✅Message delivered.', {
    status: 200,
  });
  // try {
  //   console.log('request', request);
  //   await sendMail(request.body);
  // } catch (error) {
  //   return new Response('Message sending failed. Please try again.', {
  //     status: 500,
  //   });
  // }
  // return new Response('✅Message delivered.', {
  //   status: 200,
  // });
}
